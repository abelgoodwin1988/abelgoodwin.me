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
    @include flex(column, flex-start, flex-start);
    flex: 1 1 auto;
    min-height: 93vmin;
  }
</style>
