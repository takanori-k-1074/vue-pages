<template>
  <div class="container">
    <h1 class="title">music~</h1>
    <div class="">
      <div class="col s4 m6">
        <div class="card btn">
          <span class="card-title">
            music-title
          </span>
        </div>
      </div>
    </div>
    <div class="row" >
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">
             a
            </span>
            <div class="detail">
             b
            </div>
            <div class="detail">
             c
            </div>
            <div class="detail">
              d
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
        axios.get(`api/v1/musics/${id}.json`).then(res => {
          this.musicInfo = res.data;
          this.musicInfoBool = true;
        });
      }
    }
  }
</script>