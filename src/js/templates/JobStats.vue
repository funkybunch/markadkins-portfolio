<template>
    <div class="app-container">
        <Hero />
        <div class="main-container">
            <div class="row">
                <div class="col w-12">
                    <div id="card-container">
                      <GChart
                          :settings="{ packages: ['sankey'] }"
                          type="Sankey"
                          :data="stats"
                          :options="chartOptions"
                      />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueGoogleCharts from 'vue-google-charts'
    import Hero from '../components/Hero.vue'
    import Footer from '../components/Footer.vue'

    Vue.use(VueGoogleCharts)

    export default {
        name: 'JobStats',
        components: {
            Hero,
            Footer
        },
        data() {
            return {
                stats: [
                    ['From', 'To', 'Total'],
                    ['Referral', 'Submitted Application', 1],
                    ['Direct Application', 'Submitted Application', 8],
                    ['Direct Application', 'Working on Application', 15],
                    ['Submitted Application', 'No Response', 7],
                    ['Submitted Application', 'Rejected', 2],
                    ['Submitted Application', 'Interview', 1],
                    ['Recruiter Cold Call', 'Submitted Application', 1],
                    ['Recruiter Cold Call', 'I responded, no response back', 4],
                    ['Recruiter Cold Call', 'I never responded', 2],
                    ['Recruiter Cold Call', 'I declined after screening', 31],
                ],
                chartOptions: {
                    chart: {
                        title: 'Job Application Stats',
                    },
                    height: 600,
                    sankey: { node: { nodePadding: 40 } },
                    tooltip: {isHtml: true}
                }
            }
        }
    }
</script>