<template>
  <div class="home">
    <NavBar :active-index="0" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <div class="hero-content">
        <div class="hero-left-text">
          <h1 class="hero-title">徐行草编</h1>
          <p class="hero-subtitle">Xuhang Grass Weaving</p>
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
          <img :src="homeImages[0]" alt="历史渊源" />
        </div>
        <div class="history-text-block">
          <p class="history-desc">清同治年间，嘉定形成了以徐行镇为中心的黄草编织区，成为本地农民一项主要的家庭手工业。数百年来，黄草……</p>
          <a href="/history" class="learn-more">了解更多 →</a>
        </div>
      </div>
    </section>
    
    <!-- 作品欣赏区 -->
    <section class="works-section">
      <div class="works-content">
        <div class="works-image">
          <img :src="homeImages[1]" alt="作品欣赏" />
        </div>
        <div class="vertical-label">作品欣赏</div>
        <div class="works-text-block">
          <p class="works-desc">如今的徐行草编正在开辟全新道路，传统黄草与云南彝绣、皮具、竹子等材料相融合，编织出时尚拎包、草编屏风、灯具等全新款式，碰撞出别……</p>
          <a href="/works" class="learn-more">了解更多 →</a>
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
          <video 
            class="video-player" 
            controls 
            :poster="videoPoster"
            :src="videoUrl"
            @loadeddata="captureFirstFrame"
          >
            您的浏览器不支持视频播放
          </video>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const videoUrl = new URL('../videos/HomePage_ Document.mp4', import.meta.url).href
const videoPoster = ref('')

const captureFirstFrame = () => {
  const video = document.querySelector('.video-container .video-player')
  if (video && !videoPoster.value) {
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 320
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    videoPoster.value = canvas.toDataURL('image/jpeg')
  }
}

const newsList = ref([
  '组名：fi（非遗）梨',
  '组长：基安',
  '组员：陈翱齐、林佳欣、李培菁、王雪华',
  '组员：廖思茗、陈若霖、江宜霖',
  '导师：朱钟炎',
  '助教：陈一齐',
])

const cards = ref([
  { title: '传承人风采', image: 'src/imgs/Home/Bottom-1.png' },
  { title: '作品欣赏', image: 'src/imgs/Home/Bottom-2.png' },
  { title: '技艺展示', image: 'src/imgs/Home/Bottom-3.png' }
])

const homeImages = ref([
  'src/imgs/Home/Home-1.jpg',
  'src/imgs/Home/Home-2.jpg'
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
  background-image: url('src/imgs/Home/BackGround.jpg');
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

.video-player {
  width: 100%;
  border-radius: 8px;
  background-color: #000;
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

</style>
