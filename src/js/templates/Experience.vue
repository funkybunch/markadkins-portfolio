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
                    <div v-html="$options.filters.markdown(content.role.body)"></div>
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
                callout: []
            }
        },
        methods: {
            updateCardData(obj) {
                this.callout = obj;
            },
            updateCardItems() {
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
            if(this.content.callout[0].applicant_tracking_system) {
                axios
                    .get('http://localhost:3001/v1/jobs/')
                    .then(function(response) {
                        self.updateCardData({
                          type: "Postings",
                          items: response.data[self.content.callout[0].applicant_tracking_system.company_slug],
                          title: "Work With Me",
                          cdn: self.content.cdn
                        });
                        self.updateCardItems();
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