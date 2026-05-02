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
            <img src="https://picsum.photos/100/100?random=qr2" alt="二维码" />
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

const leftCards = ref([
  {
    title: '周代至秦汉',
    description: '周代已有蒡(浦草)编制的蒡席了，春秋战国时期，已有用菅麻和浦草编制的斗笠。秦汉时期，草编已在民间广泛使用。',
    image: 'https://picsum.photos/300/200?random=hist1'
  },
  {
    title: '唐宋时期',
    description: '北宋张洋端名图《青明上对图》中，随处可见头戴草幅的百姓。需草帽也是草输中服常见的成品南宋和北宋，朝继还成立了专门的进行编织生产的机构。',
    image: 'https://picsum.photos/300/200?random=hist2'
  },
  {
    title: '明清时期',
    description: '明清朝草编产品开始广泛出口到国外，因此那是草编产品的风格各有不同，有时简单素朴，有时华丽精美。2008年6月7日，草编经中华人民共和国家国务院批准列入第二批国家级非物质文化遗产名录，项目编号V1-54。',
    image: 'https://picsum.photos/300/200?random=hist3'
  }
])

const rightCards = ref([
  {
    title: '河姆渡人',
    description: '目前可见的中国最早的草编选物是河姆渡人制作的，绳子“搓动原理”成就了纺线技术，苇席的“编织原理”成就了织布技术。',
    image: 'https://picsum.photos/300/200?random=hist4'
  },
  {
    title: '汉唐时期',
    description: '汗代至盛唐，草编亦较发达。除了蒲草编制蒲衣、蒲鞋外，还有蒲草编制的蒲帆。',
    image: 'https://picsum.photos/300/200?random=hist5'
  },
  {
    title: '现代传承',
    description: '明清朝草编产品开始广泛出口到国外，因此那是草编产品的风格各有不同，有时简单素朴，有时华丽精美。2008年6月7日，草编经中华人民共和国家国务院批准列入第二批国家级非物质文化遗产名录，项目编号V1-54。',
    image: 'https://picsum.photos/300/200?random=hist6'
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
  background-image: url('https://picsum.photos/1200/480?random=history-banner');
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
