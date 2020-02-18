import Vue from 'vue'
import App from './App.vue'
require("./analytics");

new Vue({
    el: '#app',
    data: {
        cardContent: {
            title: "Card Title"
        }
    },
    methods: {},
    render: h => h(App)
});

