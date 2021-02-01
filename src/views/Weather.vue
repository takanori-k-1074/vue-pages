<template>
  <div class="weather-container">
    <p>外部apiの実装ページです。バックエンドはrailsを使用</p>
    <p>東京の天気</p>
    <v-card
    elevation="10"
    outlined
    shaped
    >    
      <div class="date">
        {{ todaysDate() }}
      </div>
      <div class="weather">
        <p>{{ query.data.data.weather[0].main }}</p>
        <p>{{ query.data.data.main.temp }}℃</p>
        <p>風速{{ query.data.data.wind.speed }}m</p>
        <p>{{ query.data.data.name }}</p>
      </div>
    </v-card>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      query: null,
      weather: {},
    };
  },
  mounted() {
    axios.get(process.env.VUE_APP_API_URL).then(response => (this.query = response));
  },
  methods: {
    todaysDate() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let d = new Date();
      let month = months[d.getMonth()];
      let day = days[d.getDay()];
      let date = d.getDate();
      let year = d.getFullYear();
      return `${month} ${date} ${day} ${year}`;
    },
  },
};
</script>
