<template>
  <div class="projects-container">
    <!-- 深蓝紫色枫叶背景 -->
    <RealisticLeaves />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">我的项目</h1>
        <p class="page-subtitle">探索我开发的创新解决方案</p>
      </div>
    </section>

    <!-- 项目展示 -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <!-- 项目1：学生会投稿信箱 -->
          <div class="project-card">
            <div class="project-image">
              <div class="project-icon">📮</div>
            </div>
            <div class="project-content">
              <h3>学生会投稿信箱</h3>
              <p class="project-tech">Vue.js | Node.js | Express | MongoDB</p>
              <p class="project-description">
                为学校学生会开发的一站式投稿管理系统，支持文章投稿、审核流程、分类管理和通知功能。
                系统采用前后端分离架构，提供直观的管理界面和流畅的用户体验。
              </p>
              <div class="project-features">
                <span class="feature-tag">前后端分离</span>
                <span class="feature-tag">权限管理</span>
                <span class="feature-tag">实时通知</span>
              </div>
              <div class="project-links">
                <a href="#" class="project-link">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  源代码
                </a>
                <a href="#" class="project-link">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  在线演示
                </a>
              </div>
            </div>
          </div>

          <!-- 项目2：福寿螺卵识别AI -->
          <div class="project-card">
            <div class="project-image">
              <div class="project-icon">🐌</div>
            </div>
            <div class="project-content">
              <h3>福寿螺卵识别AI系统</h3>
              <p class="project-tech">Python | TensorFlow | OpenCV | Flask | 深度学习</p>
              <p class="project-description">
                基于视觉多模态大模型开发的智能识别系统，能够准确识别福寿螺卵。
                该项目结合计算机视觉和深度学习技术，为农业生态保护提供技术支持，
                识别准确率达到95%以上。
              </p>
              <div class="project-features">
                <span class="feature-tag">深度学习</span>
                <span class="feature-tag">计算机视觉</span>
                <span class="feature-tag">高精度识别</span>
              </div>
              <div class="project-links">
                <a href="#" class="project-link">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  源代码
                </a>
                <a href="#" class="project-link">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  技术报告
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目统计 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">2</div>
            <div class="stat-label">完成项目</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">95%+</div>
            <div class="stat-label">AI识别准确率</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">代码提交</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">∞</div>
            <div class="stat-label">学习热情</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RealisticLeaves from '../components/RealisticLeaves.vue';
</script>

<style scoped>
.projects-container {
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

.projects-section {
  padding: 4rem 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.project-card {
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #334155;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(67, 56, 202, 0.15);
  border-color: #6366f1;
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #2d1b69 0%, #312e81 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-icon {
  font-size: 4rem;
  opacity: 0.8;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  font-size: 1.5rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.project-tech {
  color: #818cf8;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Monaco', 'Menlo', monospace;
}

.project-description {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature-tag {
  background: #334155;
  color: #a5b4fc;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid #475569;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a5b4fc;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #475569;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.project-link:hover {
  background: #334155;
  color: #c7d2fe;
  transform: translateY(-2px);
}

.stats-section {
  padding: 4rem 2rem;
  background: #1e293b;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem;
  background: #0f172a;
  border-radius: 12px;
  border: 1px solid #334155;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #a5b4fc;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #64748b;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
