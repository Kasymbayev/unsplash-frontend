import Vue from 'vue'
import Vuex from 'vuex'
import photos from '../store/modules/photos'
Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      photos
    }
  });

export default store
