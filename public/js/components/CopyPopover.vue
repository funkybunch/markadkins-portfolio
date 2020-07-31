<template>
    <div class="copy-popover" v-scrollvisible :class="{'override':hoverOverride}">
        <button v-html="content"
            v-clipboard="copyValue"
            v-clipboard:success="clipboardSuccessHandler"
            v-clipboard:error="clipboardErrorHandler"
            v-on:keyup.enter.prevent="showPopover"
            v-on:keyup.space.prevent="showPopover"
            role="button"
            :aria-label="'Copy ' + copyValue + ' to clipboard.'"
            tabindex="0"
            aria-pressed="false" aria-describedby="footer-copy-status"></button>
        <span v-html="hoverLabel" id="footer-copy-status"></span>
    </div>
</template>

<script>
    export default {
        name: 'CopyPopover',
        props: ['content', 'copyValue'],
        data() {
            return {
                hoverLabel: "Click to copy to clipboard",
                hoverOverride: false
            }
        },
        methods: {
            clipboardSuccessHandler ({ value, event }) {
                this.$data.hoverLabel = "<i class='fal fa-check-circle success' role='alert'></i>&nbsp;Copied"
                this.showPopover();
                setTimeout(this.resetCopyLabel, 7000);
            },
            clipboardErrorHandler ({ value, event }) {
                this.$data.hoverLabel = "<i class='fal fa-times-circle error' role='alert'></i>&nbsp;Failed to copy"
                this.showPopover();
                setTimeout(this.resetCopyLabel, 7000);
            },
            showPopover() {
                let self = this;
                self.$data.hoverOverride = true;
                console.log("should show popover");
                setTimeout(function() {
                  self.$data.hoverOverride = false;
                  console.log("should hide popover");
                }, 5000);
            },
            resetCopyLabel() {
              this.$data.hoverLabel = "Click to copy to clipboard"
            }
        }
    }
</script>