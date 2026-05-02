<template>
  <div class="works-page">
    <NavBar :active-index="4" background-color="#FAF8F5" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <img src="../imgs/Works/Background.jpg" alt="作品欣赏" />
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
            <a :href="work.link" class="detail-link" :target="work.link.startsWith('http') ? '_blank' : '_self'" :rel="work.link.startsWith('http') ? 'noopener noreferrer' : ''">了解详情>>></a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 视频区 -->
    <section class="video-section">
      <div class="video-content">
        <div class="video-player">
          <video 
            :src="videoUrl" 
            controls 
            :poster="videoPoster" 
            alt="作品视频"
            @loadeddata="captureFirstFrame"
          >
            您的浏览器不支持视频播放
          </video>
        </div>
        <div class="video-title-vertical">
          <p>作品展示</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const videoUrl = new URL('../videos/Works.mp4', import.meta.url).href
const videoPoster = ref('')

const captureFirstFrame = () => {
  const video = document.querySelector('.video-player video')
  if (video && !videoPoster.value) {
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth || 1200
    canvas.height = video.videoHeight || 480
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    videoPoster.value = canvas.toDataURL('image/jpeg')
  }
}

const works = ref([
  {
    title: '以黄草为线，指尖为梭编织独特的当午记忆',
    description: 'chillmore且悠携手国家级非物质文化遗产上海嘉定徐行草编，以「绿洲」为灵感，将自然与匠心编织进端午时节。',
    image: 'src/imgs/Works/Works-1.jpg',
    link: 'https://weixin.qq.com/sph/AIcrKZXQZs'
  },
  {
    title: '野兽派与徐行草编联名系列',
    description: '2023端午，野兽派携手国家级非遗质文化遗产"徐行草编"，为您带来这父温暖而独持的限 定系列。',
    image: 'src/imgs/Works/Works-2.jpg',
    link: 'https://mp.weixin.qq.com/s/WBWR0iI-ywW-pAntq87paw'
  },
  {
    title: '荷木HEMU丨非遗系列',
    description: '钢筋森林里，藏着徐行草编的呼吸。非遗匠人捻转田野黄草，每道纹路都独一无二。荷木HEMU丨2026SS「揽蕙」系列作品上新。 ',
    image: 'src/imgs/Works/Works-3.jpg',
    link: 'https://weixin.qq.com/sph/ARAXEPY2Vu'
  },
  {
    title: '庆祝建党百年',
    description: '继草编“南湖红船”之后，上海徐行草编文化发展有限公司又有新作！',
    image: 'src/imgs/Works/Works-4.jpg',
    link: 'https://mp.weixin.qq.com/s/SUlV-l-KYYPHAMHNefuHWg'
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

.video-player video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  background-color: #000;
}

.video-title-vertical {
  width: 200px;
  height: 240px;
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

</style>
