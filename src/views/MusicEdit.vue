<template>
  <div class="container">
    <h1 class="text-center">アルバムの編集</h1>
    <form class="col s12">
      <div class="row">
        <div class="input-field">
          <input
            placeholder="Title"
            type="text"
            class="validate"
            v-model="music.title"
            required="required"
          />
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input
            placeholder="Author"
            type="text"
            class="validate"
            v-model="music.artist"
            required="required"
          />
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input
            placeholder="Genre"
            type="text"
            class="validate"
            v-model="music.genre"
            required="required"
          />
        </div>
      </div>
      <buttun class="btn-music" v-on:click="updateMusic(music.id)">アルバムの情報を更新</buttun>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MusicEdit',
  data: function() {
    return {
      id: this.$route.params.id,
      music: {
        id: '',
        title: '',
        artist: '',
        genre: '',
      },
    };
  },
  mounted: function() {
    this.setmusicEdit(this.id);
  },
  methods: {
    setmusicEdit(id) {
      axios.get(`/api/v1/music/${id}.json`).then(res => {
        this.music.id = res.data.id;
        this.music.title = res.data.title;
        this.music.artist = res.data.artist;
        this.music.genre = res.data.genre;
      });
    },
    updateMusic(id) {
      if (!this.music.title) return;
      axios.put(`/api/v1/music/${id}`, { music: this.music }).then(
        () => {
          this.$router.push({ path: '/crud' });
        },
        error => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style scoped></style>
