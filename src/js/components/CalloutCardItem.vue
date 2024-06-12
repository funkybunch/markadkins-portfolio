<template>
    <div v-bind:class="'callout-card-item ' + content.class ">
        <figure class="icon-container">
          <img v-if="content.icon.data"
               :alt="content.class + ' icon'"
               :src="content.icon.data.attributes.url"
               :width="content.icon.data.attributes.width"
               :height="content.icon.data.attributes.height"/>
          <img v-else :alt="content.class + ' icon'"
               :src="cdn + content.icon"
               :width="content.iconWidth"
               :height="content.iconHeight"/>
        </figure>
        <div class="item-content">
            <h3 v-if="content.title" v-html="content.title"></h3>
            <h3 v-if="content.name" class="wrap" v-html="content.name"></h3>
            <a v-if="content.action"
               v-on:click.prevent="emitAction"
               v-on:keyup.enter="emitAction"
               v-on:keyup.space="emitAction"
               tabindex="0"
               role="button" >{{ content.action }}</a>
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
                this.$emit('actionTriggered', { triggered: true, item: this.$props.content });
            },
        }
    }
</script>