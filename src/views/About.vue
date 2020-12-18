<template>
  <div class="weather-container">
    <div class="weather-wrap">
      <p>tokyo等都市の名称を入れてenter</p>
      <div class="search-box">
      <input type="text" placeholder="Search..." class="search-bar" 
          v-model="query" v-on:keypress="fetchWeather" />
      </div>
      <div class="weather-info" v-if="typeof weather.main!='undefined'">
        <div class="location-box">
          <div class="location">{{weather.name}},{{weather.sys.country }}</div>
          <div class="date">{{ todaysDate() }}</div>
        </div>
        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
          <div class="icon">
                <img:src="`${weather_icon}${weather.weather[0].icon}${'@2x.png'}`"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      api_key: "",
      url_base: "https://api.openweathermap.org/data/2.5/",
      weather_icon: "http://openweathermap.org/img/wn/",
      query: "",
      weather: {},
    };
  },
  methods: {
    async fetchWeather(e) {
      if (e.key == "Enter") {
      let response = await axios.get(
      `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
      );
      this.setResults(response.data);
      }
    },
    setResults(returnedResponse) {
    this.weather = returnedResponse;
    },
    todaysDate() {
      const months = [
      "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov",
      "Dec",];
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
