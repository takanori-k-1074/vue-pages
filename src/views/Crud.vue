<template>
  <div class="container">
    <h1 class="title">music~</h1>
    <div class="">
      <div class="col s4 m6" v-for="music in musics" :key="music.id">
        <div class="card btn">
          <span class="card-title" v-on:click="setMusicInfo(music.id)">
            {{ music.title }}
          </span>
        </div>
      </div>
    </div>
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
        axios.get('/api/v1/music').then((res) => {
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