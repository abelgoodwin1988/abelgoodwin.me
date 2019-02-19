<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue';
import Nav from './shared/Navigation.vue';

export default Vue.extend({
  components: {
    Home,
    Nav,
  },
});

</script>


<style lang="scss">
  @import '@/styles/base.scss';

  #app {
    margin: 12vmin 0 0 0 ;
  }
</style>
