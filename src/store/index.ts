/*
 * @Description: vuex
 * @Author: chenju
 * @Date: 2021-05-25 10:45:28
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 17:38:46
 */
import { createStore, createLogger } from 'vuex';
export interface AppStore {
  count: number;
}

export default createStore({
  state(): AppStore {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state: AppStore) {
      state.count++;
    }
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
});
