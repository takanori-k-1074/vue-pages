module.exports = {
  devServer: {
    proxy: 'http://rails-ecs-alb-920434585.ap-northeast-1.elb.amazonaws.com/'
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/prepends.scss";'
       }
    },
  }
};
