<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navigate = (path) => {
  if (route.path === path) return;
  isMenuOpen.value = false;
  router.push(path);
};

// 监听路由变化关闭菜单
watch(route, () => {
  isMenuOpen.value = false;
});
</script>

<template>
  <nav class="bg-slate-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300 border-b border-slate-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-400 transition-all duration-300 transform hover:scale-105">
            WRAJE
          </router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in [
              { path: '/', name: '首页' },
              { path: '/about', name: '关于我' },
              { path: '/projects', name: '项目' },
              { path: '/blog', name: '博客' },
              { path: '/skills', name: '技能' },
              { path: '/links', name: '链接' }
            ]"
            :key="item.path"
            :to="item.path"
            class="relative group px-3 py-2 text-slate-300 hover:text-indigo-400 transition-all duration-300"
            :class="{ 'text-indigo-400': route.path === item.path }"
          >
            {{ item.name }}
            <span 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              :class="{ 'scale-x-100': route.path === item.path }"
            ></span>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="toggleMenu" 
            class="text-slate-300 hover:text-indigo-400 focus:outline-none transition-colors duration-300"
          >
            <div class="w-6 h-6 relative">
              <span 
                v-for="i in 3" 
                :key="i"
                class="absolute w-full h-0.5 bg-current transform transition-all duration-300"
                :class="[
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '',
                  isMenuOpen && i === 2 ? 'opacity-0' : '',
                  isMenuOpen && i === 3 ? '-rotate-45 -translate-y-1.5' : ''
                ]"
                :style="{ top: `${(i - 1) * 8}px` }"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      name="mobile-menu"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900/95 backdrop-blur-sm shadow-lg border-t border-slate-700">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button 
            v-for="item in [
              { path: '/', name: '首页' },
              { path: '/about', name: '关于我' },
              { path: '/projects', name: '项目' },
              { path: '/blog', name: '博客' },
              { path: '/skills', name: '技能' },
              { path: '/links', name: '链接' }
            ]"
            :key="item.path"
            @click="navigate(item.path)"
            class="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition-all duration-300"
            :class="{ 'text-indigo-400 bg-slate-800': route.path === item.path }"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* 移动端菜单动画 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
