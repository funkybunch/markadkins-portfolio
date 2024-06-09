<template>
    <nav class="header-container">
        <div class="row">
            <div class="col w-12">
                <a href="/" class="site-logo"><img alt="Mark Adkins Portfolio Logo" width="109" height="32" v-bind:src="this.cdn + '/images/ma_portfolio_logo_' + theme + '.svg'"/></a>
                <div v-bind:class="'nav-container ' + theme">
<!--                    <img class="nav-icon" v-bind:src="'/images/icons/nav_' + theme + '.svg'"/>-->
<!--                    <span><router-link :to="{ name: 'Home'}">Experience</router-link></span>-->
                    <span>Senior Human-Centered Designer</span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',
        props: ['theme']
    }
</script>
