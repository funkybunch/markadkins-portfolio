<template>
    <div class="app-container">
        <Hero v-bind:content="content.hero" />
        <div class="main-container">
            <div class="row">
                <div class="col w-6">
                    <div id="card-container"></div>
                </div>
                <div class="col w-6">
                    <h2 class="bold">My Role</h2>
                    <div v-html="content.main.role"></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Vue from 'vue'
    import Hero from '../components/Hero.vue'
    import Footer from '../components/Footer.vue'
    import CalloutCard from '../components/CalloutCard.vue'
    import axios from 'axios'
    const CalloutCore = Vue.extend(CalloutCard)

    export default {
        name: 'ExperienceTemplate',
        props: ['content'],
        components: {
            Hero,
            Footer,
            CalloutCard
        },
        data() {
            return {
                callout: this.$props.content.callout
            }
        },
        methods: {
            updateCardData(obj) {
                this.callout.items = obj;
            },
            updateCardItems(){
                const card = new CalloutCore({
                    propsData: {
                        content: this.callout
                    }
                });
                card.$mount('#card-container');
            }
        },
        mounted() {
            let self = this;
            this.callout.cdn = this.$root.$data.cdn;
            if(Object.keys(this.callout.items).length === 0) {
                axios
                    .get('https://markadkins-portfolio-api-ysslq.ondigitalocean.app/v1/jobs/')
                    .then(function(response) {
                        if(self.$router.currentRoute.name === "Home"){
                            self.updateCardData(response.data);
                            self.updateCardItems();
                        } else if(self.$router.currentRoute.name === "Experience - Bellese"){
                            self.updateCardData(response.data);
                            self.updateCardItems();
                        } else {
                            console.log("Callout data for route not found.");
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            } else {
                // Callout object should include .items object for all other pages
                self.updateCardItems();
            }
        }
    }
</script>