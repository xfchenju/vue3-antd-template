<!--
 * @Description: 前台布局
 * @Author: chenju
 * @Date: 2021-05-26 13:28:47
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 13:54:46
-->
<template>
  <div>
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/foreground/about">关于</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ForegroundLayout',
  components: {},
  data() {
    return {};
  },
  methods: {}
});
</script>
<style></style>
