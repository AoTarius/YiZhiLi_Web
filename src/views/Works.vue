<template>
  <div class="works-page">
    <NavBar :active-index="4" background-color="#FAF8F5" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <img src="https://picsum.photos/1200/480?random=works-banner" alt="作品欣赏" />
    </section>
    
    <!-- 作品欣赏标题 -->
    <section class="section-title">
      <h2 class="main-title">作品欣赏</h2>
      <p class="sub-title">CAOBIAN</p>
    </section>
    
    <!-- 作品卡片区 -->
    <section class="works-section">
      <div class="works-grid">
        <div 
          class="work-card" 
          v-for="(work, index) in works" 
          :key="index"
          :class="{ 'reverse': index % 2 === 1 }"
        >
          <div class="card-image">
            <img :src="work.image" :alt="work.title" />
          </div>
          <div class="card-content">
            <h3 class="work-title">{{ work.title }}</h3>
            <p class="work-description">{{ work.description }}</p>
            <a href="#" class="detail-link">了解详情>>></a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 底部区域 -->
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
            <img src="https://picsum.photos/120/120?random=qr5" alt="二维码" />
          </div>
          <p class="xiaohongshu-id">小红书号：2674506360</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const works = ref([
  {
    title: '清代"囍"字草编系列',
    description: '主要用于民间婚嫁场合，象征着喜事不断 婚姻美满和家庭的和谐。',
    image: 'https://picsum.photos/600/320?random=work1'
  },
  {
    title: '野兽派与徐行草编联名系列',
    description: '2023端午，野兽派携手国家级非遗质文化遗产"徐行草编"，为您带来这父温暖而独持的限 定系列。',
    image: 'https://picsum.photos/600/320?random=work2'
  },
  {
    title: '艺术品——草编方形坐垫',
    description: '一个草编的方形坐垫，因为没有收编，所以 耷拉下来的黄草覆盖了整个椅子。',
    image: 'https://picsum.photos/600/320?random=work3'
  },
  {
    title: '艺术品——蒙德里安草编毯子',
    description: '以几何图形为基本元素的草编毯子作品，这是 在致敬几何抽象画派先驱蒙德里安。',
    image: 'https://picsum.photos/600/320?random=work4'
  }
])
</script>

<style scoped>
.works-page {
  background-color: #FAF8F5;
  min-height: 100vh;
  padding-top: 64px;
}

/* 顶部横幅 */
.hero-banner {
  height: 480px;
  width: 100%;
  overflow: hidden;
}

.hero-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 作品欣赏标题 */
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

/* 作品卡片区 */
.works-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  padding: 40px 0;
}

.work-card {
  display: flex;
  gap: 24px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.work-card.reverse {
  flex-direction: row-reverse;
}

.card-image {
  width: 50%;
  height: 320px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.work-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  width: 50%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.work-title {
  font-size: 20px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 16px;
}

.work-description {
  font-size: 16px;
  color: #5D4037;
  line-height: 28px;
  margin-bottom: 16px;
}

.detail-link {
  font-size: 14px;
  color: #8D6E63;
  text-decoration: none;
  transition: color 0.3s ease;
}

.detail-link:hover {
  color: #5D4037;
}

/* 底部区域 */
.footer {
  height: 120px;
  background-color: #212121;
  padding: 24px;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 16px;
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
}

.contact-info {
  color: #FAF8F5;
  font-size: 14px;
}

.browser-hint {
  color: #FAF8F5;
  font-size: 14px;
}

.footer-right {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-code {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
}

.qr-code img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.xiaohongshu-id {
  color: #FAF8F5;
  font-size: 14px;
  margin-top: 8px;
}
</style>
