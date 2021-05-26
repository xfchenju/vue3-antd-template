<!--
 * @Description: 关于
 * @Author: chenju
 * @Date: 2021-05-26 13:51:36
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 13:53:30
-->
<template>
  <div>
    <p>this is about page. </p>
    <button @click="handleGoBack">返回</button>
    <button @click="handleGoHome">回到首页</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'About',
  components: {},
  data() {
    return {};
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
    handleGoHome() {
      this.$router.push('/');
    }
  }
});
</script>
<style></style>
