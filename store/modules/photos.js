import Vue from "vue";
import Vuex from "vuex";
import photos from '../../api/photos'

Vue.use(Vuex);

const state = () => ({
  list: [],
  searchArray: []
});

const getters = {

  photos: state => {
    return state.list;
  },

};

const actions = {
  async getPhotos ({commit}, params = {}) {
    let {
      data
    } = await photos.getPhotos(params);
    commit("setPhotos", data);
  },

  async getSearchPhotos ({commit}, params = {}) {
    let {
      data
    } = await photos.getSearchPhotos(params);
    commit("setSearchPhotos", data);
  },
};

const mutations = {

  setPhotos (state, photos) {
    state.list = photos
  },

  setSearchPhotos (state, data) {
    state.searchArray = [...data.results]
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
