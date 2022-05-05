<!-- 首页 -->
<template>
  <div id="home">
    <TopBar />
    <TopSearch />
    <div class="content">
      <Swiper/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopSearch from '../../components/top-search/top-search.vue'
import TopBar from '../../components/top-bar/top-bar.vue'
import Swiper from '../../components/swiper/swiper.vue'
</script>

<style src="./styles.less" lang="less" scoped/>
