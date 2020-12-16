module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/prepends.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=262060&count=1&format=json": {
        target: "http://localhost:8080",
      }
    }
  }
};