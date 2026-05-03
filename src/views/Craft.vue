<template>
  <div class="craft-page">
    <NavBar :active-index="5" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <div class="hero-content">
        <div class="hero-left-text">
          <h1 class="hero-title">徐行草编</h1>
          <p class="hero-subtitle">Xuhang Grass Weaving</p>
          <p class="hero-desc">寻平和之美 纵横交叠间 于自然之源</p>
        </div>
        <div class="hero-right-text">
          <p>隐藏绿意盎然之美</p>
          <p>每一道经纬交织间</p>
        </div>
      </div>
    </section>
    
    <!-- 工艺展示标题 -->
    <section class="section-title">
      <h2 class="main-title">工艺展示</h2>
      <p class="sub-title">Cyperus Grass Weaving</p>
    </section>
    
    <!-- 技艺介绍区 -->
    <section class="intro-section">
      <div class="intro-content">
        <div class="intro-left">
          <div class="intro-image img-200">
            <img :src="headImages[0]" alt="技艺图片1" />
          </div>
          <div class="intro-image img-300">
            <img :src="headImages[1]" alt="技艺图片2" />
          </div>
          <div class="intro-image img-200">
            <img :src="headImages[2]" alt="技艺图片3" />
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
    
    <!-- 黄草工艺步骤区 -->
    <section class="steps-section">
      <div class="steps-grid">
        <div class="step-card" v-for="(step, index) in steps" :key="index">
          <div class="step-image">
            <img :src="step.image" :alt="step.title" />
            <div class="step-overlay">
              <p class="step-description">{{ step.description }}</p>
            </div>
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
          <video 
            :src="videoUrl" 
            controls 
            :poster="videoPoster" 
            alt="草编工艺视频"
            @loadeddata="captureFirstFrame"
          >
            您的浏览器不支持视频播放
          </video>
        </div>
        <div class="video-title-vertical">
          <p>手工艺术之旅</p>
        </div>
      </div>
    </section>
    
    <!-- 资源 -->
    <section class="quick-learning">
      <div class="learning-container">
        <h3 class="learning-title">匠心学堂</h3>
        
        <div class="learning-content">
          <div class="learning-section">
            <h4 class="section-heading">材料准备：</h4>
            <ul class="link-list">
              <li><a href="http://xhslink.com/o/NiMYzn80Sw" target="_blank" rel="noopener noreferrer">种植黄草</a></li>
              <li><a href="http://xhslink.com/o/5capLwo5p6v" target="_blank" rel="noopener noreferrer">从收割开始做徐行草编</a></li>
              <li><a href="http://xhslink.com/o/23Gu7MIs5mY" target="_blank" rel="noopener noreferrer">黄草劈茎</a></li>
              <li><a href="http://xhslink.com/o/A7YAcydgFG0" target="_blank" rel="noopener noreferrer">黄草染色</a></li>
            </ul>
          </div>
          
          <div class="learning-section">
            <h4 class="section-heading">编织过程：</h4>
            <ul class="link-list">
              <li><a href="http://xhslink.com/o/1XHPQwSUpt9" target="_blank" rel="noopener noreferrer">草编起头</a></li>
              <li><a href="http://xhslink.com/o/ANDxhgG6ABI" target="_blank" rel="noopener noreferrer">搓草绳</a></li>
              <li><a href="http://xhslink.com/o/9PPxvgOWCz9" target="_blank" rel="noopener noreferrer">搓草茎</a></li>
              <li><a href="http://xhslink.com/o/xNzzkeo8Dt" target="_blank" rel="noopener noreferrer">草编收口</a></li>
            </ul>
          </div>
          
          <div class="learning-section">
            <h4 class="section-heading">编织花纹：</h4>
            <ul class="link-list">
              <li><a href="http://xhslink.com/o/6crJMDLFhNj" target="_blank" rel="noopener noreferrer">草编花纹之铜钱花</a></li>
              <li><a href="http://xhslink.com/o/1HGTxi51W8a" target="_blank" rel="noopener noreferrer">草编花纹之凤眼</a></li>
              <li><a href="http://xhslink.com/o/9Z2fUKlU3uF" target="_blank" rel="noopener noreferrer">草编花纹之六角眼</a></li>
            </ul>
          </div>
          
          <div class="learning-section">
            <h4 class="section-heading">作品制作：</h4>
            <ul class="link-list">
              <li><a href="http://xhslink.com/o/9URSH9WChUW" target="_blank" rel="noopener noreferrer">制品教程</a></li>
              <li><a href="http://xhslink.com/o/7feAyXp82j0" target="_blank" rel="noopener noreferrer">蜻蜓胸针</a></li>
              <li><a href="http://xhslink.com/o/2PC93lkpkTb" target="_blank" rel="noopener noreferrer">草编香囊</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const getImageUrl = (path) => {
  return new URL(`../imgs/Craft/${path}`, import.meta.url).href
}

const videoUrl = new URL('../videos/Craft.mp4', import.meta.url).href
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

const headImages = ref([
  getImageUrl('Head-1.jpg'),
  getImageUrl('Head-2.jpg'),
  getImageUrl('Head-3.jpg')
])

const steps = ref([
  { 
    title: '人字编', 
    image: getImageUrl('craft-1.png'),
    description: '人字编是一种以对角线交错为特征的编织结构，草条按规律形成连续“V”字形纹样，具有明显方向性与节奏感。该编法结构较为稳定，能有效分散受力，适合用于需要一定强度与装饰性的器物表面，如草席、包具等，同时也体现出传统工艺中秩序与均衡的审美。'
  },
  { 
    title: '波浪编', 
    image: getImageUrl('craft-2.png'),
    description: '波浪编通过改变草条排列的密度与走向，使编面呈现起伏曲线，形成类似水波的视觉效果。这种编法强调动态与节奏，打破均匀编织的单调性，具有较强装饰性与表现力。常用于强调外观设计的草编制品，如手工包或陈设物，体现工艺中的变化与流动感。'
  },
  { 
    title: '蜂眼编', 
    image: getImageUrl('craft-3.png'),
    description: '蜂眼编以六边形孔洞为基本结构单元，形成类似蜂巢的网状编织效果，整体轻巧且通透。该编法对编织精度要求较高，需要精准控制节点与张力，以保证结构稳定。其良好的透气性与视觉层次，使其常用于草帽、篮具等功能性与美观兼具的制品。'
  },
  { 
    title: '斜纹编', 
    image: getImageUrl('craft-4.png'),
    description: '斜纹编通过规律性交错经纬草条，形成连续的斜向纹路，类似纺织中的斜纹结构。该编法兼具强度与柔韧性，结构稳定且富有方向感。相较于平纹编更具变化性，又比复杂结构更易掌握，广泛应用于草篮、垫具等日常器物中，体现实用与美观的结合。'
  },
  { 
    title: '米字形编', 
    image: getImageUrl('craft-5.png'),
    description: '米字形编以交叉放射的结构为特征，草条从中心向多方向延展，形成类似“米”字的几何纹样。该编法具有较强的视觉聚焦效果与结构支撑性，常用于器物底部或中心区域，以增强整体稳定性与装饰层次。同时，其放射状构图也体现出传统编织中对均衡与秩序的把握。'
  },
  { 
    title: '密编', 
    image: getImageUrl('craft-6.png'),
    description: '密编是指通过紧密排列草条、减少间隙的一类编织方式，其结构以高密度为主要特征。编面平整、厚实，具有良好的承重性与耐用性，同时也增强了防尘与遮挡功能。该编法常用于功能性较强的器物，如收纳容器或垫具，体现出以实用为导向的工艺逻辑。'
  }
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
  background-image: url('../imgs/Craft/Background.jpg');
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
  width: 640px;
  height: 360px;
  padding: 24px;
  color: #FDF8F0;
  font-size: 36px;
  line-height: 56px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* 黄草工艺标题 */
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
  grid-template-columns: 30% 70%;
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
  padding: 10%;
}

.intro-text {
  font-size: 16px;
  color: #5D4037;
  line-height: 28px;
}

/* 黄草工艺步骤区 */
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
  position: relative;
}

.step-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
}

.step-card:hover .step-image img {
  opacity: 0;
  transform: scale(1.1);
}

.step-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(93, 64, 55, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  padding: 16px;
}

.step-card:hover .step-overlay {
  opacity: 1;
}

.step-description {
  font-size: 14px;
  color: #FDF8F0;
  line-height: 1.6;
  text-align: center;
  margin: 0;
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
  object-fit: cover;
}

.video-player video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  background-color: #000;
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

/* 快速学习资源 */
.quick-learning {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
}

.learning-container {
  background-color: #FFF8E1;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 32px;
}

.learning-title {
  font-size: 24px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
}

.learning-content {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.learning-section {
  flex: 1;
  min-width: 220px;
  max-width: 280px;
}

.section-heading {
  font-size: 18px;
  color: #8B5A2B;
  font-weight: bold;
  margin-bottom: 16px;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fae8ce;
  border-radius: 8px;
  overflow: hidden;
}

.link-list li {
  height: 44px;
  line-height: 44px;
  padding: 4px 16px;
  border-bottom: 1px solid #E8DFD4;
  margin-bottom: 4px;
  transition: all 0.3s ease;
}

.link-list li:last-child {
  border-bottom: none;
}

.link-list li:hover {
  background-color: #F5EEE6;
  padding-left: 24px;
}

.link-list a {
  font-size: 16px;
  color: #5D4037;
  text-decoration: none;
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color 0.3s ease;
}

.link-list li:hover a {
  color: #8B5A2B;
}
</style>
