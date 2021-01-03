<template>
  <div class="weather-container">
    <div class="date">
      {{ todaysDate() }}
    </div>
    <div class="weather">
      <p>{{ query.data.data.weather[0].main}}</p>
      <p>{{ query.data.data.main.temp }}℃</p>
      <p>風速{{ query.data.data.wind.speed }}m</p>
      <p>{{ query.data.data.name }}</p>
    </div>
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
    axios
      .get('/api/v1/weather')
      .then(response => (this.query = response));
  },
  methods:{
    todaysDate() {
      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
