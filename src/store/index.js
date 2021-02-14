import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musics: []
  },
  // mutations: {
  fetchMusics(state) {
    state.musics = [];
    axios.get(process.env.VUE_APP_API_URL_INDEX).then(
      res => {
        for (var i = 0; i < res.data.musics.length; i++) {
          state.musics.push(res.data.musics[i]);
        }
      },
      error => {
        console.log(error);
      }
    );
  },
  // actions: {},
  // modules: {},
});
