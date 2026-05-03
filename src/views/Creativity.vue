<template>
  <div class="page">
    <NavBar :active-index="7" />
    
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <img src="../imgs/Creativity/Background.jpg" alt="草编创意横幅" />
    </section>
    
    <!-- 草编创意标题 -->
    <section class="section-title">
      <h2 class="main-title">草编创意</h2>
      <p class="sub-title">CREATIVITY</p>
    </section>
    
    <!-- 创意展示区 -->
    <section class="creative-section">
      <!-- 第一行：左图右文 -->
      <div class="creative-card row-left">
        <div class="creative-image">
          <img :src="creativityImages[0]" alt="创意作品1" />
        </div>
        <div class="creative-content">
          <h3 class="creative-title">现代高铁与飞机专用吸音板</h3>
          <p class="creative-desc">
            产品创新性地采用徐行黄草的密编（紧密无隙）、镂空（通透孔洞）与网眼结构，增强作品的层次感与透气性，将传统非遗工艺与现代交通声学工程相融合，为出行提供专业声学解决方案。
          </p>
          <p class="creative-desc">
            产品内部采用天然仿生网络结构，能高效吸收机舱或车厢内的低频噪音，为乘客营造安静的睡眠环境，显著提升舱内舒适度。
          </p>
          <p class="creative-desc">
            具备优异的柔韧性与可塑性，能与飞机、高铁内部的弧形及异形舱壁完美贴合，安装便捷，日常维护成本极低。
          </p>
          <div class="creative-tags">
            <span class="tag">高铁降噪</span>
            <span class="tag">飞机声学</span>
            <span class="tag">环保材料</span>
          </div>
        </div>
      </div>
      
      <!-- 第二行：左文右图 -->
      <div class="creative-card row-right">
        <div class="creative-content">
          <h3 class="creative-title">生物基3D打印耗材</h3>
          <p class="creative-desc">
            创新性地将徐行黄草纳米级纤维与可降解高分子材料（如PLA、PHA）深度融合，专为工业级与消费级增材制造设计，是替代传统石化基耗材的理想绿色选择。
          </p>
          <p class="creative-desc">
            黄草纤维降低了材料的热膨胀系数，极大改善打印过程中的收缩变形问题。层间结合力更强，确保零件尺寸精准、表面细腻。
          </p>
          <div class="creative-tags">
            <span class="tag">3D打印耗材</span>
            <span class="tag">生物基材料</span>
            <span class="tag">绿色制造</span>
          </div>
        </div>
        <div class="creative-image">
          <img :src="creativityImages[1]" alt="创意作品2" />
        </div>
      </div>
      
      <!-- 第三行：左图右文 -->
      <div class="creative-card row-left">
        <div class="creative-image">
          <img :src="creativityImages[2]" alt="创意作品3" />
        </div>
        <div class="creative-content">
          <h3 class="creative-title">改良型徐行草编FPSO海上浮动器件</h3>
          <p class="creative-desc">
            本产品将“徐行草编”编织工艺与现代海洋工程、生物基3D打印技术相结合，专为FPSO（浮式生产储油卸装置）及海上综合能源平台打造，旨在提供卓越的缓冲消能与生态修复双重功能。
          </p>
          <p class="creative-desc">
            采用徐行草编特有的多层挑压结构与仿生蜂窝网格，具备吸能及抗风浪缓冲能力，有效减弱海洋复杂环境对FPSO装置的直接冲击。
          </p>
          <p class="creative-desc">
            编织外壳材质100%天然可降解，杜绝微塑料污染。粗糙的草编表面为藻类与贝类提供天然附着基，结合深海修复网，主动促进近海及底栖生物的多样性恢复。
          </p>
          <div class="creative-tags">
            <span class="tag">海洋工程</span>
            <span class="tag">生态修复</span>
            <span class="tag">草编工艺</span>
          </div>
        </div>
      </div>

      <!-- 第四行：左文右图 -->
      <div class="creative-card row-right">
        <div class="creative-content">
          <h3 class="creative-title">青青.徐行草编高端马术装备</h3>
          <p class="creative-desc">
            本系列产品将国家级非物质文化遗产“徐行草编”的工艺与现代马术工程学深度融合，专为场地障碍设计，致力于在关爱动物福祉与追求卓越运动表现之间找到完美平衡。
          </p>
          <p class="creative-desc">
            草编天然网眼结构具有良好的透气性，能有效加速汗液挥发，保持马匹背部及敏感部位干爽，防止因闷热导致的皮肤不适。
          </p>
          <p class="creative-desc">
            草编复合材料在保证强度的同时大幅减轻装备自重，减少马匹脊柱的额外负荷；其仿生结构能有效吸收起跳与落地时的冲击，保护马匹关节与肌腱。
          </p>
          <div class="creative-tags">
            <span class="tag">马术装备</span>
            <span class="tag">动物福祉</span>
            <span class="tag">草编工艺</span>
          </div>
        </div>
        <div class="creative-image">
          <img :src="creativityImages[3]" alt="创意作品4" />
        </div>
      </div>
      
      <!-- 第五行：左图右文 -->
      <div class="creative-card row-left">
        <div class="creative-image">
          <img :src="creativityImages[4]" alt="创意作品5" />
        </div>
        <div class="creative-content">
          <h3 class="creative-title">黄草基湿度响应卷绕型人工肌肉</h3>
          <p class="creative-desc">
            本产品将经过特殊工艺处理的黄草纤维与高弹性高分子复合（如与生物基Ecoflex硅胶或热塑性弹性体形成芯-壳结构），并采用螺旋卷绕或双螺旋编织方式构建“纱线肌肉”结构。在湿度变化时，黄草纤维吸水膨胀带动纱线解旋/卷紧，产生收缩力。若采用热响应（亲水凝胶涂层+电阻加热丝）则可实现电控往复动作。
          </p>
          <p class="creative-desc">
            哈佛大学、德州大学达拉斯分校等团队已经在天然纤维人工肌肉方面做了大量开创性工作——从碳纳米管卷绕、聚合物卷绕到天然蚕丝湿度响应肌肉，技术路线成熟。徐行草编站在这些已有科研成果的肩膀上，将黄草当作一类新的天然纤维素材，从“材料替换”验证开始，技术路线转化清晰，成本可控。
          </p>
          <div class="creative-tags">
            <span class="tag">人工肌肉</span>
            <span class="tag">智能材料</span>
            <span class="tag">生物驱动</span>
          </div>
        </div>
      </div>

      <!-- 第六行：左文右图 -->
      <div class="creative-card row-right">
        <div class="creative-content">
          <h3 class="creative-title">声纹.上海hua（话/画）</h3>
          <p class="creative-desc">
            《声纹·上海话》是一组以徐行草编为载体的声音可视化艺术壁挂。选取典型的沪语对话、上海童谣，通过数字软件将声波波形转化为可视化图谱，再以草编的经纬密度进行“翻译”——高频段采用密实挑压编，中低频段运用镂空透气编，让声波的起伏变化转化为黄草纤维的疏密虚实。
          </p>
          <p class="creative-desc">
            作品将听觉记忆转化为触觉纹理，使沪语的软糯与草编的温润同频共振。观者既能远观声纹的抽象节奏，又能近触编织的肌理起伏，在“看见声音”的同时感受非遗技艺的当代转译。该系列兼具艺术收藏与城市文化叙事价值，是海派声音遗产的非遗物质化表达。
          </p>
          <div class="creative-tags">
            <span class="tag">声音可视化</span>
            <span class="tag">海派文化</span>
            <span class="tag">艺术装置</span>
          </div>
        </div>
        <div class="creative-image">
          <img :src="creativityImages[5]" alt="创意作品6" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const creativityImages = ref([
  'src/imgs/Creativity/Creativity-1.png',
  'src/imgs/Creativity/Creativity-2.jpg',
  'src/imgs/Creativity/Creativity-3.jpg',
  'src/imgs/Creativity/Creativity-4.jpg',
  'src/imgs/Creativity/Creativity-5.jpg',
  'src/imgs/Creativity/Creativity-6.png',
])
</script>

<style scoped>
.page {
  background-color: #FDF8F0;
  min-height: 100vh;
  padding-top: 64px;
}

/* 顶部横幅 */
.hero-banner {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.hero-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 草编创意标题 */
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

/* 创意展示区 */
.creative-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
}

.creative-card {
  display: flex;
  gap: 48px;
  padding: 40px;
  background-color: #FFF8E1;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
  transition: all 0.3s ease;
}

.creative-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.creative-image {
  width: 500px;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.creative-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.creative-card:hover .creative-image img {
  transform: scale(1.05);
}

.creative-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.creative-title {
  font-size: 24px;
  color: #5D4037;
  font-weight: bold;
  margin-bottom: 16px;
}

.creative-desc {
  font-size: 16px;
  color: #5D4037;
  line-height: 28px;
  margin-bottom: 24px;
}

.creative-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tag {
  font-size: 14px;
  color: #FAF8F5;
  background-color: #8B5A2B;
  padding: 6px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: #5D4037;
}

/* 第二行：左文右图 */
.row-right {
  flex-direction: row-reverse;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .creative-card {
    flex-direction: column;
    align-items: center;
  }
  
  .row-right {
    flex-direction: column;
  }
  
  .creative-image {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
  
  .creative-content {
    width: 100%;
  }
}
</style>
