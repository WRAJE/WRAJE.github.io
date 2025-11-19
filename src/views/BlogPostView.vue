<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref(null);
const loading = ref(true);

const fetchPost = async (id) => {
  loading.value = true;
  post.value = null;
  try {
    const response = await fetch('/data/blog.json');
    const posts = await response.json();
    post.value = posts.find(p => p.id === parseInt(id));
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPost(route.params.id);
});

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchPost(newId);
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div v-if="loading" class="text-center">
      <p class="text-xl">加载中...</p>
    </div>

    <article v-else-if="post" class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-lg text-gray-500 mb-6">{{ post.date }}</p>
      <div class="prose prose-lg max-w-none" v-html="post.content"></div>
    </article>

    <div v-else class="text-center">
      <h1 class="text-3xl font-bold">未找到文章</h1>
      <p class="text-gray-600 mt-2">抱歉，您访问的文章不存在。</p>
    </div>
  </div>
</template>

<style>
/* 为了让 v-html 的内容更好看，可以添加一些基础样式 */
.prose h1, .prose h2, .prose h3 {
  @apply font-bold mt-6 mb-4;
}
.prose h1 { @apply text-3xl; }
.prose h2 { @apply text-2xl; }
.prose h3 { @apply text-xl; }
.prose p {
  @apply mb-4 leading-relaxed;
}
</style>
