<template>
  <div id="content">
    <a-config-provider :locale="zhCN">
      <router-view class="router"></router-view>
    </a-config-provider>
  </div>
</template>

<script setup>
// 汉化
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

body {
  background-color: #d5ebe1 !important;
}
</style>
