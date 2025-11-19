<template>
  <div class="home-container">
    <!-- 深蓝紫色枫叶背景 -->
    <RealisticLeaves />
    
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">你好，我是Yuezhou Wang</h1>
        <p class="hero-subtitle">高中生开发者 | AI爱好者 | 网络安全研究者</p>
        
        <div class="hero-description">
          <p>我是一名充满热情的高中生开发者，专注于AI、网络安全和全栈开发。</p>
          <p>热爱用技术创新解决实际问题，享受编程带来的无限可能。</p>
        </div>
        
        <div class="hero-buttons">
          <router-link to="/projects" class="btn-primary">
            查看我的项目
          </router-link>
          <router-link to="/blog" class="btn-secondary">
            阅读我的博客
          </router-link>
        </div>
      </div>
    </section>

    <!-- 关于我简介 -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-image">
            <div class="profile-card">
              <img :src="myPhoto" alt="我的照片" class="avatar">
              <div class="profile-badge">
                <span class="badge-text">高中生开发者</span>
              </div>
            </div>
          </div>
          <div class="intro-text">
            <h2>关于我</h2>
            <p>我是一名充满热情的高中生开发者，对技术创新有着浓厚的兴趣。</p>
            <p>我擅长使用Vue.js、Python等现代技术栈，开发了学生会投稿信箱和福寿螺卵识别AI等实际项目。</p>
            <p>在算法方面，我为消防员多线程救援数学模型编写了3D最短时间算法，优化救援路径规划。</p>
            <p>在网络安全领域，我独立发现了局域网内ARP欺骗漏洞，并在靶机上成功复现攻击过程。</p>
            <p>我相信技术能够解决实际问题，希望通过自己的努力为校园和社会贡献一份力量。</p>
            
            <div class="intro-actions">
              <router-link to="/about" class="action-btn primary">
                了解更多
              </router-link>
              <router-link to="/projects" class="action-btn secondary">
                查看项目
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速技能展示 -->
    <section class="skills-preview">
      <div class="container">
        <h2>核心技能</h2>
        <div class="skills-grid">
          <div class="skill-item" v-for="skill in skills" :key="skill.name">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <div class="skill-dots">
              <span v-for="i in 5" :key="i" 
                    :class="['dot', { filled: i <= skill.level }]">
                ●
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目预览 -->
    <section class="projects-preview">
      <div class="container">
        <h2>精选项目</h2>
        <div class="preview-grid">
          <div class="preview-card">
            <div class="preview-icon">📮</div>
            <h3>学生会投稿信箱</h3>
            <p>全栈开发的校园管理系统</p>
            <router-link to="/projects" class="preview-link">查看详情 →</router-link>
          </div>
          <div class="preview-card">
            <div class="preview-icon">🤖</div>
            <h3>福寿螺卵识别AI</h3>
            <p>基于深度学习的视觉识别系统</p>
            <router-link to="/projects" class="preview-link">查看详情 →</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import RealisticLeaves from '../components/RealisticLeaves.vue';
import myPhoto from '../assets/my-photo.jpg';

const skills = ref([
  { name: 'Vue.js', icon: '🟢', level: 5 },
  { name: 'Python', icon: '🐍', level: 4 },
  { name: '深度学习', icon: '🧠', level: 4 },
  { name: 'Node.js', icon: '🟩', level: 3 },
  { name: '计算机视觉', icon: '👁️', level: 4 },
  { name: '网络安全', icon: '🔒', level: 3 },
  { name: '算法设计', icon: '⚡', level: 4 },
  { name: 'Git', icon: '📦', level: 4 }
]);
</script>

<style scoped>
.home-container {
  position: relative;
  min-height: 100vh;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0a2e 0%, #1a1333 25%, #2d1b69 50%, #312e81 75%, #1e1b4b 100%);
  position: relative;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  z-index: 10;
  position: relative;
  color: #cbd5e1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease-out;
  color: #e2e8f0;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.85;
  animation: fadeInUp 1s ease-out 0.2s both;
  color: #94a3b8;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 3rem;
  opacity: 0.75;
  line-height: 1.6;
  animation: fadeInUp 1s ease-out 0.4s both;
  color: #64748b;
}

.hero-description p {
  margin-bottom: 0.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: #334155;
  color: #a5b4fc;
  border: 1px solid #475569;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(67, 56, 202, 0.2);
  background: #475569;
}

.btn-secondary {
  background: transparent;
  color: #cbd5e1;
  border: 2px solid #475569;
}

.btn-secondary:hover {
  background: #334155;
  color: #a5b4fc;
  transform: translateY(-2px);
}

.intro-section {
  padding: 6rem 2rem;
  background: #1e293b;
  backdrop-filter: blur(10px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

.intro-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.avatar {
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
}

.profile-badge {
  position: static;
  transform: none;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
  backdrop-filter: blur(10px);
  text-align: center;
}

.intro-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #a5b4fc;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.intro-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.action-btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-btn.primary {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  border: none;
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
}

.action-btn.secondary {
  background: transparent;
  color: #a5b4fc;
  border: 2px solid #6366f1;
}

.action-btn.secondary:hover {
  background: #6366f1;
  color: white;
  transform: translateY(-2px);
}

.skills-preview {
  padding: 4rem 2rem;
  background: #0f172a;
}

.skills-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #a5b4fc;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.skill-item {
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 1px solid #334155;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(67, 56, 202, 0.15);
  border-color: #6366f1;
}

.skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.skill-item h3 {
  margin-bottom: 1rem;
  color: #e2e8f0;
}

.skill-dots {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}

.dot {
  font-size: 1.2rem;
  color: #475569;
  transition: color 0.3s ease;
}

.dot.filled {
  color: #818cf8;
}

.projects-preview {
  padding: 4rem 2rem;
  background: #1e293b;
}

.projects-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #a5b4fc;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.preview-card {
  background: #0f172a;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #334155;
  transition: all 0.3s ease;
}

.preview-card:hover {
  transform: translateY(-4px);
  border-color: #6366f1;
  box-shadow: 0 8px 25px rgba(67, 56, 202, 0.15);
}

.preview-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.preview-card h3 {
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.preview-card p {
  color: #64748b;
  margin-bottom: 1.5rem;
}

.preview-link {
  color: #a5b4fc;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.preview-link:hover {
  color: #c7d2fe;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .intro-actions {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .preview-grid {
    grid-template-columns: 1fr;
  }
}
</style>
