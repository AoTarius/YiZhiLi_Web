<template>
  <div class="page">
    <NavBar :active-index="6" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <img src="../imgs/News/Background.jpg" alt="草编制品特写" />
      <div class="banner-text">
        <h1 class="banner-title">徐行草编</h1>
        <p class="banner-subtitle">XU HANG CAO BIAN</p>
      </div>
    </section>
    
    <!-- 相关新闻标题 -->
    <section class="section-title">
      <h2 class="main-title">相关新闻</h2>
      <p class="sub-title">CAOBIAN</p>
    </section>
    
    <!-- 新闻列表区 -->
    <section class="news-section">
      <div class="news-container">
        <!-- 左侧图片 -->
        <div class="news-image">
          <img src="../imgs/News/News-1.jpg" alt="新闻图片" />
        </div>
        
        <!-- 右侧新闻列表 -->
        <div class="news-list">
          <div 
            class="news-item" 
            v-for="(news, index) in newsList" 
            :key="index"
          >
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-date">{{ news.date }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const newsList = ref([
  {
    title: '传播海派乡村文化，展现乡村振兴新图···',
    date: '2024-11-25'
  },
  {
    title: '【乡村文化】嘉定徐行草编亮相“大地···',
    date: '2024-11-22'
  },
  {
    title: '嘉定徐行镇为市民呈现“可逛可赏可···',
    date: '2024-09-29'
  },
  {
    title: '非遗在社区！嘉定这些项目、基地成...',
    date: '2024-05-29'
  },
  {
    title: '亮相市级展会，徐行草编凭实力“圈粉”',
    date: '2024-03-29'
  },
  {
    title: '千年技艺时尚逆袭，黄草也能编出“黄金”',
    date: '2023-09-18'
  }
])
</script>

<style scoped>
.page {
  background-color: #FAF8F5;
  min-height: 100vh;
  padding-top: 64px;
}

/* 顶部横幅 */
.hero-banner {
  width: 100%;
  height: 480px;
  position: relative;
  overflow: hidden;
}

.hero-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 120px;
  padding: 24px;
  text-align: center;
}

.banner-title {
  font-size: 48px;
  color: #f2e0db;
  font-weight: bold;
  margin-bottom: 16px;
}

.banner-subtitle {
  font-size: 20px;
  color: #f1e3dd;
  letter-spacing: 4px;
}

/* 相关新闻标题 */
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

/* 新闻列表区 */
.news-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.news-container {
  display: flex;
  gap: 48px;
  padding: 40px;
}

/* 左侧图片 */
.news-image {
  width: 40%;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-image:hover img {
  transform: scale(1.05);
}

/* 右侧新闻列表 */
.news-list {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.news-item {
  padding: 16px 0;
  border-bottom: 1px solid #E5D8C8;
  cursor: pointer;
  transition: all 0.3s ease;
}

.news-item:hover {
  background-color: rgba(229, 216, 200, 0.1);
}

.news-title {
  font-size: 18px;
  color: #5D4037;
  margin-bottom: 16px;
  transition: color 0.3s ease;
}

.news-item:hover .news-title {
  color: #8D6E63;
}

.news-date {
  font-size: 14px;
  color: #8D6E63;
  text-align: right;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .news-container {
    flex-direction: column;
    gap: 32px;
    padding: 24px;
  }
  
  .news-image {
    width: 100%;
  }
  
  .news-list {
    width: 100%;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  
  .footer {
    height: auto;
    min-height: 160px;
  }
  
  .page {
    padding: 0 16px;
  }
}
</style>
