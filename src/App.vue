<!--
 * @Description: App
 * @Author: chenju
 * @Date: 2021-05-26 09:58:49
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 17:33:18
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App'
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
