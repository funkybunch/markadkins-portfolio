<template>
  <div class="app-container">
    <div class="main-container">
      <div class="row">
        <div class="col w-12">
          <h1>Hello World!</h1>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Footer
    }
  }
</script>