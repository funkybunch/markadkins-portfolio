<template>
    <div class="app-container">
        <Nav v-bind:theme="'dark'"/>
        <div class="main-container">
            <div class="row" style="padding-top:0;">
                <div class="col w-12" style="margin-bottom:96px;">
                    <h1 style="margin-top:0;">2023 Job Search Stats</h1>
                    <h4>At a glance:</h4>
                    <ul>
                        <li>92 Job applications</li>
                        <li>21% Chance of speaking with an organization</li>
                        <li>36 Total interviews & recruiter calls</li>
                        <li>3 Offers</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col w-6">
                    <div class="chart-container" style="min-height: 600px;margin-top:-75px;">
                        <GChart
                            :settings="{ packages: ['sankey'] }"
                            type="Sankey"
                            :data="stage_one"
                            :options="chartOptions"
                        />
                    </div>
                </div>
                <div class="col w-6">
                    <div class="chart-container" style="min-height: 600px;margin-top:30px;">
                      <GChart
                          :settings="{ packages: ['sankey'] }"
                          type="Sankey"
                          :data="stage_two"
                          :options="chartOptions"
                      />
                    </div>
                </div>
            </div>
          <div class="row">
            <div class="col w-12">
              <div class="chart-container" style="min-height: 600px;margin-top:-125px;">
                <GChart
                    :settings="{ packages: ['sankey'] }"
                    type="Sankey"
                    :data="stage_three"
                    :options="chartOptions"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col w-12">
              <div class="chart-container" style="min-height: 600px;margin-top:0px;">
                <GChart
                    :settings="{ packages: ['sankey'] }"
                    type="Sankey"
                    :data="stage_four"
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
    import Hero from '../components/Hero.vue'
    import Footer from '../components/Footer.vue'
    import Nav from '../components/Nav.vue'

    export default {
        name: 'JobStats',
        components: {
            Hero,
            Footer,
            Nav
        },
        data() {
            return {
                stage_one: [
                    ['From', 'To', 'Total'],
                    ['Referral', 'Rejected', 2],
                    ['Referral', 'Recruiter Call', 5],
                    ['Referral', 'Interview', 0],
                    ['Referral', 'Withdrew', 0],
                    ['Referral', 'No Response', 6],
                    ['Contacted By Recruiter', 'Rejected', 2],
                    ['Contacted By Recruiter', 'Recruiter Call', 4],
                    ['Contacted By Recruiter', 'Interview', 0],
                    ['Contacted By Recruiter', 'Withdrew', 0],
                    ['Contacted By Recruiter', 'No Response', 2],
                    ['Direct Application', 'Rejected', 25],
                    ['Direct Application', 'Recruiter Call', 6],
                    ['Direct Application', 'Interview', 1],
                    ['Direct Application', 'Withdrew', 0],
                    ['Direct Application', 'No Response', 39]
                ],
                stage_two: [
                    ['From', 'To', 'Total'],
                    ['Recruiter Call', 'Interview', 7],
                    ['Recruiter Call', 'Rejected', 2],
                    ['Recruiter Call', 'Withdrew', 5],
                    ['Recruiter Call', 'Ghosted', 1]
                ],
                stage_three: [
                  ['From', 'To', 'Total'],
                  ['Interview', 'Rejected', 1],
                  ['Interview', 'Withdrew', 1],
                  ['Interview', 'Entered Hiring Freeze', 2],
                  ['Interview', 'Final Interview', 4],
                  ['Interview', 'Ghosted', 0]
                ],
                stage_four: [
                  ['From', 'To', 'Total'],
                  ['Final Interview', 'Rejected', 0],
                  ['Final Interview', 'Withdrew', 0],
                  ['Final Interview', 'Interview Complete', 4],
                  ['Offer', 'Accepted', 0],
                  ['Offer', 'Considering Offer', 1],
                  ['Offer', 'Declined', 1],
                  ['Interview Complete', 'Offer', 2],
                  ['Interview Complete', 'Pending Decision', 1],
                  ['Interview Complete', 'Ghosted', 1]
                ],
                chartOptions: {
                    chart: {
                        title: 'Job Application Stats',
                    },
                    height: 500,
                    sankey: {
                      iterations: 256,
                      node: {
                        nodePadding: 20,
                        interactivity: true,
                        labelPadding: 6,
                        width: 5,
                      },
                      link: {
                        colorMode: 'target'
                      }
                    },
                    tooltip: {isHtml: true}
                }
            }
        }
    }
</script>