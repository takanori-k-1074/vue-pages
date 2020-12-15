<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
})
</script>
