/*
 * @Description:
 * @Author: chenju
 * @Date: 2021-05-26 09:58:50
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 17:49:19
 */
import { createApp } from 'vue';
import App from './App.vue';
// normalize.css
import 'normalize.css/normalize.css';
// vue-router
import router from '@/router';
// vuex
import store from '@/store';
// ant-desgin-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.min.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);
app.mount('#app');
