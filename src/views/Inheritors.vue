<template>
  <div class="inheritors-page">
    <NavBar :active-index="3" background-color="#FAF8F5" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <div class="hero-content">
        <h1 class="hero-title">徐行草编</h1>
        <p class="hero-subtitle">XU HANG CAO BIAN</p>
      </div>
    </section>
    
    <!-- 非遗大师标题 -->
    <section class="section-title">
      <h2 class="main-title">非遗大师</h2>
      <p class="sub-title">CAOBIAN</p>
    </section>
    
    <!-- 传承人卡片区 -->
    <section class="inheritors-section">
      <div class="inheritors-grid">
        <div class="inheritor-card" v-for="(inheritor, index) in inheritors" :key="index">
          <div class="card-image">
            <img :src="inheritor.image" :alt="inheritor.name" />
          </div>
          <div class="card-content">
            <h3 class="inheritor-name">{{ inheritor.name }}</h3>
            <button class="detail-button">更多详情 →</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const inheritors = ref([
  {
    name: '计学成',
    image: 'src/imgs/Inheritors/JiXueCheng.jpg'
  },
  {
    name: '李月琴',
    image: 'src/imgs/Inheritors/LiYueQin.jpg'
  },
  {
    name: '王勤',
    image: 'src/imgs/Inheritors/WangQin.jpg'
  },
  {
    name: '陈姣',
    image: 'src/imgs/Inheritors/ChenJiao.jpg'
  }
])
</script>

<style scoped>
.inheritors-page {
  background-color: #FAF8F5;
  min-height: 100vh;
  padding-top: 64px;
}

/* 顶部横幅 */
.hero-banner {
  height: 480px;
  background-image: url('src/imgs/Inheritors/Background.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  width: 600px;
  height: 120px;
  padding: 24px;
  text-align: center;
}

.hero-title {
  font-size: 48px;
  color: #f4f2f1;
  font-weight: bold;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 20px;
  color: #f4f2f1;
  letter-spacing: 4px;
}

/* 非遗大师标题 */
.section-title {
  height: 80px;
  padding: 24px;
  text-align: center;
}

.main-title {
  font-size: 32px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 8px;
}

.sub-title {
  font-size: 14px;
  color: #8D6E63;
  letter-spacing: 2px;
}

/* 传承人卡片区 */
.inheritors-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.inheritors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  padding: 40px 0;
}

.inheritor-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.inheritor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.inheritor-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inheritor-name {
  font-size: 20px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
}

.detail-button {
  width: 160px;
  height: 48px;
  background-color: #FAF8F5;
  border: 1px solid #5D4037;
  border-radius: 8px;
  color: #5D4037;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.detail-button:hover {
  background-color: #5D4037;
  color: #FAF8F5;
}

</style>
