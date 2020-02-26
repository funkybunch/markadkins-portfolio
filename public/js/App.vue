<template>
  <ExperienceTemplate v-bind:content="bellese"/>
</template>

<script>
  import ExperienceTemplate from './templates/Experience.vue'
  import cardContentJSON from './data.json'

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
          callout: {
            title: "Work With Me",
            type: "Postings",
            items: cardContentJSON.jobs,
            modalAction: {
              label: "Apply on Bellese Site",
              callback: function() {
                window.open("https://bellese.io/careers", "_blank");
              }
            }
          }
        }
      }
    },
    components: {
      ExperienceTemplate
    }
  }
</script>