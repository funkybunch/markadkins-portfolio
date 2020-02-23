<template>
    <div v-bind:class="'callout-card-item ' + content.category ">
        <figure class="icon-container">
            <img v-bind:src="content.icon"/>
        </figure>
        <div class="item-content">
            <h3 v-html="content.position" v-bind:title="content.position"></h3>
            <p v-if="content.action">{{ content.action }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CalloutCardItem',
        props: ['content']
    }
</script>