<!-- 顶部条 -->
<template>
  <div id="top-bar-box">
    <div class="title">Anime Star List</div>
    <div class="catogary">
      <ul class="catogary-list">
        <li :key="item.id" v-for="item in anime_catogary_list" @click="switchCatagory(item.id)">
          <a :href="item.path">
            <span :class="current_catogary_id === item.id ? 'actived' : ''">
              {{ item.name }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

/** 当前种类id */
const current_catogary_id = ref<number>(0)
/** 种类信息列表 */
const anime_catogary_list = reactive([
  {
    id: 0,
    path: '#',
    name: '首页'
  }, {
    id: 1,
    path: '#',
    name: '国漫'
  }, {
    id: 2,
    path: '#',
    name: '日漫'
  }
])

/** 点击切换种类 */
const switchCatagory = (id: number): void => {
  current_catogary_id.value = id
}
</script>

<style src="./styles.less" lang="less" scoped/>
