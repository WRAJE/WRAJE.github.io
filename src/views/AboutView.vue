<template>
  <div class="about-container">
    <!-- 深蓝紫色枫叶背景 -->
    <RealisticLeaves />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">关于我</h1>
        <p class="page-subtitle">了解更多关于我的信息</p>
      </div>
    </section>

    <!-- 个人简介卡片 -->
    <section class="profile-section">
      <div class="container">
        <div class="profile-card">
          <div class="profile-image">
            <div class="photo-container">
              <img :src="myPhoto" alt="我的照片" class="avatar-img">
              <div class="image-overlay">
                <div class="overlay-text">高中生开发者</div>
              </div>
            </div>
          </div>
          <div class="profile-content">
            <h2>个人简介</h2>
            <p class="intro-text">
              我是一名充满热情的高中生开发者，对技术创新有着浓厚的兴趣。
              专注于Web开发、人工智能和网络安全领域，通过实际项目不断提升技术能力。
              相信技术能够改变世界，希望通过自己的努力为社会创造价值。
            </p>
            
            <div class="quick-info">
              <div class="info-item">
                <span class="info-icon">🎓</span>
                <span class="info-text">高中生 | 计算机爱好者</span>
              </div>
              <div class="info-item">
                <span class="info-icon">💻</span>
                <span class="info-text">全栈开发 | AI | 网络安全</span>
              </div>
              <div class="info-item">
                <span class="info-icon">🚀</span>
                <span class="info-text">2年+ 开发经验</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 详细信息 -->
    <section class="about-content">
      <div class="container">
        <div class="content-grid">
          <div class="about-text">
            <h2>教育背景</h2>
            <ul>
              <li><strong>高中</strong>：专注于计算机科学和数学</li>
              <li><strong>自学</strong>：Web开发、深度学习、网络安全</li>
              <li><strong>在线课程</strong>：Coursera、edX、B站技术课程</li>
            </ul>
            
            <h2>技术兴趣</h2>
            <ul>
              <li>全栈Web开发（Vue.js、Node.js、Python）</li>
              <li>人工智能与深度学习</li>
              <li>网络安全与渗透测试</li>
              <li>算法设计与优化</li>
            </ul>
          </div>
          
          <div class="about-stats">
            <div class="stat-card">
              <div class="stat-number">2+</div>
              <div class="stat-label">年开发经验</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">10+</div>
              <div class="stat-label">完成项目</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">5+</div>
              <div class="stat-label">技术领域</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">∞</div>
              <div class="stat-label">学习热情</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能时间线 -->
    <section class="skills-timeline">
      <div class="container">
        <h2>技能发展历程</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2022</div>
            <div class="timeline-content">
              <h3>开始编程之旅</h3>
              <p>学习Python基础，完成第一个小项目</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2023</div>
            <div class="timeline-content">
              <h3>深入Web开发</h3>
              <p>学习Vue.js、Node.js，开发全栈应用</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2024</div>
            <div class="timeline-content">
              <h3>AI与网络安全</h3>
              <p>学习深度学习，发现网络安全漏洞</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import RealisticLeaves from '../components/RealisticLeaves.vue';
import myPhoto from '../assets/my-photo.jpg';
</script>

<style scoped>
.about-container {
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

.profile-section {
  padding: 4rem 2rem;
}

.profile-card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  background: #1e293b;
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid #334155;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.profile-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.avatar-img {
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.avatar-img:hover {
  transform: scale(1.05);
}

.image-overlay {
  position: static;
  transform: none;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
  text-align: center;
}

.overlay-text {
  font-size: 0.9rem;
}

.profile-content h2 {
  font-size: 2rem;
  color: #a5b4fc;
  margin-bottom: 1.5rem;
}

.intro-text {
  color: #94a3b8;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.quick-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #0f172a;
  border-radius: 12px;
  border: 1px solid #334155;
  transition: all 0.3s ease;
}

.info-item:hover {
  border-color: #6366f1;
  transform: translateX(5px);
}

.info-icon {
  font-size: 1.5rem;
}

.info-text {
  color: #e2e8f0;
  font-size: 1rem;
}

.about-content {
  padding: 4rem 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text h2 {
  font-size: 2rem;
  color: #a5b4fc;
  margin-bottom: 1.5rem;
}

.about-text h3 {
  font-size: 1.5rem;
  color: #e2e8f0;
  margin: 2rem 0 1rem 0;
}

.about-text p {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.about-text ul {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.about-text li {
  margin-bottom: 0.5rem;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.stat-card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #334155;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: #6366f1;
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

.skills-timeline {
  padding: 4rem 2rem;
  background: #1e293b;
}

.skills-timeline h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #a5b4fc;
  margin-bottom: 3rem;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #334155;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-date {
  width: 120px;
  text-align: center;
  padding: 1rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #a5b4fc;
  font-weight: bold;
  margin: 0 2rem;
}

.timeline-content {
  flex: 1;
  background: #0f172a;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #334155;
}

.timeline-content h3 {
  color: #e2e8f0;
  margin-bottom: 1rem;
}

.timeline-content p {
  color: #94a3b8;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .profile-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .photo-container {
    gap: 1rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: column !important;
    margin-left: 40px;
  }
  
  .timeline-date {
    margin: 0 0 1rem 0;
    width: auto;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .image-overlay, .profile-badge {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}
</style>
