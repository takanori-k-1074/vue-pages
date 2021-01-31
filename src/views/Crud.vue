<template>

  <div class="container">
    <h1 class="music-title">~アルバムtitle一覧~</h1>
    <v-container class="grey lighten-5 music-container">
      <v-row no-gutters >
        <div v-for="music in musics" :key="music.id" class="cont">
          <v-card class="pa-2 musiccard" outlined tile>
            <span class="card-title" v-on:click="setMusicInfo(music.id)">
              {{ music.title }}
            </span>
          </v-card>
        </div>
      </v-row>
    </v-container>
    <div class="row" v-show="musicInfoBool">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">
             【{{ musicInfo.title }}】
            </span>
            <div class="detail">
             ・著者:{{ musicInfo.artist }}
            </div>
            <div class="detail">
             ・ジャンル：{{ musicInfo.genre }}
            </div>
            <router-link :to="{ path: `/edit/${musicInfo.id}` }" class="btn">アルバムの編集</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'MusicHome',
    data: function() {
      return {
        musicInfo: {},
        musicInfoBool: false,
        musics: [],
      }
    },
    mounted: function() {
      this.fetchMusics();
    },
    methods: {
      fetchMusics() {
        axios.get(process.env.VUE_APP_API_URL_INDEX).then((res) => {
          for(var i = 0; i < res.data.musics.length; i++) {
            this.musics.push(res.data.musics[i]);
          }
        }, (error) => {
          console.log(error);
        });
      },
      setMusicInfo(id){
        axios.get(`api/v1/music/${id}.json`).then(res => {
          this.musicInfo = res.data;
          this.musicInfoBool = true;
        });
      }
    }
  }
</script>