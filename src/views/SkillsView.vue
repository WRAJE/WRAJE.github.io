<template>
  <div class="skills-container">
    <!-- 深蓝紫色枫叶背景 -->
    <RealisticLeaves />
    
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">技能详情</h1>
        <p class="page-subtitle">我的技术栈和能力评估</p>
      </div>
    </section>

    <!-- 技能分类 -->
    <section class="skills-categories">
      <div class="container">
        <div class="category-tabs">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            :class="['tab-btn', { active: activeCategory === category.id }]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- 技能详情 -->
    <section class="skills-details">
      <div class="container">
        <div class="skills-grid">
          <div 
            v-for="skill in filteredSkills" 
            :key="skill.name"
            class="skill-card"
          >
            <div class="skill-header">
              <div class="skill-icon">{{ skill.icon }}</div>
              <div class="skill-info">
                <h3>{{ skill.name }}</h3>
                <p class="skill-level">{{ skill.level }}</p>
              </div>
            </div>
            
            <div class="skill-progress">
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: skill.percentage + '%' }"
                ></div>
              </div>
              <span class="progress-text">{{ skill.percentage }}%</span>
            </div>
            
            <div class="skill-details">
              <h4>掌握程度</h4>
              <p>{{ skill.description }}</p>
              
              <h4>项目经验</h4>
              <ul>
                <li v-for="project in skill.projects" :key="project">{{ project }}</li>
              </ul>
              
              <h4>学习计划</h4>
              <p>{{ skill.learningPlan }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能统计 -->
    <section class="skills-stats">
      <div class="container">
        <h2>技能统计</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">{{ totalSkills }}</div>
            <div class="stat-label">技能总数</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ expertSkills }}</div>
            <div class="stat-label">精通技能</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ averageProficiency }}%</div>
            <div class="stat-label">平均熟练度</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ totalProjects }}</div>
            <div class="stat-label">项目经验</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import RealisticLeaves from '../components/RealisticLeaves.vue';

const activeCategory = ref('all');

const categories = ref([
  { id: 'all', name: '全部' },
  { id: 'frontend', name: '前端开发' },
  { id: 'backend', name: '后端开发' },
  { id: 'ai', name: '人工智能' },
  { id: 'security', name: '网络安全' },
  { id: 'tools', name: '开发工具' }
]);

const skills = ref([
  {
    name: 'Vue.js',
    category: 'frontend',
    icon: '🟢',
    level: '精通',
    percentage: 90,
    description: '熟练掌握Vue 3的Composition API、Vuex、Vue Router等生态系统，能够独立开发复杂的单页应用。',
    projects: ['学生会投稿信箱系统', '个人博客网站', '在线考试系统'],
    learningPlan: '深入学习Vue 3的高级特性和性能优化'
  },
  {
    name: 'Python',
    category: 'backend',
    icon: '🐍',
    level: '熟练',
    percentage: 85,
    description: '掌握Python基础语法、Django/Flask框架，熟悉数据分析和机器学习库。',
    projects: ['福寿螺卵识别AI系统', '数据爬虫工具', '自动化脚本'],
    learningPlan: '深入学习异步编程和微服务架构'
  },
  {
    name: '深度学习',
    category: 'ai',
    icon: '🧠',
    level: '熟练',
    percentage: 80,
    description: '熟悉TensorFlow、PyTorch框架，掌握CNN、RNN等神经网络模型。',
    projects: ['福寿螺卵识别系统', '图像分类项目', '自然语言处理'],
    learningPlan: '学习Transformer架构和GPT模型'
  },
  {
    name: 'Node.js',
    category: 'backend',
    icon: '🟩',
    level: '中级',
    percentage: 70,
    description: '掌握Node.js基础、Express框架，能够开发RESTful API。',
    projects: ['学生会投稿信箱后端', '个人博客API', '实时聊天应用'],
    learningPlan: '深入学习微服务架构和性能优化'
  },
  {
    name: '网络安全',
    category: 'security',
    icon: '🔒',
    level: '中级',
    percentage: 75,
    description: '了解常见网络攻击手法，掌握基本的渗透测试和安全防护技术。',
    projects: ['ARP欺骗漏洞研究', '网络安全实验', '安全防护方案'],
    learningPlan: '学习高级渗透测试技术和安全架构'
  },
  {
    name: '算法设计',
    category: 'tools',
    icon: '⚡',
    level: '熟练',
    percentage: 85,
    description: '掌握常见数据结构和算法，能够设计高效的解决方案。',
    projects: ['消防员救援算法', '路径优化算法', '数据结构实现'],
    learningPlan: '学习高级算法和竞赛编程'
  },
  {
    name: 'Git',
    category: 'tools',
    icon: '📦',
    level: '熟练',
    percentage: 85,
    description: '熟练使用Git进行版本控制，了解Git Flow工作流程。',
    projects: ['所有项目版本管理', '团队协作开发', '开源贡献'],
    learningPlan: '学习Git高级功能和CI/CD流程'
  },
  {
    name: '计算机视觉',
    category: 'ai',
    icon: '👁️',
    level: '熟练',
    percentage: 80,
    description: '掌握OpenCV、图像处理技术，熟悉目标检测和图像分割。',
    projects: ['福寿螺卵识别', '人脸识别系统', '图像处理工具'],
    learningPlan: '深入学习3D视觉和视频分析技术'
  }
]);

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') {
    return skills.value;
  }
  return skills.value.filter(skill => skill.category === activeCategory.value);
});

const totalSkills = computed(() => skills.value.length);
const expertSkills = computed(() => skills.value.filter(skill => skill.percentage >= 80).length);
const averageProficiency = computed(() => Math.round(skills.value.reduce((sum, skill) => sum + skill.percentage, 0) / skills.value.length));
const totalProjects = computed(() => skills.value.reduce((sum, skill) => sum + skill.projects.length, 0));
</script>

<style scoped>
.skills-container {
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

.skills-categories {
  padding: 2rem 2rem;
  background: #1e293b;
  position: sticky;
  top: 0;
  z-index: 40;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #94a3b8;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.tab-btn:hover {
  border-color: #6366f1;
  color: #a5b4fc;
}

.tab-btn.active {
  background: #6366f1;
  border-color: #6366f1;
  color: white;
}

.skills-details {
  padding: 4rem 2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  border-color: #6366f1;
  box-shadow: 0 12px 24px rgba(99, 102, 241, 0.15);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.skill-icon {
  font-size: 2.5rem;
}

.skill-info h3 {
  color: #e2e8f0;
  font-size: 1.3rem;
  margin-bottom: 0.25rem;
}

.skill-level {
  color: #a5b4fc;
  font-size: 0.9rem;
}

.skill-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #0f172a;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  border-radius: 4px;
  transition: width 1s ease;
}

.progress-text {
  color: #a5b4fc;
  font-weight: 500;
  min-width: 40px;
}

.skill-details h4 {
  color: #e2e8f0;
  font-size: 1rem;
  margin: 1.5rem 0 0.5rem 0;
}

.skill-details p {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skill-details ul {
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.skill-details li {
  margin-bottom: 0.25rem;
}

.skills-stats {
  padding: 4rem 2rem;
  background: #1e293b;
}

.skills-stats h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #a5b4fc;
  margin-bottom: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-card {
  background: #0f172a;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
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
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .category-tabs {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .tab-btn {
    white-space: nowrap;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>
