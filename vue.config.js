module.exports = {
  devServer: {
    proxy: "http://localhost:3000",

  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/prepends.scss";'
       }
    },
  }
};

