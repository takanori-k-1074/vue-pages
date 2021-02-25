<template>
  <div class="container">
    <p>
      api通信によるCRUD処理の実装ページです。<br />railsのdbから情報を取得しており検索フォームにtitle入力で検索ができます。indexofによる配列検索の結果を出力しています<br />アルバムタイトルをクリックすると細部情報がページ下部に表示され更新と削除ができます
    </p>
    <input class="filter-box" type="text" v-model="keyword" placeholder="検索">
    <div class="music-header">
      <h1 class="music-title">~アルバムtitle一覧~</h1>
      <router-link to="/create" class="btn-music">アルバム登録</router-link>
    </div>
    <v-container class="grey lighten-5 music-container">
      <v-row no-gutters>
        <div v-for="music in getMusics" :key="music.id" class="cont">
          <v-card class="pa-2 musiccard" outlined tile>
            <span class="card-title" v-on:click="setMusicInfo(music.id)">
              {{ music.title }}
            </span>
          </v-card>
        </div>
      </v-row>
    </v-container>
    <div>
      <vuejs-paginate
        :page-count="getPaginateCount"
        :prev-text="'<'"
        :next-text="'>'"
        :click-handler="paginateClickCallback"
        :container-class="'pagination justify-content-center'"
        :page-class="'page-item'"
        :page-link-class="'page-link'"
        :prev-class="'page-item'"
        :prev-link-class="'page-link'"
        :next-class="'page-item'"
        :next-link-class="'page-link'"
        :first-last-button="true"
        :first-button-text="'<<'"
        :last-button-text="'>>'"
      ></vuejs-paginate>
    </div>
    <div class="row" v-show="musicInfoBool">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <span class="card-title"> 【{{ musicInfo.title }}】 </span>
            <div class="detail">・著者:{{ musicInfo.artist }}</div>
            <div class="detail">・ジャンル：{{ musicInfo.genre }}</div>
            <router-link :to="{ path: `/edit/${musicInfo.id}` }" class="btn-music"
              >アルバムの編集</router-link>
            <buttun class="btn-music delete-btn" v-on:click="deleteMusic(musicInfo.id)"
              >削除</buttun>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueJsPaginate from 'vuejs-paginate';

export default {
  name: 'MusicHome',
  components: {
    'vuejs-paginate': VueJsPaginate,
  },
  data: function() {
    return {
      musicInfo: {},
      musicInfoBool: false,
      // musics: [],
      currentPage: 1,
      perPage: 10,
      keyword: '',
    };
  },
  mounted: function() {
    this.$store.commit('fetchMusics')
  },
  computed: {
    getMusics: function() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      // pagenation
      // 検索
      let musics = [];
      for(let i in this.$store.state.musics) {
      let music = this.$store.state.musics[i];
      if( music.title.indexOf(this.keyword) !== -1) {
          musics.push(music);
          }
      }
      // 検索
      // pagenation
      return musics.slice(start, end);
    },
    getPaginateCount: function() {
      return Math.ceil(this.$store.state.musics.length / this.perPage);
    },
  },
  methods: {
    // fetchMusics() {
    //   axios.get(process.env.VUE_APP_API_URL_INDEX).then(
    //     res => {
    //       for (var i = 0; i < res.data.musics.length; i++) {
    //         this.musics.push(res.data.musics[i]);
    //       }
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // },
    setMusicInfo(id) {
      axios.get(`https://rails-api-test11.com//api/v1/music/${id}.json`).then(res => {
        this.musicInfo = res.data;
        this.musicInfoBool = true;
      });
    },
    deleteMusic(id) {
      axios.delete(`https://rails-api-test11.com//api/v1/music/${id}`).then(() => {
        this.musics = [];
        this.musicInfo = '';
        this.musicInfoBool = false;
        this.fetchMusics();
      });
    },
    paginateClickCallback: function(pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
};
</script>
