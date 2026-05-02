<template>
  <div class="page">
    <NavBar :active-index="7" />
    
    <div class="page-content">
      <h1>草编创意</h1>
      <p>这里是草编创意页面内容</p>
    </div>
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

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

h1 {
  font-size: 32px;
  color: #5D4037;
  margin-bottom: 24px;
}

p {
  font-size: 16px;
  color: #5D4037;
  line-height: 24px;
}
</style>
