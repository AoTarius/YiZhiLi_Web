<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }" :style="{ backgroundColor: computedBgColor }">
    <div class="navbar-container">
      <div class="nav-items">
        <router-link 
          v-for="(item, index) in navItems" 
          :key="index"
          :to="item.path"
          class="nav-item"
          :class="{ 'nav-item-active': activeIndex === index }"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  activeIndex: {
    type: Number,
    default: 0
  },
  backgroundColor: {
    type: String,
    default: '#FDF8F0'
  }
})

const navItems = [
  { name: '首页', path: '/' },
  { name: '历史渊源', path: '/history' },
  { name: '技艺展示', path: '/craft' },
  { name: '传承人风采', path: '/inheritors' },
  { name: '作品欣赏', path: '/works' },
  { name: '学习体验', path: '/learn' },
  { name: '新闻动态', path: '/news' },
]

const isScrolled = ref(false)

const computedBgColor = computed(() => {
  if (isScrolled.value) {
    const color = props.backgroundColor
    const r = parseInt(color.slice(1, 3), 16)
    const g = parseInt(color.slice(3, 5), 16)
    const b = parseInt(color.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, 0.95)`
  }
  return props.backgroundColor
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  height: 64px;
  border-bottom: 1px solid #E5D8C8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.navbar-scrolled {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-item {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  line-height: 64px;
  color: #5D4037;
  text-decoration: none;
  padding: 0 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-item:hover {
  color: #8D6E63;
}

.nav-item-active {
  background-color: #8B5A2B;
  color: #FAF8F5;
}

.nav-item-active:hover {
  color: #FAF8F5;
  opacity: 0.9;
}
</style>
