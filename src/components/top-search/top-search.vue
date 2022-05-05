<!-- 顶部搜索组件 -->
<template>
  <div id="top-search-box">
    <div class="search-box">
      <div class="search-input">
        <input type="text" placeholder="搜索国漫、日漫" @click="toggleFlag" @blur="toggleFlag">
      </div>
      <div class="search-drop" v-show="input_focus_flag">
        <span>大家都在搜这些影片</span>
        <div class="hot-search-list">
          <a
            :key="item.id"
            :href="item.path"
            :class="item.id < 3 ? 'hot' : ''"
            v-for="item in hot_search_list"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

/** 搜索框点击标记变量 */
const input_focus_flag = ref<boolean>(false)
/** 热搜番剧列表 */
const hot_search_list = reactive([
  {
    id: 0,
    path: '#',
    name: '辉夜大小姐想让我告白'
  }, {
    id: 1,
    path: '#',
    name: '间谍过家家'
  }, {
    id: 2,
    path: '#',
    name: '夏日重现'
  }, {
    id: 3,
    path: '#',
    name: '进击的巨人'
  }, {
    id: 4,
    path: '#',
    name: '命运石之门'
  }, {
    id: 5,
    path: '#',
    name: '刀剑神域'
  }
])

/** 切换标记变量 */
const toggleFlag = (event: any) => {
  input_focus_flag.value = event.type === 'click'
}
</script>

<style src="./styles.less" lang="less" scoped/>
