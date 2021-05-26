<!--
 * @Description: 
 * @Author: chenju
 * @Date: 2021-05-26 12:16:53
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 17:39:11
-->
<template>
  <div>
    <span> 这个是测试主页文件 </span>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <a-button type="primary">测试</a-button>
    <button @click="handleAdd">vuex count:{{ count }}</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    handleAdd() {
      this.$store.commit('increment');
    }
  }
});
</script>
<style lang="less"></style>
