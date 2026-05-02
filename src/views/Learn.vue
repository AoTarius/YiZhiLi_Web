<template>
  <div class="page">
    <NavBar :active-index="5" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <img src="https://picsum.photos/1200/560?random=banner" alt="草编包与草鞋陈列" />
    </section>
    
    <!-- 学习体验标题 -->
    <section class="section-title">
      <h2 class="main-title">学习体验</h2>
      <p class="sub-title">CAOBIAN</p>
    </section>
    
    <!-- 草编文创馆介绍 -->
    <section class="intro-section">
      <div class="intro-container">
        <div class="intro-image">
          <img src="https://picsum.photos/1152/480?random=intro" alt="上海草编文化馆" />
        </div>
        <h3 class="intro-title">上海草编文化馆</h3>
        <p class="intro-desc">
          上海草编文创馆位于嘉定区澄浏公路147号上海徐行草编创意园内，于2006年筹建创立，前身是外贸服装工厂，2019年3月正式运营。草编文创馆场馆主楼共3层，1-2层为参观和手作体验区域，场馆内集实物和影像展览、设计、培训和销售功能为一体，同时包含了除徐行草编以外的宣纸、手作、艺术培训等多元化文化产业形式。上海草编文创馆致力于让广大社会各界人士和周边居民对"中国非物质文化遗产"有更深的认识和理解，对"民族传统文化"进一步弘扬民族文化。
        </p>
      </div>
    </section>
    
    <!-- 在线购票与开放时间 -->
    <section class="info-section">
      <div class="info-container">
        <!-- 左侧：在线购票 -->
        <div class="ticket-info">
          <h3 class="info-title">在线购票</h3>
          <p class="info-desc">上海草编文创馆实行 "全员预约机制"</p>
          <button class="ticket-btn">个人购票入口</button>
          <button class="ticket-btn">团队购票入口</button>
          <div class="qr-code">
            <img src="https://picsum.photos/160/160?random=qr1" alt="购票二维码" />
          </div>
        </div>
        
        <!-- 右侧：开放时间 -->
        <div class="time-info">
          <div class="map-container">
            <img src="https://picsum.photos/528/200?random=map" alt="地图" />
          </div>
          <h3 class="info-title">开放时间</h3>
          <p class="time-desc">
            · 周一逢国家法定节假日全天开放（除夕、大年初一闭馆）<br/>
            · 具体开放时间请关注上海草编文创馆公众号
          </p>
          <div class="time-detail">
            <p class="time-range">周二 - 周日</p>
            <p class="time-hours">9:00 - 15:30 - 16:00</p>
            <p class="time-label">开馆 停止入园 闭馆</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 底部版权区 -->
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
          <div class="qr-code-footer">
            <img src="https://picsum.photos/100/100?random=qr2" alt="小红书二维码" />
          </div>
          <span class="xiaohongshu-badge">小红书</span>
          <p class="xiaohongshu-id">小红书号：2674506360</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.page {
  background-color: #FAF8F5;
  min-height: 100vh;
  padding-top: 64px;
}

/* 顶部横幅 */
.hero-banner {
  width: 100%;
  height: 560px;
  overflow: hidden;
}

.hero-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 学习体验标题 */
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

/* 草编文创馆介绍 */
.intro-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.intro-container {
  width: 100%;
}

.intro-image {
  width: 100%;
  height: 480px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
}

.intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro-title {
  font-size: 24px;
  color: #FAF8F5;
  background-color: #8B5A2B;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  display: inline-block;
}

.intro-desc {
  font-size: 16px;
  color: #5D4037;
  line-height: 28px;
  margin-bottom: 40px;
}

/* 在线购票与开放时间 */
.info-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.info-container {
  display: flex;
  gap: 48px;
  padding: 40px;
}

/* 左侧：在线购票 */
.ticket-info {
  flex: 1;
}

.info-title {
  font-size: 28px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 16px;
}

.info-desc {
  font-size: 16px;
  color: #5D4037;
  margin-bottom: 24px;
}

.ticket-btn {
  display: block;
  width: 100%;
  max-width: 280px;
  font-size: 16px;
  color: #5D4037;
  background-color: #FAF8F5;
  border: 1px solid #5D4037;
  border-radius: 8px;
  padding: 12px 24px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ticket-btn:hover {
  background-color: #5D4037;
  color: #FAF8F5;
}

.qr-code {
  width: 160px;
  height: 160px;
  border: 1px solid #E5D8C8;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 24px;
}

.qr-code img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 右侧：开放时间 */
.time-info {
  flex: 1;
}

.map-container {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
}

.map-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.time-desc {
  font-size: 14px;
  color: #8D6E63;
  line-height: 24px;
  margin-bottom: 24px;
}

.time-detail {
  margin-top: 24px;
}

.time-range {
  font-size: 16px;
  color: #5D4037;
  margin-bottom: 8px;
}

.time-hours {
  font-size: 24px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 8px;
}

.time-label {
  font-size: 14px;
  color: #8D6E63;
  line-height: 24px;
}

/* 底部版权区 */
.footer {
  height: 120px;
  background-color: #333333;
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
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.footer-links a {
  color: #CCCCCC;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #FAF8F5;
}

.divider {
  color: #CCCCCC;
  font-size: 14px;
}

.contact-info {
  color: #CCCCCC;
  font-size: 14px;
  margin-bottom: 12px;
}

.browser-hint {
  color: #CCCCCC;
  font-size: 14px;
}

.footer-right {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-code-footer {
  width: 100px;
  height: 100px;
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  overflow: hidden;
}

.qr-code-footer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.xiaohongshu-badge {
  font-size: 12px;
  color: #FFFFFF;
  background-color: #FF2442;
  border-radius: 4px;
  padding: 4px 8px;
  margin-top: 8px;
  display: inline-block;
}

.xiaohongshu-id {
  color: #CCCCCC;
  font-size: 14px;
  margin-top: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .info-container {
    flex-direction: column;
    gap: 32px;
    padding: 24px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 16px;
  }
  
  .footer-right {
    align-items: flex-start;
  }
  
  .footer {
    height: auto;
    min-height: 120px;
  }
  
  .page {
    padding: 0 16px;
  }
}
</style>
