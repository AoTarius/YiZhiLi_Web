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
            <img src="https://picsum.photos/100/100?random=qr4" alt="二维码" />
          </div>
          <div class="xiaohongshu-badge">小红书</div>
          <p class="xiaohongshu-id">小红书号：2674506360</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const inheritors = ref([
  {
    name: '计学成',
    image: 'https://picsum.photos/600/320?random=inheritor1'
  },
  {
    name: '李月琴',
    image: 'https://picsum.photos/600/320?random=inheritor2'
  },
  {
    name: '王勤',
    image: 'https://picsum.photos/600/320?random=inheritor3'
  },
  {
    name: '陈姣',
    image: 'https://picsum.photos/600/320?random=inheritor4'
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
  background-image: url('https://picsum.photos/1200/480?random=inheritors-banner');
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
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 20px;
  color: #8D6E63;
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

/* 页脚 */
.footer {
  height: 160px;
  background-color: #212121;
  padding: 24px;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.footer-links a {
  color: #BDBDBD;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #FFFFFF;
}

.divider {
  color: #BDBDBD;
}

.contact-info {
  color: #BDBDBD;
  font-size: 14px;
  margin-bottom: 8px;
}

.browser-hint {
  color: #BDBDBD;
  font-size: 12px;
}

.footer-right {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-code {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
}

.qr-code img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.xiaohongshu-badge {
  width: 60px;
  height: 24px;
  background-color: #FF2442;
  color: #FFFFFF;
  font-size: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.xiaohongshu-badge:hover {
  opacity: 0.8;
}

.xiaohongshu-id {
  color: #BDBDBD;
  font-size: 14px;
  margin-top: 8px;
}
</style>
