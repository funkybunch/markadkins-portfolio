<template>
    <div v-bind:class="'hero ' + content.class">
        <div class="hero-image"></div>
        <Nav v-bind:theme="content.theme"/>
        <div class="hero-container">
            <div class="row">
                <div class="col w-8 o-1 hero-content">
                    <h1 class="sr-only">{{ content.brand }}</h1>
                    <img v-if="content.brand" v-bind:src="content.brand" alt="Experience branding"/>
                    <p v-bind:class="content.theme">{{ content.heroContent }}</p>
                    <span v-if="content.heroContentSubline">{{ content.heroContentSubline }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './Nav.vue'

    export default {
        name: 'Hero',
        props: ['content'],
        components: {
            Nav
        }
    }
</script>