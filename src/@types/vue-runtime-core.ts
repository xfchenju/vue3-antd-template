/*
 * @Description:
 * @Author: chenju
 * @Date: 2021-05-26 12:19:19
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 13:44:45
 */
import { Store } from 'vuex';
import { AppStore } from '@/store';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // 为 `this.$store` 提供类型声明
    $store: Store<AppStore>;
  }
}
