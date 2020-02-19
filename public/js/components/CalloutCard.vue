<template>
    <aside class="callout-card">
        <h2>{{ content.title }}</h2>
        <h3 v-html="content.items[0].title"></h3>
    </aside>
</template>

<script>
    // import CalloutCardItem from './components/CalloutCardItem.vue'

    export default {
        name: 'CalloutCard',
        props: ['content'],
        // components: {
        //     CalloutCardItem
        // }
    }
</script>