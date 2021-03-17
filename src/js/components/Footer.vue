<template>
    <footer class="main-container">
        <div class="row">
            <div class="col w-6">
                <img class="footer-logo" alt="Mark Adkins Portfolio Logo" v-bind:src="this.$root.$data.cdn + '/images/ma_portfolio_logo_footer.svg'"/>
                <div class="social-icons">
                    <a href="https://twitter.com/markadkn" target="_blank" rel="noreferrer"><img alt="Mark Adkins on Twitter" v-bind:src="this.$root.$data.cdn + '/images/Twitter.svg'"/></a>
                    <a href="https://instagram.com/markadkins" target="_blank" rel="noreferrer"><img alt="Mark Adkins on Instagram" v-bind:src="this.$root.$data.cdn + '/images/Instagram.svg'"/></a>
                    <a href="https://medium.com/@markadkins" target="_blank" rel="noreferrer"><img alt="Mark Adkins on Medium" v-bind:src="this.$root.$data.cdn + '/images/Medium.svg'"/></a>
                    <a href="https://linkedin.com/in/markadkn" target="_blank" rel="noreferrer"><img alt="Mark Adkins on LinkedIn" v-bind:src="this.$root.$data.cdn + '/images/LinkedIn.svg'"/></a>
                    <a href="https://github.com/funkybunch" target="_blank" rel="noreferrer"><img alt="Mark Adkins on Github" v-bind:src="this.$root.$data.cdn + '/images/Github.svg'"/></a>
                </div>
                <div class="contact">
                    <p>
                        <span>202</span>
                        <span>999</span>
                        <span>3882</span>
                    </p>
                    <copy-popover v-bind:content="copyPopoverContent" v-bind:copy-value="copyClipboardValue"/>
                </div>
            </div>
            <div class="col w-6">
                <div class="row footer-aside">
                    <a href="https://services.acm.org/public/vcard/vcard.cfm?handle=markadkins" target="_blank" rel="noreferrer">
                        <div class="col sigchi">
                            <img alt="ACM Special Interest Group for Computer-Human Interaction (SIGCHI) Member" v-bind:src="this.$root.$data.cdn + '/images/sigchi-inverted.svg'"/>
                        </div>
                    </a>
                    <a href="https://www.nngroup.com/ux-certification/verify/" target="_blank" rel="noreferrer">
                        <div class="col nng">
                            <img alt="Nielsen Norman Group UX Certified" v-bind:src="this.$root.$data.cdn + '/images/nng-uxc-inverted.svg'"/>
                        </div>
                    </a>
                    <a href="https://uxpa.org/" target="_blank" rel="noreferrer">
                        <div class="col uxpa">
                            <img alt="UX Professional Association (UXPA) International Member" v-bind:src="this.$root.$data.cdn + '/images/portfolio-PA_Member_Logo.svg'"/>
                        </div>
                    </a>
                </div>
                <div class="row copyright">
                    <div class="col w-12">
                        <p>&copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;Mark&nbsp;Adkins All&nbsp;Rights&nbsp;Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import CopyPopover from './CopyPopover.vue'
    export default {
        name: 'Footer',
        data() {
            return {
                copyPopoverContent: 'hello<i class="fal fa-at"></i>bymark.co',
                copyClipboardValue: 'hello@bymark.co'
            }
        },
        components: {
            CopyPopover
        }
    }
</script>
