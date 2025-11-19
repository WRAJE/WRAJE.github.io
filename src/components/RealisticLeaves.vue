<template>
  <div class="leaves-container">
    <svg class="leaf-defs" style="position: absolute; width: 0; height: 0;">
      <defs>
        <path id="leaf-path" d="M12,2 C15,2 18,4 20,7 C21,9 21,11 20,13 C19,15 17,16 15,17 C13,18 11,18 9,17 C7,16 5,15 4,13 C3,11 3,9 4,7 C6,4 9,2 12,2 Z"/>
      </defs>
    </svg>
    
    <div 
      v-for="leaf in leaves" 
      :key="leaf.id"
      class="leaf"
      :style="{
        left: leaf.left,
        animationDelay: leaf.delay,
        animationDuration: leaf.duration,
        '--fall-duration': leaf.fallDuration,
        '--sway-amount': leaf.swayAmount,
        '--rotation-speed': leaf.rotationSpeed,
        '--leaf-size': leaf.size
      }"
    >
      <svg viewBox="0 0 24 24" class="leaf-svg">
        <use href="#leaf-path" :fill="leaf.color"/>
        <line x1="12" y1="2" x2="12" y2="17" :stroke="leaf.strokeColor" stroke-width="0.5"/>
        <line x1="12" y1="8" x2="8" y2="12" :stroke="leaf.strokeColor" stroke-width="0.3"/>
        <line x1="12" y1="8" x2="16" y2="12" :stroke="leaf.strokeColor" stroke-width="0.3"/>
        <line x1="12" y1="12" x2="9" y2="15" :stroke="leaf.strokeColor" stroke-width="0.3"/>
        <line x1="12" y1="12" x2="15" y2="15" :stroke="leaf.strokeColor" stroke-width="0.3"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const leaves = ref([]);

// 蓝紫色系的枫叶颜色
const leafColors = [
  '#6366f1', // Indigo-500
  '#8b5cf6', // Violet-500
  '#a855f7', // Purple-500
  '#7c3aed', // Violet-600
  '#6d28d9', // Violet-700
  '#4c1d95', // Violet-900
  '#5b21b6', // Purple-800
  '#4f46e5', // Indigo-600
];

onMounted(() => {
  // 生成更自然的枫叶
  for (let i = 0; i < 12; i++) {
    const baseDelay = Math.random() * 20;
    const fallDuration = 15 + Math.random() * 10;
    
    leaves.value.push({
      id: i,
      left: Math.random() * 100 + '%',
      delay: baseDelay + 's',
      duration: fallDuration + 's',
      fallDuration: fallDuration,
      swayAmount: 50 + Math.random() * 100,
      rotationSpeed: 3 + Math.random() * 4,
      size: 15 + Math.random() * 20,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      strokeColor: 'rgba(99, 102, 241, 0.3)' // 蓝紫色叶脉
    });
  }
});
</script>

<style scoped>
.leaves-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
}

.leaf {
  position: absolute;
  top: -50px;
  animation: fall var(--fall-duration) linear infinite;
  transform-origin: center center;
}

.leaf-svg {
  width: var(--leaf-size);
  height: var(--leaf-size);
  filter: drop-shadow(2px 2px 4px rgba(99, 102, 241, 0.2));
  opacity: 0.85;
}

@keyframes fall {
  0% {
    transform: translateY(-100px) rotate(0deg) translateX(0px);
    opacity: 0;
  }
  5% {
    opacity: 0.85;
  }
  95% {
    opacity: 0.85;
  }
  100% {
    transform: translateY(calc(100vh + 100px)) rotate(720deg) translateX(var(--sway-amount));
    opacity: 0;
  }
}

/* 添加更复杂的运动路径 */
.leaf:nth-child(odd) {
  animation-name: fall-sway-right;
}

.leaf:nth-child(even) {
  animation-name: fall-sway-left;
}

@keyframes fall-sway-right {
  0% {
    transform: translateY(-100px) rotate(0deg) translateX(0px);
    opacity: 0;
  }
  5% {
    opacity: 0.85;
  }
  25% {
    transform: translateY(25vh) rotate(180deg) translateX(30px);
  }
  50% {
    transform: translateY(50vh) rotate(360deg) translateX(-20px);
  }
  75% {
    transform: translateY(75vh) rotate(540deg) translateX(40px);
  }
  95% {
    opacity: 0.85;
  }
  100% {
    transform: translateY(calc(100vh + 100px)) rotate(720deg) translateX(var(--sway-amount));
    opacity: 0;
  }
}

@keyframes fall-sway-left {
  0% {
    transform: translateY(-100px) rotate(0deg) translateX(0px);
    opacity: 0;
  }
  5% {
    opacity: 0.85;
  }
  25% {
    transform: translateY(25vh) rotate(-180deg) translateX(-30px);
  }
  50% {
    transform: translateY(50vh) rotate(-360deg) translateX(20px);
  }
  75% {
    transform: translateY(75vh) rotate(-540deg) translateX(-40px);
  }
  95% {
    opacity: 0.85;
  }
  100% {
    transform: translateY(calc(100vh + 100px)) rotate(-720deg) translateX(calc(var(--sway-amount) * -1));
    opacity: 0;
  }
}
</style>
