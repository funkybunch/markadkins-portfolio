<template>
    <div class="app-container">
        <Hero :content="content.attributes.hero" />
        <div class="main-container">
            <div class="row">
                <div class="col w-6">
                    <div id="card-container"></div>
                </div>
                <div class="col w-6">
                    <h2 class="bold">My Role</h2>
                    <div v-html="$options.filters.markdown(content.attributes.role.body)"></div>
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
                    .get('https://api.madkins.dev/v2/jobs/')
                    .then(function(response) {
                        let title = (self.content.calloutCurrent) ? 'Work With Me' : 'Work At ' + self.content.attributes.hero.title;
                        let subtitle = (!self.content.calloutCurrent) ? "I don't work here anymore, but I loved my time at " + self.content.attributes.hero.title + ".  Great people and a great place to work.  Let me know if you'd like me to connect you." : '';
                        self.updateCardData({
                          type: "Postings",
                          items: response.data[self.content.callout[0].applicant_tracking_system.company_slug],
                          title: title,
                          subtitle: subtitle,
                          cdn: self.content.cdn,
                          modalAction: self.content.modalAction
                        });
                        self.updateCardItems();
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            } else {
                this.updateCardData({
                  items: self.content.callout[0].callout_list_item,
                  title: self.content.callout[0].title
                });
                self.updateCardItems();
            }
        }
    }
</script>