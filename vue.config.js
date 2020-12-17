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
      "partner.steam-api.com": {
        target: "http://localhost:8080",
      }
    }
  }
};