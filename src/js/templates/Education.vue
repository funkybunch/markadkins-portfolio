<template>
    <div class="app-container">
        <Hero classes="education" :content="content.attributes.hero" />
        <div class="main-container">
            <div class="row reverse-stack">
                <div class="col w-6">
                    <h2 class="bold">{{ content.content_block[0].title }}</h2>
                    <div v-html="$filters.markdown(content.content_block[0].description)"></div>
                </div>
                <div class="col w-6">
                  <CalloutCard v-if="callout" :content="callout"/>
                </div>
            </div>
            <div class="row">
                <div class="col w-12">
                    <h3>{{ content.content_block[0].subtitle }}</h3>
                    <div v-html="$filters.markdown(content.content_block[0].body)"></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import Footer from '../components/Footer.vue'
    import CalloutCard from '../components/CalloutCard.vue'
    import axios from 'axios'

    export default {
        name: 'EducationTemplate',
        props: ['content'],
        components: {
            Hero,
            Footer,
            CalloutCard
        },
        data() {
          return {
            callout: {
              items: this.$props.content.callout[0].callout_list_item,
              title: this.$props.content.callout[0].title
            }
          }
        },
        created() {
          console.log(this.content)
        }
    }
</script>