<template>
  <div class="craft-page">
    <NavBar :active-index="2" />
    
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
    
    <!-- 黄草养育标题 -->
    <section class="section-title">
      <h2 class="main-title">黄草工艺</h2>
      <p class="sub-title">Cyperus exaltatus</p>
    </section>
    
    <!-- 技艺介绍区 -->
    <section class="intro-section">
      <div class="intro-content">
        <div class="intro-left">
          <div class="intro-image img-200">
            <img :src="craftImages[0]" alt="技艺图片1" />
          </div>
          <div class="intro-image img-300">
            <img :src="craftImages[1]" alt="技艺图片2" />
          </div>
          <div class="intro-image img-200">
            <img :src="craftImages[2]" alt="技艺图片3" />
          </div>
        </div>
        <div class="intro-right">
          <div class="intro-text">
            <p>高杆莎草茎秆高1-1.5米，呈钝三棱状，基部具多叶，叶片长宽与茎秆相近，边缘粗糙。穗状花序圆柱形，长2-5厘米，小穗长圆状披针形，排列紧密，具6-16朵花；鳞片卵形，背部绿色具3-5脉，两侧栗色；果实为倒卵形或椭圆形三棱状小坚果。常见于池塘边、草地等湿润环境，花果期为6-8月。</p>
          </div>
          <div class="intro-text">
            <p>它的花序尤为引人注目——数个穗状花序呈长圆柱形，长度在2到5厘米之间，紧密地排列于茎顶，远望如同一支支微型的蜡烛。小穗为长圆状披针形，彼此挨挤，排列得严丝合缝；每个小穗内含6至16朵小花。包裹小花的鳞片呈卵形，背面中央有一条绿色的纵带，上面浮凸着3至5条细脉，而鳞片的两侧则为浓郁的栗褐色，犹如镶了暗红色的边，在绿意盎然的草丛中格外醒目。</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 黄草养育步骤区 -->
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
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const steps = ref([
  { 
    title: '黄草去苋', 
    image: 'src/imgs/Grass/Grass-1.jpg',
    description: '黄草收割后，首先要剪掉顶部的花穗（即"苋"），这是整理原料的第一步。'
  },
  { 
    title: '黄草开草', 
    image: 'src/imgs/Grass/Grass-2.jpg',
    description: '用特制刀具将黄草茎秆沿纵向剖开，分成均匀的草条，为后续编织做准备。'
  },
  { 
    title: '黄草浸泡', 
    image: 'src/imgs/Grass/Grass-3.jpg',
    description: '将开好的草条放入清水中浸泡数小时，使其充分吸水变软，增加韧性。'
  },
  { 
    title: '黄草劈丝', 
    image: 'src/imgs/Grass/Grass-4.jpg',
    description: '将染好色的草条进一步劈分成更细的草丝，用于编织细腻的纹理或复杂花纹。'
  },
  { 
    title: '黄草染色', 
    image: 'src/imgs/Grass/Grass-5.png',
    description: '使用天然植物染料对草条进行着色，赋予黄草丰富的色彩，编织出吉祥图案。'
  },
  { 
    title: '黄草漂洗', 
    image: 'src/imgs/Grass/Grass-6.jpg',
    description: '将染色的细草丝放入清水中浸泡数小时，使其充分吸水变软，增加韧性。'
  }
])

const craftImages = ref([
  'src/imgs/Grass/Head-1.jpg',
  'src/imgs/Grass/Head-2.png',
  'src/imgs/Grass/Head-3.png'
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
  background-image: url('src/imgs/Grass/Background.jpg');
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

/* 黄草养育标题 */
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

/* 黄草养育步骤区 */
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

</style>
