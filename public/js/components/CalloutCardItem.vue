<template>
    <div v-bind:class="'callout-card-item ' + content.category ">
        <figure class="icon-container">
            <img v-bind:alt="content.category + ' icon'" v-bind:src="cdn + content.icon"/>
        </figure>
        <div class="item-content">
            <h3 v-html="content.title"></h3>
            <a v-if="content.action" v-on:click.prevent="emitAction">{{ content.action }}</a>
            <p v-if="content.subtitle">{{ content.subtitle }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CalloutCardItem',
        props: ['content', 'actionTrigger', 'cdn'],
        methods: {
            emitAction() {
                this.$emit('update:actionTrigger', { triggered: true, item: this.$props.content });
            },
        }
    }
</script>