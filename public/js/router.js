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
import Content from '../data/content.json'
import ExperienceTemplate from './templates/Experience.vue'
const ErrorTemplate = { template: '<h1>Error</h1>' }

function setBelleseContent() {
    let output = {};
    output = Content.experience.bellese;
    output.hero.brand = cdn + Content.experience.bellese.hero.brand;
    output.callout.modalAction.callback = function() {
        window.open("https://bellese.io/careers/#apply", "_blank");
    }
    return output;
}

function setAccentureContent() {
    let output = {};
    output = Content.experience.accenture;
    output.hero.brand = cdn + Content.experience.accenture.hero.brand;
    return output;
}

function setDigikompContent() {
    let output = {};
    output = Content.experience.digikomp;
    output.hero.brand = cdn + Content.experience.digikomp.hero.brand;
    return output;
}

// function setTADContent() {
//     let output = {};
//     output = Content.experience.tad;
//     output.hero.brand = cdn + Content.experience.tad.hero.brand;
//     return output;
// }

let Experience = {};
Experience.Bellese = setBelleseContent();
Experience.Accenture = setAccentureContent();
Experience.DigiKomp = setDigikompContent();
// Experience.TAD = setTADContent();

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
            content: Experience.Bellese
        }
    },
    {
        path: '/experience/bellese',
        name: 'Experience - Bellese',
        component: ExperienceTemplate,
        meta: {
            title: titlePrefix + 'Experience - Bellese',
        },
        props: {
            content: Experience.Bellese
        }
    },
    {
        path: '/experience/accenture',
        name: 'Experience - Accenture',
        component: ExperienceTemplate,
        meta: {
            title: titlePrefix + 'Experience - Accenture',
        },
        props: {
            content: Experience.Accenture
        }
    },
    {
        path: '/experience/digikomp',
        name: 'Experience - DigiKomp',
        component: ExperienceTemplate,
        meta: {
            title: titlePrefix + 'Experience - DigiKomp',
        },
        props: {
            content: Experience.DigiKomp
        }
    },
    // {
    //     path: '/experience/tad',
    //     name: 'Experience - TAD',
    //     component: ExperienceTemplate,
    //     meta: {
    //         title: titlePrefix + 'Experience - TAD',
    //     },
    //     props: {
    //         content: Experience.TAD
    //     }
    // },
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