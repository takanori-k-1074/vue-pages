<template>
  <header>
    <div class="container clear">
      <div class="header-left">
        <h1 class="header-title">Takanori K's Portoforio</h1>
      </div>
      <div class="header-right">
        <ul class="header-nav clear">
          <li class="header-nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="header-nav-item">
            <router-link to="/weather">Weather</router-link>
          </li>
          <li class="header-nav-item">
            <router-link to="/crud">Music</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>
