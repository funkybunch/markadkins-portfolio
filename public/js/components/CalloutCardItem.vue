<template>
    <div v-bind:class="'callout-card-item ' + content.category ">
        <figure class="icon-container">
            <img src="/images/icons/icon-design.svg"/>
        </figure>
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