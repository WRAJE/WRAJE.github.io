<template>
  <div class="blog-post-container">
    <!-- 深蓝紫色枫叶背景 -->
    <RealisticLeaves />
    
    <!-- 文章头部 -->
    <header class="post-header">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/blog" class="breadcrumb-link">博客</router-link>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">{{ postTitle }}</span>
        </nav>
        <h1 class="post-title">{{ postTitle }}</h1>
        <div class="post-meta">
          <span class="post-date">{{ postDate }}</span>
          <span class="post-category">{{ postCategory }}</span>
          <div class="post-tags">
            <span v-for="tag in postTags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        
        <!-- 添加文章内导航 -->
        <nav class="article-nav">
          <router-link v-if="prevPost" :to="prevPost.path" class="article-nav-link prev">
            <div class="nav-icon">←</div>
            <div class="nav-content">
              <div class="nav-label">上一篇</div>
              <div class="nav-title">{{ prevPost.title }}</div>
            </div>
          </router-link>
          
          <router-link to="/blog" class="article-nav-link back-to-list">
            <div class="nav-icon">☰</div>
            <div class="nav-content">
              <div class="nav-label">返回</div>
              <div class="nav-title">博客列表</div>
            </div>
          </router-link>
          
          <router-link v-if="nextPost" :to="nextPost.path" class="article-nav-link next">
            <div class="nav-content">
              <div class="nav-label">下一篇</div>
              <div class="nav-title">{{ nextPost.title }}</div>
            </div>
            <div class="nav-icon">→</div>
          </router-link>
        </nav>
      </div>
    </header>

    <!-- 文章内容 -->
    <main class="post-content">
      <div class="container">
        <div class="content-wrapper">
          <slot></slot>
        </div>
        
        <!-- 文章底部导航 -->
        <nav class="post-navigation">
          <router-link v-if="prevPost" :to="prevPost.path" class="nav-link prev">
            <span class="nav-direction">← 上一篇</span>
            <span class="nav-title">{{ prevPost.title }}</span>
          </router-link>
          <router-link to="/blog" class="nav-link back">
            <span class="nav-direction">↑ 返回博客列表</span>
          </router-link>
          <router-link v-if="nextPost" :to="nextPost.path" class="nav-link next">
            <span class="nav-direction">下一篇 →</span>
            <span class="nav-title">{{ nextPost.title }}</span>
          </router-link>
        </nav>
      </div>
    </main>

    <!-- 浮动导航按钮 -->
    <div class="floating-nav">
      <router-link v-if="prevPost" :to="prevPost.path" class="float-btn" title="上一篇">
        ←
      </router-link>
      <router-link to="/blog" class="float-btn" title="返回博客列表">
        ☰
      </router-link>
      <router-link v-if="nextPost" :to="nextPost.path" class="float-btn" title="下一篇">
        →
      </router-link>
    </div>

    <!-- 返回顶部按钮 -->
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop" 
      class="back-to-top"
      title="返回顶部"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import RealisticLeaves from '../components/RealisticLeaves.vue';

const props = defineProps({
  postTitle: {
    type: String,
    required: true
  },
  postDate: {
    type: String,
    required: true
  },
  postCategory: {
    type: String,
    required: true
  },
  postTags: {
    type: Array,
    default: () => []
  },
  prevPost: {
    type: Object,
    default: null
  },
  nextPost: {
    type: Object,
    default: null
  }
});

const router = useRouter();
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 监听路由变化，自动滚动到顶部
watch(() => router.currentRoute.value, () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 100);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // 页面加载时滚动到顶部
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.blog-post-container {
  position: relative;
  min-height: 100vh;
  background: #0f172a;
}

.post-header {
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, #0f0a2e 0%, #1a1333 50%, #2d1b69 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.breadcrumb {
  margin-bottom: 2rem;
}

.breadcrumb-link {
  color: #a5b4fc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #c7d2fe;
}

.breadcrumb-separator {
  color: #64748b;
  margin: 0 0.5rem;
}

.breadcrumb-current {
  color: #94a3b8;
}

.post-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.post-date {
  color: #94a3b8;
  font-size: 0.95rem;
}

.post-category {
  background: #334155;
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #1e293b;
  color: #64748b;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  border: 1px solid #334155;
}

/* 文章内导航 */
.article-nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  border: 1px solid #334155;
}

.article-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.article-nav-link:hover {
  background: #334155;
  border-color: #6366f1;
  transform: translateY(-2px);
}

.article-nav-link.prev {
  justify-self: start;
}

.article-nav-link.back-to-list {
  justify-self: center;
  text-align: center;
}

.article-nav-link.next {
  justify-self: end;
  flex-direction: row-reverse;
}

.nav-icon {
  font-size: 1.2rem;
  color: #a5b4fc;
}

.nav-content {
  flex: 1;
}

.nav-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.nav-title {
  font-size: 0.9rem;
  color: #e2e8f0;
  font-weight: 500;
  line-height: 1.3;
}

.post-content {
  padding: 4rem 2rem;
  background: #0f172a;
}

.content-wrapper {
  background: #1e293b;
  border-radius: 16px;
  padding: 3rem;
  border: 1px solid #334155;
}

.content-wrapper :deep(h2) {
  color: #a5b4fc;
  font-size: 1.8rem;
  margin: 2.5rem 0 1rem 0;
  border-bottom: 2px solid #334155;
  padding-bottom: 0.5rem;
}

.content-wrapper :deep(h3) {
  color: #e2e8f0;
  font-size: 1.4rem;
  margin: 2rem 0 1rem 0;
}

.content-wrapper :deep(p) {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.content-wrapper :deep(ul), 
.content-wrapper :deep(ol) {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.content-wrapper :deep(li) {
  margin-bottom: 0.5rem;
}

.content-wrapper :deep(code) {
  background: #0f172a;
  color: #a5b4fc;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
}

.content-wrapper :deep(pre) {
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.content-wrapper :deep(pre code) {
  background: none;
  padding: 0;
  color: #e2e8f0;
}

.content-wrapper :deep(blockquote) {
  border-left: 4px solid #6366f1;
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  color: #64748b;
  font-style: italic;
}

/* 文章底部导航 */
.post-navigation {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  margin-top: 3rem;
  padding: 2rem;
  background: #1e293b;
  border-radius: 12px;
  border: 1px solid #334155;
}

.nav-link {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-link:hover {
  border-color: #6366f1;
  transform: translateY(-2px);
}

.nav-link.prev {
  text-align: left;
}

.nav-link.back {
  text-align: center;
  justify-content: center;
}

.nav-link.next {
  text-align: right;
}

.nav-direction {
  color: #a5b4fc;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.nav-title {
  color: #e2e8f0;
  font-weight: 500;
  line-height: 1.3;
}

/* 浮动导航按钮 */
.floating-nav {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 40;
}

.float-btn {
  width: 48px;
  height: 48px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #a5b4fc;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.float-btn:hover {
  background: #334155;
  border-color: #6366f1;
  color: #c7d2fe;
  transform: scale(1.1);
}

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.back-to-top:hover {
  background: #5558e3;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .post-title {
    font-size: 2rem;
  }
  
  .content-wrapper {
    padding: 2rem 1.5rem;
  }
  
  .article-nav {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .article-nav-link.next {
    flex-direction: row;
  }
  
  .post-navigation {
    grid-template-columns: 1fr;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .floating-nav {
    right: 1rem;
  }
  
  .back-to-top {
    bottom: 1rem;
    right: 1rem;
  }
}

@media (max-width: 480px) {
  .post-header {
    padding: 4rem 1rem 1rem;
  }
  
  .post-content {
    padding: 2rem 1rem;
  }
  
  .content-wrapper {
    padding: 1.5rem 1rem;
  }
}
</style>
