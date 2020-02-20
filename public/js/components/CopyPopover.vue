<template>
    <div class="copy-popover">
        <p v-html="content"></p>
        <span>Click&nbsp;to&nbsp;copy&nbsp;to&nbsp;clipboard</span>
    </div>
</template>

<script>
    export default {
        name: 'CopyPopover',
        props: ['content']
    }
</script>