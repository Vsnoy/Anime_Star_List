<!-- 首页 -->
<template>
  <div id="home">
    <TopBar />
    <TopSearch />
  </div>
</template>

<script setup lang="ts">
import TopSearch from '../components/top-search/top-search.vue'
import TopBar from '../components/top-bar/top-bar.vue'

</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 'auto';
}
</style>
