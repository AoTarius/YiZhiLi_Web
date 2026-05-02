<template>
  <div class="page">
    <NavBar :active-index="6" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <img src="https://picsum.photos/1200/480?random=news-banner" alt="草编制品特写" />
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
          <img src="https://picsum.photos/480/320?random=news-img" alt="新闻图片" />
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
    
    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-links">
            <a href="#">相关链接</a>
            <span class="divider">|</span>
            <a href="#">网站地图</a>
            <span class="divider">|</span>
            <a href="#">隐私政策</a>
            <span class="divider">|</span>
            <a href="#">联系我们</a>
            <span class="divider">|</span>
            <a href="#">关于我们</a>
            <span class="divider">|</span>
            <a href="#">留言板</a>
          </div>
          <p class="contact-info">联系方式：bailey07@yeah.net</p>
          <p class="browser-hint">建议使用360极速、Chrome、Firefox浏览器，最佳分辨率1920x1080</p>
        </div>
        <div class="footer-right">
          <div class="qr-code">
            <img src="https://picsum.photos/80/80?random=qr-news" alt="二维码" />
          </div>
          <p class="platform-name">小红书</p>
          <p class="platform-id">2674506360</p>
        </div>
      </div>
    </footer>
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
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 16px;
}

.banner-subtitle {
  font-size: 20px;
  color: #8D6E63;
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

/* 页脚 */
.footer {
  height: 160px;
  background-color: #000000;
  padding: 24px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.footer-links a {
  color: #FAF8F5;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #8D6E63;
}

.divider {
  color: #FAF8F5;
  font-size: 14px;
}

.contact-info {
  color: #FAF8F5;
  font-size: 14px;
  margin-bottom: 8px;
}

.browser-hint {
  color: #FAF8F5;
  font-size: 12px;
}

.footer-right {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-code {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
}

.qr-code img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.platform-name {
  color: #FAF8F5;
  font-size: 14px;
  margin-top: 8px;
}

.platform-id {
  color: #FAF8F5;
  font-size: 14px;
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
