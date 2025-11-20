# 🚀 WRAJE 的个人作品集

> 一个基于 Vue 3 + Vite 构建的现代化个人作品集网站

[![GitHub stars](https://img.shields.io/github/stars/WRAJE/WRAJE.github.io?style=social)](https://github.com/WRAJE/WRAJE.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/WRAJE/WRAJE.github.io?style=social)](https://github.com/WRAJE/WRAJE.github.io/network)
[![GitHub license](https://img.shields.io/github/license/WRAJE/WRAJE.github.io)](https://github.com/WRAJE/WRAJE.github.io/blob/main/LICENSE)
[![GitHub Pages](https://img.shields.io/github/pages/WRAJE/WRAJE.github.io)](https://wraje.github.io)

## ✨ 特性

- 🎨 **现代化设计** - 简洁美观的UI界面
- 📱 **响应式布局** - 完美适配各种设备
- ⚡ **快速加载** - 基于Vite的极速构建
- 🌙 **暗黑模式** - 支持明暗主题切换（可选）
- 📝 **博客系统** - 内置技术博客功能
- 🛠️ **模块化架构** - 易于维护和扩展
- 🚀 **自动部署** - GitHub Actions自动部署

## 🛠️ 技术栈

### 前端框架
- **[Vue 3](https://vuejs.org/)** - 渐进式JavaScript框架
- **[Vite](https://vitejs.dev/)** - 下一代前端构建工具
- **[Vue Router](https://router.vuejs.org/)** - Vue.js官方路由管理器

### 部署平台
- **[GitHub Pages](https://pages.github.com/)** - 静态网站托管
- **[GitHub Actions](https://github.com/features/actions)** - 自动化CI/CD

## 📁 项目结构
WRAJE.github.io/  
├── public/ # 静态资源  
│ └── favicon.ico  
├── src/ # 源代码  
│ ├── assets/ # 样式和图片  
│ │ ├── main.css  
│ │ └── style.css  
│ ├── components/ # 公共组件  
│ ├── views/ # 页面组件  
│ │ ├── HomeView.vue  
│ │ ├── AboutView.vue  
│ │ ├── ProjectsView.vue  
│ │ ├── BlogView.vue
│ │ ├── SkillsView.vue
│ │ ├── LinksView.vue
│ │ └── blog/ # 博客文章
│ │ ├── PostboxDevelopment.vue
│ │ ├── SnailAiTech.vue
│ │ ├── ArpSpoofing.vue
│ │ └── RescueAlgorithm.vue
│ ├── router/ # 路由配置
│ │ └── index.js
│ ├── App.vue # 根组件
│ └── main.js # 入口文件
├── .github/ # GitHub配置
│ └── workflows/
│ └── deploy.yml # 自动部署配置
├── index.html # HTML模板
├── package.json # 项目配置
├── vite.config.js # Vite配置
└── README.md # 项目说明

### 环境要求
- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖
vue #我相信各位都知道
cd your_project_name #此处your_project_name应替换成你自己的文件夹
npm install #常规操作
npm install -D tailwindcss@3.4.13 postcss autoprefixer #安装tailwind 3.2.13版本 高版本容易不稳定和报错
npm install pinia #pinia安装

### 访问页面

npm run dev
