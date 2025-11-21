<template>
  <div class="blog-container">
    <!-- 深蓝紫色枫叶背景 -->
    <RealisticLeaves />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">技术博客</h1>
        <p class="page-subtitle">分享开发过程中的思考与收获</p>
      </div>
    </section>

    <!-- 博客文章 -->
    <section class="blog-section">
      <div class="container">
        <div class="blog-grid">
          <!-- 文章1：学生会投稿信箱开发心得 -->
          <article class="blog-card">
            <div class="blog-image">
              <div class="blog-icon">📮</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">2024-11-15</span>
                <span class="blog-category">Web开发</span>
              </div>
              <h3>学生会投稿信箱：从需求到上线的完整开发流程</h3>
              <p class="blog-excerpt">
                详细记录了为学校学生会开发投稿管理系统的全过程，包括需求分析、技术选型、
                前后端开发、部署上线等关键环节。分享遇到的技术难点和解决方案...
              </p>
              <div class="blog-tags">
                <span class="tag">Vue.js</span>
                <span class="tag">Node.js</span>
                <span class="tag">全栈开发</span>
              </div>
              <router-link to="/blog/postbox-development" class="read-more">
                阅读全文 →
              </router-link>
            </div>
          </article>

          <!-- 文章2：AI识别福寿螺卵的技术实现 -->
          <article class="blog-card">
            <div class="blog-image">
              <div class="blog-icon">🤖</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">2024-10-28</span>
                <span class="blog-category">人工智能</span>
              </div>
              <h3>基于深度学习的福寿螺卵识别系统技术详解</h3>
              <p class="blog-excerpt">
                深入探讨如何使用计算机视觉和深度学习技术构建福寿螺卵识别系统。
                文章涵盖数据集构建、模型训练、优化策略以及实际应用中的挑战...
              </p>
              <div class="blog-tags">
                <span class="tag">深度学习</span>
                <span class="tag">计算机视觉</span>
                <span class="tag">TensorFlow</span>
              </div>
              <router-link to="/blog/snail-ai-tech" class="read-more">
                阅读全文 →
              </router-link>
            </div>
          </article>

          <!-- 文章3：ARP欺骗漏洞发现与复现 -->
          <article class="blog-card">
            <div class="blog-image">
              <div class="blog-icon">🔒</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">2024-10-10</span>
                <span class="blog-category">网络安全</span>
              </div>
              <h3>ARP欺骗漏洞发现与靶机复现实战</h3>
              <p class="blog-excerpt">
                记录我在局域网中发现ARP欺骗漏洞的完整过程，从漏洞识别、原理分析到在靶机环境中的成功复现。
                分享网络攻击的防范措施和网络安全防护的重要性...
              </p>
              <div class="blog-tags">
                <span class="tag">网络安全</span>
                <span class="tag">ARP欺骗</span>
                <span class="tag">渗透测试</span>
              </div>
              <router-link to="/blog/arp-spoofing" class="read-more">
                阅读全文 →
              </router-link>
            </div>
          </article>

          <!-- 文章4：消防员救援算法 -->
          <article class="blog-card">
            <div class="blog-image">
              <div class="blog-icon">⚡</div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">2024-09-25</span>
                <span class="blog-category">算法设计</span>
              </div>
              <h3>消防员多线程救援3D最短时间算法设计与实现</h3>
              <p class="blog-excerpt">
                为消防员救援场景设计多线程3D路径规划算法，综合考虑地形、障碍物、救援优先级等因素。
                通过并行计算优化，显著提升救援效率，为生命救援争取宝贵时间...
              </p>
              <div class="blog-tags">
                <span class="tag">算法设计</span>
                <span class="tag">多线程</span>
                <span class="tag">路径规划</span>
              </div>
              <router-link to="/blog/rescue-algorithm" class="read-more">
                阅读全文 →
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RealisticLeaves from '../components/RealisticLeaves.vue';
</script>

<style scoped>
.blog-container {
  position: relative;
  min-height: 100vh;
  background: #0f172a;
}

.page-header {
  padding: 6rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(135deg, #0f0a2e 0%, #1a1333 50%, #2d1b69 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  font-weight: bold;
  color: #e2e8f0;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  opacity: 0.8;
}

.blog-section {
  padding: 4rem 2rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #334155;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(67, 56, 202, 0.1);
  border-color: #6366f1;
}

.blog-image {
  height: 150px;
  background: linear-gradient(135deg, #2d1b69 0%, #312e81 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-icon {
  font-size: 3rem;
  opacity: 0.8;
}

.blog-content {
  padding: 1.5rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.blog-date {
  color: #64748b;
  font-size: 0.9rem;
}

.blog-category {
  background: #334155;
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.blog-content h3 {
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.4;
}

.blog-excerpt {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: #0f172a;
  color: #64748b;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid #334155;
}

.read-more {
  color: #a5b4fc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #c7d2fe;
}

.subscribe-section {
  padding: 4rem 2rem;
  background: #1e293b;
  text-align: center;
}

.subscribe-content h2 {
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
}

.subscribe-content p {
  color: #94a3b8;
  margin-bottom: 2rem;
}

.subscribe-form {
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

.email-input {
  flex: 1;
  padding: 0.75rem 1rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 1rem;
}

.email-input:focus {
  outline: none;
  border-color: #6366f1;
}

.subscribe-btn {
  padding: 0.75rem 1.5rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.subscribe-btn:hover {
  background: #5558e3;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .subscribe-form {
    flex-direction: column;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>
