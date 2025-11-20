<template>
  <div class="links-container">
    <!-- 深蓝紫色枫叶背景 -->
    <RealisticLeaves />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">联系方式</h1>
        <p class="page-subtitle">欢迎与我联系和交流</p>
      </div>
    </section>

    <!-- 主要链接 -->
    <section class="main-links">
      <div class="container">
        <div class="links-grid">
          <!-- GitHub -->
          <a href="https://github.com/WRAJE" target="_blank" class="link-card primary">
            <div class="link-icon">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div class="link-content">
              <h3>GitHub</h3>
              <p>查看我的开源项目和代码</p>
              <span class="link-url">github.com/WRAJE</span>
            </div>
            <div class="link-arrow">→</div>
          </a>

          <!-- QQ邮箱 -->
          <a href="mailto:2818808836@qq.com" class="link-card">
            <div class="link-icon">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div class="link-content">
              <h3>QQ邮箱</h3>
              <p>技术交流和项目合作</p>
              <span class="link-url">2818808836@qq.com</span>
            </div>
            <div class="link-arrow">→</div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RealisticLeaves from '../components/RealisticLeaves.vue';
</script>

<style scoped>
.links-container {
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

.main-links {
  padding: 4rem 2rem;
}

.links-grid {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-card:hover {
  transform: translateY(-4px);
  border-color: #6366f1;
  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.15);
}

.link-card.primary {
  background: linear-gradient(135deg, #2d1b69 0%, #312e81 100%);
  border-color: #6366f1;
}

.link-icon {
  flex-shrink: 0;
  color: #a5b4fc;
}

.link-card.primary .link-icon {
  color: #c7d2fe;
}

.link-content {
  flex: 1;
}

.link-content h3 {
  font-size: 1.5rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.link-content p {
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.link-url {
  color: #64748b;
  font-size: 0.9rem;
  font-family: 'Monaco', 'Menlo', monospace;
}

.link-arrow {
  font-size: 1.5rem;
  color: #a5b4fc;
  transition: transform 0.3s ease;
}

.link-card:hover .link-arrow {
  transform: translateX(4px);
}

.social-links {
  padding: 4rem 2rem;
  background: #1e293b;
}

.social-links h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #a5b4fc;
  margin-bottom: 3rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.social-card {
  display: block;
  text-align: center;
  padding: 2rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-card:hover {
  transform: translateY(-4px);
  border-color: #6366f1;
}

.social-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.social-card h3 {
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.social-card p {
  color: #64748b;
}

.tech-platforms {
  padding: 4rem 2rem;
}

.tech-platforms h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #a5b4fc;
  margin-bottom: 3rem;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.platform-card {
  display: block;
  text-align: center;
  padding: 2rem;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-4px);
  border-color: #6366f1;
}

.platform-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.platform-card h3 {
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.platform-card p {
  color: #64748b;
}

@media (max-width: 768px) {
  .link-card {
    flex-direction: column;
    text-align: center;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>
