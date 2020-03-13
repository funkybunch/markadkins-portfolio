<template>
    <div class="app-container">
        <Hero v-bind:content="content.hero" />
        <div class="main-container">
            <div class="row">
                <div class="col w-6" id="card-container"></div>
                <div class="col w-6">
                    <h2 class="bold">My Role</h2>
                    <p>I work at Bellese as a <strong>User Experience Designer</strong> on a team of 9 other amazingly talented <strong>designers</strong> and <strong>researchers</strong>.</p>
                    <p>Together, we work with the U.S. Department of Health and Human Services Center for Medicare and Medicaid Services to improve the <strong>quality of healthcare</strong> for <strong>millions of Americans</strong>.</p>
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
            updateCardItems(obj) {
                this.callout.items = obj;
                const card = new CalloutCore({
                    propsData: {
                        content: this.callout
                    }
                });
                card.$mount('#card-container');
                console.log("Updated Card Items to: ", this.callout)
            }
        },
        created() {
            let self = this;
            axios
                .get('/js/data.json')
                .then(function (response) {
                    self.updateCardItems(response.data.jobs);
                })
                .catch(function (err) {
                    console.log(err);
                });

        }
    }
</script>