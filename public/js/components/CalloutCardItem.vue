<template>
    <div class="callout-card-item">
        <h3 v-html="content.position"></h3>
        <p>{{ content.action }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CalloutCardItem',
        props: ['content']
    }
</script>