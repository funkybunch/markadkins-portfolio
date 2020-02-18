<template>
    <aside class="callout-card">
        <h2>{{ content.title }}</h2>
    </aside>
</template>

<script>
    export default {
        name: 'CalloutCard',
        props: ['content']
    }
</script>