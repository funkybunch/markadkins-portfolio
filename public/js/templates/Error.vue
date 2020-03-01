<template>
    <div class="app-container">
        <Hero v-bind:content="hero" />
        <Footer />
    </div>
</template>

<script>
    import Hero from '../components/Hero.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'ErrorTemplate',
        data() {
            return {
                hero: {
                    theme: "light",
                    class: "error",
                    title: "It Did Something Weird!",
                    heroContent: 'That page doesn&apos;t seem to exist...<br/>You can <a href="/">go back to the home page</a>, or email me and I&apos;ll look into it.  My email address is at the bottom of the page.'
                }
            }
        },
        components: {
            Hero, Footer
        }
    }
</script>