<template>
  <div class="home">
    <NavBar :active-index="0" />
    
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
    
    <!-- 编织之美标题 -->
    <section class="section-title">
      <h2 class="main-title">编织之美</h2>
      <p class="sub-title">CAOBIAN</p>
    </section>
    
    <!-- 历史渊源区 -->
    <section class="history-section">
      <div class="history-content">
        <div class="vertical-label">历史渊源</div>
        <div class="history-image">
          <img src="https://picsum.photos/640/320?random=1" alt="历史渊源" />
        </div>
        <div class="history-text-block">
          <p class="history-desc">清同治年间，嘉定形成了以徐行镇为中心的黄草编织区，成为本地农民一项主要的家庭手工业。数百年来，黄草……</p>
          <a href="#" class="learn-more">了解更多 →</a>
        </div>
      </div>
    </section>
    
    <!-- 作品欣赏区 -->
    <section class="works-section">
      <div class="works-content">
        <div class="works-image">
          <img src="https://picsum.photos/640/320?random=2" alt="作品欣赏" />
        </div>
        <div class="vertical-label">作品欣赏</div>
        <div class="works-text-block">
          <p class="works-desc">如今的徐行草编正在开辟全新道路，传统黄草与云南彝绣、皮具、竹子等材料相融合，编织出时尚拎包、草编屏风、灯具等全新款式，碰撞出别……</p>
          <a href="#" class="learn-more">了解更多 →</a>
        </div>
      </div>
    </section>
    
    <!-- 新闻动态区 -->
    <section class="news-section">
      <div class="news-content">
        <div class="news-list">
          <div class="news-item" v-for="(news, index) in newsList" :key="index">
            {{ news }}
          </div>
        </div>
        <div class="video-container">
          <div class="video-placeholder">
            <img src="https://picsum.photos/640/320?random=3" alt="视频" />
            <div class="play-button">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.9)"/>
                <path d="M20 16L32 24L20 32V16Z" fill="#5D4037"/>
              </svg>
            </div>
            <span class="video-duration">0:57</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 底部三列区 -->
    <section class="cards-section">
      <div class="cards-container">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <div class="card-image">
            <img :src="card.image" :alt="card.title" />
          </div>
          <h3 class="card-title">{{ card.title }}</h3>
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
            <img src="https://picsum.photos/120/120?random=qr" alt="二维码" />
          </div>
          <p class="qr-label">官方微信</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const newsList = ref([
  '传播海派乡村文化，展现乡村振兴新图景，上···',
  '【乡村文化】嘉定徐行草编亮相“大地流彩”全···',
  '文明城区 创建为民 | 嘉定：文化“试验田”也···',
  '嘉定徐行镇为市民呈现“可逛可赏可尝”一站式···',
  '【艺术改变人生】徐行草编：蒲苇如丝 润化心灵',
  '非遗在社区！嘉定这些项目、基地成功入选',
  '亮相市级展会，徐行草编凭实力“圈粉”',
  '千年技艺时尚逆袭，黄草也能编出“黄金”',
  '非遗传承人：让徐行草编“新”起来“活”起来'
])

const cards = ref([
  { title: '传承人风采', image: 'https://picsum.photos/400/240?random=4' },
  { title: '作品欣赏', image: 'https://picsum.photos/400/240?random=5' },
  { title: '联系我们', image: 'https://picsum.photos/400/240?random=6' }
])
</script>

<style scoped>
.home {
  background-color: #FDF8F0;
  min-height: 100vh;
}

/* 顶部横幅 */
.hero-banner {
  height: 560px;
  background-image: url('https://picsum.photos/1200/560?random=hero');
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 64px;
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

/* 编织之美标题 */
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

/* 历史渊源区 */
.history-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.history-content {
  height: 480px;
  padding: 24px;
  background-color: #FFF8E1;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 320px 160px;
  gap: 24px;
  position: relative;
  transition: all 0.3s ease;
}

.history-content:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.vertical-label {
  grid-row: 1 / 3;
  width: 80px;
  height: 160px;
  background-color: #8D6E63;
  color: #FDF8F0;
  font-size: 18px;
  font-weight: bold;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.history-image {
  grid-column: 2;
  grid-row: 1;
  width: 640px;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
}

.history-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.history-content:hover .history-image img {
  transform: scale(1.05);
}

.history-text-block {
  grid-column: 2;
  grid-row: 2;
  width: 480px;
  height: 160px;
  background-color: #FDF8F0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.history-desc {
  font-size: 16px;
  color: #5D4037;
  line-height: 24px;
  margin-bottom: 12px;
}

.learn-more {
  font-size: 14px;
  color: #8D6E63;
  text-decoration: none;
  transition: color 0.3s ease;
}

.learn-more:hover {
  color: #5D4037;
}

/* 作品欣赏区 */
.works-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.works-content {
  height: 480px;
  padding: 24px;
  background-color: #FDF8F0;
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-template-rows: 320px 160px;
  gap: 24px;
  position: relative;
}

.works-image {
  grid-column: 1;
  grid-row: 1;
  width: 640px;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
}

.works-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.works-content:hover .works-image img {
  transform: scale(1.05);
}

.works-text-block {
  grid-column: 1;
  grid-row: 2;
  width: 480px;
  height: 160px;
  background-color: #FFF8E1;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.works-desc {
  font-size: 16px;
  color: #5D4037;
  line-height: 24px;
  margin-bottom: 12px;
}

/* 新闻动态区 */
.news-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.news-content {
  height: 480px;
  padding: 24px;
  background-color: #FDF8F0;
  display: flex;
  gap: 24px;
}

.news-list {
  width: 480px;
  height: 320px;
  padding: 16px;
  overflow: hidden;
}

.news-item {
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  color: #5D4037;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease;
}

.news-item:hover {
  color: #8D6E63;
}

.video-container {
  width: 640px;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
}

.video-placeholder img {
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
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.video-duration {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

/* 底部三列区 */
.cards-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.cards-container {
  height: 320px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-title {
  font-size: 18px;
  color: #5D4037;
  font-weight: bold;
  text-align: center;
  margin-top: 16px;
  padding: 0 16px 16px;
}

/* 页脚 */
.footer {
  height: 160px;
  background-color: #212121;
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
  color: #BDBDBD;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #FDF8F0;
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
  color: #757575;
  font-size: 12px;
}

.footer-right {
  text-align: center;
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

.qr-label {
  color: #BDBDBD;
  font-size: 14px;
  margin-top: 8px;
}
</style>
