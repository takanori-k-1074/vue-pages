import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // musics: []
  },
  // mutations: {
  //   fetchMusics() {
  //     axios.get(process.env.VUE_APP_API_URL_INDEX).then(
  //       res => {
  //         for (var i = 0; i < res.data.musics.length; i++) {
  //           this.musics.push(res.data.musics[i]);
  //         }
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   },
  // },
  actions: {},
  modules: {},
});
