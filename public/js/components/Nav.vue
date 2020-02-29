<template>
    <nav class="header-container">
        <div class="row">
            <div class="col w-12">
                <img class="site-logo" alt="Mark Adkins Portfolio Logo" v-bind:src="this.$root.$data.cdn + '/images/ma_portfolio_logo_' + theme + '.svg'"/>
                <div v-bind:class="'nav-container ' + theme">
<!--                    <img class="nav-icon" v-bind:src="'/images/icons/nav_' + theme + '.svg'"/>-->
                    <span>Senior Product Designer</span>
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