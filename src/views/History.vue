<template>
  <div class="history-page">
    <NavBar :active-index="1" background-color="#FAF8F5" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <div class="hero-content">
        <h1 class="hero-title">徐行草编</h1>
        <p class="hero-subtitle">XU HANG CAO BIAN</p>
      </div>
    </section>
    
    <!-- 历史渊源标题 -->
    <section class="section-title">
      <h2 class="main-title">历史渊源</h2>
      <p class="sub-title">CAOBIAN</p>
    </section>
    
    <!-- 时间轴内容区 -->
    <section class="timeline-section">
      <div class="timeline-content">
        <!-- 左侧列 -->
        <div class="timeline-column">
          <div class="timeline-card" v-for="(card, index) in leftCards" :key="'left-' + index">
            <div class="card-image">
              <img :src="card.image" :alt="card.title" />
            </div>
            <div class="card-title-tag">{{ card.title }}</div>
            <div class="card-description">{{ card.description }}</div>
          </div>
        </div>
        
        <!-- 右侧列 -->
        <div class="timeline-column">
          <div class="timeline-card right-card" v-for="(card, index) in rightCards" :key="'right-' + index">
            <div class="card-title-tag">{{ card.title }}</div>
            <div class="card-description">{{ card.description }}</div>
            <div class="card-image">
              <img :src="card.image" :alt="card.title" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const leftCards = ref([
  {
    title: '旧石器时代',
    description: '人类祖先用植物韧皮编织成网仓（网状兜物），内盛石球以狩猎，并用草、藤做成草绳串起骨针缝制衣物。',
    image: 'src/imgs/History/History-1.jpg'
  },
  {
    title: '殷商至战国时期',
    description: '草编制品（如席、篮、帽、鞋）在生活中广泛使用。周代已有专业“草工”，战国时柳编（杯椿）已很普及。',
    image: 'src/imgs/History/History-3.jpg'
  },
  {
    title: '隋唐时代',
    description: '草席生产普遍，出现著名产地。浙江宁波一带用“蔺草”编织舒适凉爽的睡席。',
    image: 'src/imgs/History/History-5.jpg'
  },
])

const rightCards = ref([
  {
    title: '新石器时代',
    description: '陶器上已出现清晰的编织纹（如八字纹、辫纹）。浙江钱山漾遗址出土大量竹编实物，如篓、篮、席等，表明编织技艺已达一定水平。',
    image: 'src/imgs/History/History-2.jpg'
  },
  {
    title: '汉代',
    description: '草编种类丰富，浙江嵊州的竹编（竹箩、竹篮）既简朴实用又编织巧妙。',
    image: 'src/imgs/History/History-4.jpg'
  },
  {
    title: '宋元时期',
    description: '草编应用广泛，出现知名品种、产地和专门的管理部门（如藤作、竹作）。相关工艺制品在农书中被大量记载。',
    image: 'src/imgs/History/History-6.jpg'
  }
])
</script>

<style scoped>
.history-page {
  background-color: #FAF8F5;
  min-height: 100vh;
  padding-top: 64px;
}

/* 顶部横幅 */
.hero-banner {
  height: 480px;
  background-image: url('../imgs/History/Background.jpg');
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
  color: #f2e0db;
  font-weight: bold;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 20px;
  color: #f1e3dd;
  letter-spacing: 4px;
}

/* 历史渊源标题 */
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

/* 时间轴内容区 */
.timeline-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.timeline-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 40px;
  background-color: #FFF8E1;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.timeline-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.timeline-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  transition: all 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.timeline-card:hover .card-image img {
  transform: scale(1.05);
}

.card-title-tag {
  width: fit-content;
  height: 40px;
  background-color: #8B5A2B;
  color: #FAF8F5;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-description {
  width: 300px;
  font-size: 14px;
  color: #5D4037;
  line-height: 24px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.timeline-card:hover .card-description {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.right-card {
  align-items: flex-end;
}

.right-card .card-image {
  order: 3;
}

.right-card .card-title-tag {
  order: 1;
}

.right-card .card-description {
  order: 2;
}

</style>
