<template>
  <div class="craft-page">
    <NavBar :active-index="2" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <div class="hero-content">
        <div class="hero-left-text">
          <h1 class="hero-title">徐行草编</h1>
          <p class="hero-subtitle">Xuxing Grass Weaving</p>
          <p class="hero-desc">寻平和之美 纵横交叠间 于自然之源</p>
        </div>
        <div class="hero-right-text">
          <p>隐藏着一份绿意盎然的传统之美 每一道经纬交织间</p>
        </div>
      </div>
    </section>
    
    <!-- 技艺展示标题 -->
    <section class="section-title">
      <h2 class="main-title">技艺展示</h2>
      <p class="sub-title">CAOBIAN</p>
    </section>
    
    <!-- 技艺介绍区 -->
    <section class="intro-section">
      <div class="intro-content">
        <div class="intro-left">
          <div class="intro-image img-200">
            <img src="https://picsum.photos/200/150?random=craft1" alt="技艺图片1" />
          </div>
          <div class="intro-image img-300">
            <img src="https://picsum.photos/300/200?random=craft2" alt="技艺图片2" />
          </div>
          <div class="intro-image img-200">
            <img src="https://picsum.photos/200/150?random=craft3" alt="技艺图片3" />
          </div>
        </div>
        <div class="intro-right">
          <div class="intro-text">
            <p>在徐行古镇，草编技艺不仅是一项传统手工艺，更是当地民众生活的一部分。当地流传着一句俗语：'编筐打篓，养活九口。'这充分说明了草编技艺在当地经济生活中的重要地位。同时，徐行草编也承载着浓厚的乡土气息和手工艺品的工艺之美，为更多人带来了美的享受和生活的便利。</p>
          </div>
          <div class="intro-text">
            <p>如今，徐行草编已经迎来了新的发展机遇。随着国家对非物质文化遗产保护力度的加大和人们对传统文化的重新认识，徐行草编这一古老的手工艺正焕发出新的生机与活力。越来越多的年轻人开始关注和喜爱这一传统手工艺，他们通过学习和传承，让徐行草编技艺得以延续和发展。</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 技艺步骤区 -->
    <section class="steps-section">
      <div class="steps-grid">
        <div class="step-card" v-for="(step, index) in steps" :key="index">
          <div class="step-image">
            <img :src="step.image" :alt="step.title" />
          </div>
          <div class="step-title-bg">
            <h3 class="step-title">{{ step.title }}</h3>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 视频区 -->
    <section class="video-section">
      <div class="video-content">
        <div class="video-player">
          <img src="https://picsum.photos/1200/480?random=video" alt="视频" />
          <div class="play-button">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.9)"/>
              <path d="M26 20L42 32L26 44V20Z" fill="#5D4037"/>
            </svg>
          </div>
        </div>
        <div class="video-title-vertical">
          <p>手工艺术之旅 布知</p>
        </div>
      </div>
    </section>
    
    <!-- 底部栏 -->
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
            <img src="https://picsum.photos/120/120?random=qr3" alt="二维码" />
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

const steps = ref([
  { title: '黄草劈丝', image: 'https://picsum.photos/400/200?random=step1' },
  { title: '黄草去苋', image: 'https://picsum.photos/400/200?random=step2' },
  { title: '黄草开草', image: 'https://picsum.photos/400/200?random=step3' },
  { title: '黄草浸泡', image: 'https://picsum.photos/400/200?random=step4' },
  { title: '黄草搓捻', image: 'https://picsum.photos/400/200?random=step5' }
])
</script>

<style scoped>
.craft-page {
  background-color: #FDF8F0;
  min-height: 100vh;
  padding-top: 64px;
}

/* 顶部横幅 */
.hero-banner {
  height: 560px;
  background-image: url('https://picsum.photos/1200/560?random=craft-banner');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-left-text {
  width: 400px;
  height: 240px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 24px;
}

.hero-title {
  font-size: 28px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 8px;
}

.hero-subtitle {
  font-size: 14px;
  color: #8D6E63;
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 18px;
  color: #5D4037;
  line-height: 28px;
}

.hero-right-text {
  width: 320px;
  height: 160px;
  padding: 24px;
  color: #FDF8F0;
  font-size: 18px;
  line-height: 28px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* 技艺展示标题 */
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

/* 技艺介绍区 */
.intro-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.intro-content {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 48px;
  padding: 40px;
  background-color: #FFF8E1;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.intro-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.intro-image:hover img {
  transform: scale(1.05);
}

.img-200 {
  width: 200px;
  height: 150px;
}

.img-300 {
  width: 300px;
  height: 200px;
  margin-top: 16px;
}

.intro-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
}

.intro-text {
  font-size: 16px;
  color: #5D4037;
  line-height: 28px;
}

/* 技艺步骤区 */
.steps-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
  background-color: #FDF8F0;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
}

.step-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.step-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.step-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.step-card:hover .step-image img {
  transform: scale(1.05);
}

.step-title-bg {
  width: 100%;
  height: 40px;
  background-color: #5D4037;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-title {
  font-size: 18px;
  color: #FDF8F0;
  font-weight: bold;
  text-align: center;
}

/* 视频区 */
.video-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.video-content {
  height: 480px;
  padding: 40px;
  background-color: #FFF8E1;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 24px;
}

.video-player {
  flex: 1;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.video-player img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.play-button:hover {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
}

.video-title-vertical {
  width: 200px;
  height: 160px;
  padding: 24px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-title-vertical p {
  font-size: 28px;
  color: #5D4037;
  font-weight: bold;
  line-height: 48px;
}

/* 底部栏 */
.footer {
  height: 160px;
  background-color: #333;
  padding: 24px;
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
  color: #FDF8F0;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #8D6E63;
}

.divider {
  color: #FDF8F0;
}

.contact-info {
  color: #FDF8F0;
  font-size: 14px;
  margin-bottom: 16px;
}

.browser-hint {
  color: #FDF8F0;
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

.xiaohongshu-badge {
  width: 80px;
  height: 32px;
  background-color: #FF2442;
  color: #FDF8F0;
  font-size: 14px;
  font-weight: bold;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.xiaohongshu-badge:hover {
  opacity: 0.8;
}

.xiaohongshu-id {
  color: #FDF8F0;
  font-size: 14px;
  margin-top: 16px;
}
</style>
