<script setup>
import { reactive } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

// 草编作品数据
const grassWeavingItems = reactive([
  {
    id: 1,
    name: '徐行草编拖鞋',
    description: '精选天然蒲草编织，透气舒适，传统工艺与现代设计的完美融合。适合居家穿着，展现东方生活美学。',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 2,
    name: '草编收纳篮',
    description: '采用优质玉米皮手工编织，容量大且耐用。自然纹理与实用功能结合，为家居增添质朴美感。',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 3,
    name: '草编茶席垫',
    description: '传统草编工艺制作，防滑耐磨。茶道专用设计，展现东方茶文化的雅致与内涵。',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 4,
    name: '草编工艺包',
    description: '手工编织精致包袋，天然草料编织而成。轻便环保，日常出行与艺术收藏兼具。',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: 5,
    name: '草编壁挂',
    description: '大型装饰性草编艺术品，墙面装饰首选。传统图案与现代装饰风格完美搭配。',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 6,
    name: '玉米皮草编动物',
    description: '创意手工艺，将玉米皮编织成各种动物造型。栩栩如生，兼具观赏性与收藏价值。',
    image: 'https://picsum.photos/400/300?random=6'
  }
])
</script>

<template>
  <div class="main-page">
    <!-- 顶部标题区域 -->
    <header class="header">
      <h1 class="title">上海草编</h1>
      <p class="subtitle">指尖经纬，海派匠心</p>
    </header>

    <!-- 主体网格布局 -->
    <div class="grid-container">
      <div 
        v-for="item in grassWeavingItems" 
        :key="item.id"
        class="grid-item"
      >
        <div class="image-container">
          <img :src="item.image" :alt="item.name" class="item-image">
        </div>
        <div class="item-content">
          <h3 class="item-name">{{ item.name }}</h3>
          <p class="item-description">{{ item.description }}</p>
          <div class="arrow-container">
            <ChevronRight class="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Georgia', '宋体', serif;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.title {
  font-size: 3rem;
  color: #2d5016; /* 竹青色 */
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  letter-spacing: 0.1em;
}

.subtitle {
  font-size: 1.2rem;
  color: #8b7355; /* 暖褐色 */
  margin: 0;
  font-style: italic;
  letter-spacing: 0.05em;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.grid-item {
  background: #faf8f3; /* 米白色背景 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(45, 80, 22, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.grid-item:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(45, 80, 22, 0.15);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover .item-image {
  transform: scale(1.05);
}

.item-content {
  padding: 1.5rem;
}

.item-name {
  font-size: 1.3rem;
  color: #2d5016; /* 竹青色 */
  margin: 0 0 0.8rem 0;
  font-weight: 600;
}

.item-description {
  font-size: 0.95rem;
  color: #5a5a5a;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  height: 3.2em; /* 固定高度确保两行 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.arrow-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  color: #8b7355; /* 暖褐色 */
  transition: transform 0.3s ease;
}

.grid-item:hover .arrow-icon {
  transform: translateX(4px);
}
</style>
