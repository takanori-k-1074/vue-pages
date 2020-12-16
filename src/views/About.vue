<template>
  <div id="search-ip">
    <div>
      <div>
        <p>https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=262060&count=1&format=json</p>
        <input @click="getIp" type="button" value="IPを取得">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SearchIp',
    methods: {
      getIp() {
        this.axios.get('https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=255710&format=json')
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }
</script>
