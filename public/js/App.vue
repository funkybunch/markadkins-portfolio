<template>
  <div class="app-container">
    <div class="main-container">
      <div class="row">
        <div class="col w-12">
          <h1>Hello World!</h1>
        </div>
      </div>
      <div class="row">
        <div class="col w-6">
          <CalloutCard v-bind:content="this.cardContent" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  import CalloutCard from './components/CalloutCard.vue'

  export default {
    name: 'App',
    data () {
      return {
        cardContent: this.$root.$data.cardContent
      }
    },
    components: {
      Footer,
      CalloutCard
    }
  }
</script>