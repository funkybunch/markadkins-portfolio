<template>
    <footer class="main-container">
        <div class="row">
            <div class="col w-6">
                <img class="footer-logo" src="/images/ma_portfolio_logo_footer.svg"/>
                <div class="social-icons">
                    <img src="/images/Twitter.svg"/>
                    <img src="/images/Instagram.svg"/>
                    <img src="/images/Medium.svg"/>
                    <img src="/images/LinkedIn.svg"/>
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
                    <div class="col w-6 association-logo">
                        <img src="/images/portfolio-PA_Member_Logo.svg"/>
<!--                        <a href="https://services.acm.org/public/vcard/vcard.cfm?handle=markadkins">ACM Verification</a>-->
                    </div>
                    <div class="col w-6 copyright">
                        <p>&copy;&nbsp;{{ new Date().getFullYear() }}&nbsp;Mark&nbsp;Adkins<br/>All&nbsp;Rights&nbsp;Reserved</p>
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
