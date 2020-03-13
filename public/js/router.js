/**
 Copyright (c) 2020 Mark Adkins
 All Rights Reserved
 */

// Router Core
import Vue from "vue"
import Router from 'vue-router'
const cdn = "https://cdn.markadkins.design"
const titlePrefix = "Mark Adkins // "
Vue.use(Router)

// Components & Data
import ExperienceTemplate from './templates/Experience.vue'
const ErrorTemplate = { template: '<h1>Error</h1>' }


// Router Configuration
const routes = [
    {
        path: '/',
        name: 'Home',
        component: ExperienceTemplate,
        meta: {
            title: titlePrefix + 'Home',
        },
        props: {
            content: {
                hero: {
                    theme: "light",
                    class: "bellese",
                    brand: cdn + "/images/brands/bellese.svg",
                    heroContent: "Bellese is a user-driven service design company in Baltimore that partners with civic services clients in the public and private sectors.",
                    heroContentSubline: "2018 - Present"
                },
                callout: {
                    title: "Work With Me",
                    type: "Postings",
                    items: {},
                    modalAction: {
                        label: "Apply on Bellese Site",
                        callback: function() {
                            window.open("https://bellese.io/careers", "_blank");
                        }
                    }
                }
            }
        }
    },
    {
        path: '/error',
        name: 'Error',
        alias: '*',
        component: ErrorTemplate }
]

export const router = new Router({
    mode: 'history',
    routes
})

export const data = {
    cdn,
    titlePrefix
}