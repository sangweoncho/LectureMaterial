import { createStore } from 'vuex';

import counterStore from './modules/counterStore';

export default createStore({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  // modules: {},
  modules: {
    // "모듈명: store명", 형태로 저장됩니다. 모듈명 === store명
    counterStore: counterStore,
  },
});
