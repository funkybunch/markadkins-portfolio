<template>
  <ExperienceTemplate v-bind:content="bellese"/>
</template>

<script>
  import ExperienceTemplate from './templates/Experience.vue'

  export default {
    name: 'App',
    data () {
      return {
        bellese: {
          hero: {
            theme: "light",
            class: "bellese",
            brand: "/images/brands/bellese.svg",
            heroContent: "Bellese is a user-driven service design company in Baltimore that partners with civic services clients in the public and private sectors.",
            heroContentSubline: "2018 - Present"
          },
          callout: this.$root.$data.cardContent
        }
      }
    },
    components: {
      ExperienceTemplate
    }
  }
</script>