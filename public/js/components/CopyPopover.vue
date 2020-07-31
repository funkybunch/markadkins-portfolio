<template>
    <div class="copy-popover" v-scrollvisible :class="{'override':hoverOverride}">
        <button v-html="content"
            v-clipboard="copyValue"
            v-clipboard:success="clipboardSuccessHandler"
            v-clipboard:error="clipboardErrorHandler"
            v-on:keyup.enter.prevent="showPopover"
            v-on:keyup.space="showPopover"
            role="button"
            :aria-label="'Press the space or enter key to copy ' + copyValue + ' to clipboard.'"
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
                this.$data.hoverLabel = "</span><i class='fal fa-check-circle success'></i>&nbsp;Copied";
                this.$announcer.polite('Copied to clipboard');
                this.showPopover();
                setTimeout(this.resetCopyLabel, 7000);
            },
            clipboardErrorHandler ({ value, event }) {
                this.$data.hoverLabel = "<i class='fal fa-times-circle error'></i>&nbsp;Failed to copy";
                this.$announcer.polite('Failed to copy to clipboard');
                this.showPopover();
                setTimeout(this.resetCopyLabel, 7000);
            },
            showPopover() {
                let self = this;
                self.$data.hoverOverride = true;
                setTimeout(function() {
                  self.$data.hoverOverride = false;
                }, 5000);
            },
            resetCopyLabel() {
              this.$data.hoverLabel = "Click to copy to clipboard";
              this.$data.roleType = "";
            }
        }
    }
</script>