/**
 * 数据统计 SDK
 * 自动收集用户行为数据并发送到统计服务器
 * 
 * 使用方法:
 * <script src="analytics-sdk.js"></script>
 * <script>
 *   Analytics.init('http://your-server.com:8888');
 *   // 自动追踪页面浏览
 *   // Analytics.trackEvent('button_click', 'engagement', 'click', 'submit_button');
 * </script>
 */

(function(window) {
    'use strict';

    // 默认配置
    const DEFAULT_CONFIG = {
        endpoint: '',
        autoTrackPageView: true,
        // 跳过初始化时的首屏 PV（用于 SPA：等待 Router ready 后再手动上报）
        skipInitialPageView: false,
        autoTrackEvents: true,
        batchSize: 10,
        flushInterval: 5000,
        sessionTimeout: 30 * 60 * 1000, // 30分钟
        debug: false
    };

    // SDK 实例
    let config = { ...DEFAULT_CONFIG };
    let userId = null;
    let sessionId = null;
    let sessionStartTime = null;
    let eventQueue = [];
    let flushTimer = null;
    let lastTrackedPath = null;
    let vueRouter = null;

    /**
     * 工具函数：获取设备类型
     */
    function getDeviceType() {
        const ua = navigator.userAgent;
        if (/tablet|ipad|playbook|silk/i.test(ua)) {
            return 'tablet';
        }
        if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) {
            return 'mobile';
        }
        return 'desktop';
    }

    /**
     * 工具函数：获取操作系统
     */
    function getOS() {
        const ua = navigator.userAgent;
        if (ua.includes('Windows NT 10')) return 'Windows 10';
        if (ua.includes('Windows NT 6.3')) return 'Windows 8.1';
        if (ua.includes('Windows NT 6.2')) return 'Windows 8';
        if (ua.includes('Windows NT 6.1')) return 'Windows 7';
        if (ua.includes('Windows')) return 'Windows';
        if (ua.includes('Mac OS X')) return 'macOS';
        if (ua.includes('Linux')) return 'Linux';
        if (ua.includes('Android')) return 'Android';
        if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
        return 'Unknown';
    }

    /**
     * 工具函数：获取浏览器
     */
    function getBrowser() {
        const ua = navigator.userAgent;
        if (ua.includes('Edg/')) return 'Edge';
        if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
        if (ua.includes('Firefox')) return 'Firefox';
        if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
        if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
        if (ua.includes('MSIE') || ua.includes('Trident/')) return 'IE';
        return 'Unknown';
    }

    /**
     * 工具函数：获取浏览器版本
     */
    function getBrowserVersion() {
        const ua = navigator.userAgent;
        const browser = getBrowser();
        
        if (browser === 'Chrome') {
            const match = ua.match(/Chrome\/(\d+)/);
            return match ? match[1] : '';
        }
        if (browser === 'Firefox') {
            const match = ua.match(/Firefox\/(\d+)/);
            return match ? match[1] : '';
        }
        if (browser === 'Safari') {
            const match = ua.match(/Version\/(\d+)/);
            return match ? match[1] : '';
        }
        if (browser === 'Edge') {
            const match = ua.match(/Edg\/(\d+)/);
            return match ? match[1] : '';
        }
        return '';
    }

    /**
     * 工具函数：获取或生成用户ID
     */
    function getOrCreateUserId() {
        if (!userId) {
            // 尝试从 localStorage 获取
            userId = localStorage.getItem('analytics_user_id');
            
            if (!userId) {
                // 生成新用户ID
                userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
                localStorage.setItem('analytics_user_id', userId);
            }
        }
        return userId;
    }

    /**
     * 工具函数：获取或创建会话ID
     */
    function getOrCreateSessionId() {
        const now = Date.now();
        
        // 检查会话是否过期
        if (sessionId && sessionStartTime) {
            const sessionAge = now - sessionStartTime;
            if (sessionAge > config.sessionTimeout) {
                // 会话过期，创建新会话
                sessionId = null;
                sessionStartTime = null;
            }
        }
        
        if (!sessionId) {
            sessionId = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + now;
            sessionStartTime = now;
            sessionStorage.setItem('analytics_session_id', sessionId);
            sessionStorage.setItem('analytics_session_start', sessionStartTime);
        }
        
        return sessionId;
    }

    /**
     * 工具函数：获取屏幕信息
     */
    function getScreenInfo() {
        return {
            width: window.screen.width || window.innerWidth || 0,
            height: window.screen.height || window.innerHeight || 0
        };
    }

    /**
     * 工具函数：日志输出
     */
    function log(message, data) {
        if (config.debug) {
            console.log('[Analytics SDK]', message, data || '');
        }
    }

    /**
     * 获取当前路径（支持SPA hash路由）
     */
    function getCurrentPath() {
        // 优先从Vue Router获取
        // 兼容 Vue Router 4：currentRoute 是 ref，需要取 .value
        if (vueRouter && vueRouter.currentRoute) {
            const route = vueRouter.currentRoute.value || vueRouter.currentRoute;
            return route.path || route.fullPath || window.location.pathname || '/';
        }
        
        // 处理hash路由 (#/path)
        const hash = window.location.hash;
        if (hash && hash.startsWith('#/')) {
            return hash.substring(1); // 移除 #，保留 /path
        }
        
        // 传统路径
        return window.location.pathname || '/';
    }

    /**
     * 获取页面标题（支持SPA）
     */
    function getPageTitle() {
        // 优先从Vue Router获取
        if (vueRouter && vueRouter.currentRoute && vueRouter.currentRoute.meta && vueRouter.currentRoute.meta.title) {
            return vueRouter.currentRoute.meta.title;
        }
        
        return document.title || '';
    }

    /**
     * 构建基础数据对象
     */
    function buildBaseData() {
        const screen = getScreenInfo();
        const deviceType = getDeviceType();
        
        return {
            device_type: deviceType,
            os: getOS(),
            browser: getBrowser(),
            browser_version: getBrowserVersion(),
            screen_width: String(screen.width),
            screen_height: String(screen.height),
            user_id: getOrCreateUserId(),
            session_id: getOrCreateSessionId(),
            timestamp: new Date().toISOString(),
            url: window.location.href,
            referrer: document.referrer || '',
            language: navigator.language || navigator.userLanguage || ''
        };
    }

    /**
     * 发送数据到服务器
     */
    function sendData(data, useBeacon = false) {
        if (!config.endpoint) {
            log('错误: 未设置服务器地址', '请先调用 Analytics.init()');
            return;
        }

        const url = config.endpoint + '/collect';
        
        // 如果使用 Beacon API（适用于页面卸载时）
        if (useBeacon && navigator.sendBeacon) {
            try {
                const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
                navigator.sendBeacon(url, blob);
                log('数据已通过 Beacon 发送', data);
                return;
            } catch (e) {
                log('Beacon 发送失败，使用 fetch', e);
            }
        }

        // 使用 fetch 发送
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            keepalive: true // 允许在页面卸载后继续发送
        }).then(response => {
            if (response.ok) {
                log('数据发送成功', data);
            } else {
                log('数据发送失败', response.status);
            }
        }).catch(error => {
            log('数据发送错误', error);
            // 失败时加入队列，稍后重试
            eventQueue.push(data);
        });
    }

    /**
     * 批量发送队列中的数据
     */
    function flushQueue() {
        if (eventQueue.length === 0) return;

        const batch = eventQueue.splice(0, config.batchSize);
        batch.forEach(data => sendData(data));
    }

    /**
     * 启动定时刷新
     */
    function startFlushTimer() {
        if (flushTimer) return;
        
        flushTimer = setInterval(() => {
            flushQueue();
        }, config.flushInterval);
    }

    /**
     * 停止定时刷新
     */
    function stopFlushTimer() {
        if (flushTimer) {
            clearInterval(flushTimer);
            flushTimer = null;
        }
    }

    /**
     * 公共 API
     */
    const Analytics = {
        /**
         * 初始化 SDK
         * @param {string} endpoint - 统计服务器地址，例如 'http://localhost:8888'
         * @param {object} options - 配置选项
         */
        init: function(endpoint, options = {}) {
            if (!endpoint) {
                console.error('[Analytics SDK] 错误: 必须提供服务器地址');
                return;
            }

            // 合并配置
            config = {
                ...DEFAULT_CONFIG,
                endpoint: endpoint.replace(/\/$/, ''), // 移除尾部斜杠
                ...options
            };

            log('SDK 初始化', config);

            // 恢复会话
            const savedSessionId = sessionStorage.getItem('analytics_session_id');
            const savedSessionStart = sessionStorage.getItem('analytics_session_start');
            if (savedSessionId && savedSessionStart) {
                const sessionAge = Date.now() - parseInt(savedSessionStart);
                if (sessionAge <= config.sessionTimeout) {
                    sessionId = savedSessionId;
                    sessionStartTime = parseInt(savedSessionStart);
                }
            }

            // 启动定时刷新
            startFlushTimer();

            // 自动追踪页面浏览
            if (config.autoTrackPageView && !config.skipInitialPageView) {
                this.trackPageView();
            }

            // 监听hash路由变化（用于SPA）
            window.addEventListener('hashchange', () => {
                if (config.autoTrackPageView) {
                    // 延迟一下确保Vue组件已更新
                    setTimeout(() => {
                        this.trackPageView();
                    }, 100);
                }
            }, false);

            // 监听popstate事件（浏览器前进后退）
            window.addEventListener('popstate', () => {
                if (config.autoTrackPageView) {
                    setTimeout(() => {
                        this.trackPageView();
                    }, 100);
                }
            }, false);

            // 监听页面卸载事件
            window.addEventListener('beforeunload', () => {
                // 刷新队列并发送未发送的数据
                flushQueue();
            }, false);

            log('SDK 初始化完成');
        },

        /**
         * 追踪页面浏览
         * @param {string} pageTitle - 页面标题（可选，自动获取）
         * @param {string} pagePath - 页面路径（可选，自动获取，支持hash路由）
         */
        trackPageView: function(pageTitle, pagePath) {
            const currentPath = pagePath || getCurrentPath();
            
            // 避免重复追踪相同路径
            if (currentPath === lastTrackedPath) {
                log('跳过重复路径', currentPath);
                return;
            }
            
            lastTrackedPath = currentPath;
            
            const data = {
                ...buildBaseData(),
                title: pageTitle || getPageTitle() || '',
                path: currentPath,
                pv: '1',
                event: 'page_view'
            };

            sendData(data);
            log('页面浏览已追踪', data);
        },

        /**
         * 追踪事件
         * @param {string} eventName - 事件名称
         * @param {string} eventCategory - 事件类别（可选）
         * @param {string} eventAction - 事件动作（可选）
         * @param {string} eventLabel - 事件标签（可选）
         * @param {string|number} eventValue - 事件值（可选）
         */
        trackEvent: function(eventName, eventCategory, eventAction, eventLabel, eventValue) {
            const data = {
                ...buildBaseData(),
                event: eventName || '',
                event_category: eventCategory || '',
                event_action: eventAction || '',
                event_label: eventLabel || '',
                event_value: eventValue ? String(eventValue) : '',
                path: window.location.pathname || '/'
            };

            sendData(data);
            log('事件已追踪', data);
        },

        /**
         * 追踪用户输入
         * @param {string} fieldName - 字段名称
         * @param {string} inputType - 输入类型（可选，默认 'text'）
         */
        trackInput: function(fieldName, inputType) {
            const data = {
                ...buildBaseData(),
                input_type: inputType || 'text',
                field_name: fieldName || '',
                path: window.location.pathname || '/'
            };

            sendData(data);
            log('用户输入已追踪', data);
        },

        /**
         * 设置用户ID（用于登录后关联用户）
         * @param {string} customUserId - 自定义用户ID
         */
        setUserId: function(customUserId) {
            if (customUserId) {
                userId = customUserId;
                localStorage.setItem('analytics_user_id', userId);
                log('用户ID已设置', userId);
            }
        },

        /**
         * 获取当前用户ID
         * @returns {string} 用户ID
         */
        getUserId: function() {
            return getOrCreateUserId();
        },

        /**
         * 获取当前会话ID
         * @returns {string} 会话ID
         */
        getSessionId: function() {
            return getOrCreateSessionId();
        },

        /**
         * 手动刷新队列
         */
        flush: function() {
            flushQueue();
        },

        /**
         * 重置用户（清除用户ID和会话）
         */
        reset: function() {
            userId = null;
            sessionId = null;
            sessionStartTime = null;
            lastTrackedPath = null;
            localStorage.removeItem('analytics_user_id');
            sessionStorage.removeItem('analytics_session_id');
            sessionStorage.removeItem('analytics_session_start');
            log('用户数据已重置');
        },

        /**
         * 绑定Vue Router（用于Vue.js SPA）
         * @param {object} router - Vue Router实例
         */
        bindVueRouter: function(router) {
            if (!router) {
                log('错误: Vue Router实例无效');
                return;
            }

            vueRouter = router;

            // 监听Vue Router的导航
            router.afterEach((to, from) => {
                if (config.autoTrackPageView) {
                    // 重置lastTrackedPath以确保路由变化能被追踪
                    lastTrackedPath = null;
                    this.trackPageView();
                }
            });

            log('Vue Router 已绑定');
        }
    };

    // 自动追踪链接点击事件（可选）
    function autoTrackLinkClicks() {
        document.addEventListener('click', function(e) {
            const target = e.target.closest('a');
            if (target && target.href) {
                const href = target.href;
                // 只追踪外部链接或特定类型的链接
                if (href.startsWith('http') && !href.startsWith(window.location.origin)) {
                    Analytics.trackEvent('link_click', 'navigation', 'click', href);
                }
            }
        }, true);
    }

    // 自动追踪表单提交
    function autoTrackFormSubmit() {
        document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.tagName === 'FORM') {
                Analytics.trackEvent('form_submit', 'engagement', 'submit', form.id || form.name || 'unknown_form');
            }
        }, true);
    }

    // 导出到全局
    window.Analytics = Analytics;

    // 如果在DOM加载后，自动启动事件追踪
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (config.autoTrackEvents) {
                autoTrackLinkClicks();
                autoTrackFormSubmit();
            }
        });
    } else {
        if (config.autoTrackEvents) {
            autoTrackLinkClicks();
            autoTrackFormSubmit();
        }
    }

})(window);

