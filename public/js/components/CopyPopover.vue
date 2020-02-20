<template>
    <div class="copy-popover" v-scrollvisible>
        <p v-html="content"
           v-clipboard="copyValue"
           v-clipboard:success="clipboardSuccessHandler"
           v-clipboard:error="clipboardErrorHandler"
           role="button"
           aria-pressed="false" aria-describedby="footer-copy-status"></p>
        <span v-html="hoverLabel" id="footer-copy-status"></span>
    </div>
</template>

<script>
    export default {
        name: 'CopyPopover',
        props: ['content', 'copyValue'],
        data() {
            return {
                hoverLabel: "Click&nbsp;to&nbsp;copy&nbsp;to&nbsp;clipboard"
            }
        },
        methods: {
            clipboardSuccessHandler ({ value, event }) {
                this.$data.hoverLabel = "<i class='fal fa-check-circle success'></i>&nbsp;Copied"
                setTimeout(this.resetCopyLabel, 5000);
            },
            clipboardErrorHandler ({ value, event }) {
                this.$data.hoverLabel = "<i class='fal fa-times-circle error'></i>&nbsp;Failed to copy"
                setTimeout(this.resetCopyLabel, 5000);
            },
            resetCopyLabel() {
                this.$data.hoverLabel = "Click&nbsp;to&nbsp;copy&nbsp;to&nbsp;clipboard"
            }
        }
    }
</script>