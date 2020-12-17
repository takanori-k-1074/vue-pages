<template>
  <div id="search-ip">
    <div>
      <div>
        <p>https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=262060&count=1&format=json</p>
        <!-- <input @click="getIp" type="button" value="IPを取得"> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'BitcoinAPI',

//API格納用のプロパティ
  data: function(){
    return{
      data:{
        appnews: null
      }
    }
  },

//axiosによるデータ取得処理
  mounted: function(){
    axios.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json')
    .then(function(response){
        //デバッグ用にconsoleに出力
        console.log(response.data.appnews)
        this.appnews = response.data.appnews
    }.bind(this))
    .catch(function(error){
        console.log(error)
    })
}
}  
</script>
