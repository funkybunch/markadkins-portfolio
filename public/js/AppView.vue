<template>
  <router-view></router-view>
</template>

<script>

  export default {
    name: 'AppView',
    watch: {
      $route(to, from) {
        document.title = to.meta.title || 'Your Website'
      }
    }
  }
</script>