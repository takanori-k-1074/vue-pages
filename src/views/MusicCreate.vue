<template>
  <div class="container">
    <h1 class="text-center">アルバムの登録</h1>
    <form class="col">
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
            placeholder="Artist"
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
      <div class="buttun-center">
        <buttun class="btn-music" v-on:click="createMusic">登録</buttun>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      music: {
        title: '',
        artist: '',
        genre: '',
      },
    };
  },
  methods: {
    createMusic: function() {
      if (!this.music.title) return;
      axios.post('https://mysteamnews1074.com/api/v1/music', { music: this.music }).then(
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
