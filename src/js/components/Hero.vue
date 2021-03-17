<template>
    <div v-bind:class="'hero ' + ((classes === undefined)? '' : classes) + ' ' + content.class">
        <div class="hero-image"></div>
        <Nav v-bind:theme="content.theme"/>
        <div class="hero-container">
            <div class="row">
                <div class="col w-8 o-1 hero-content">
                    <h1 v-if="content.title" v-bind:class="content.theme">{{ content.title }}</h1>
                    <h1 v-if="content.brand" class="sr-only">{{ content.brand }}</h1>
                    <img v-if="content.brand" v-bind:src="content.brand" alt="Branding" aria-hidden="true"/>
                    <p v-bind:class="content.theme" v-html="content.heroContent"></p>
                    <span v-if="content.heroContentSubline" v-bind:class="content.theme">{{ content.heroContentSubline }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './Nav.vue'

    export default {
        name: 'Hero',
        props: ['content', 'classes'],
        components: {
            Nav
        }
    }
</script>