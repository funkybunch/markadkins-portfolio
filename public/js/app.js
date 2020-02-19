import Vue from 'vue'
import App from './App.vue'
import cardContentJSON from './data.json'
require("./analytics");

new Vue({
    el: '#app',
    data: {
        cardContent: {
            title: "Card Title",
            items: [
                {
                    icon: "design",
                    color: "#5d1abb",
                    title: cardContentJSON.jobs[0].position,
                    action: "View Description",
                    category: "Design",
                    modal: {

                    }
                }
            ]
        }
    },
    methods: {},
    render: h => h(App)
});

