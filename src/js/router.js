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
import Content from './content.json'
import ExperienceTemplate from './templates/Experience.vue'
import EducationTemplate from './templates/Education.vue'
import ErrorTemplate from './templates/Error.vue'

const OPTIONS = {
    EXPERIENCE: {
        label: "experience",
        matchOn: "company"
    },
    EDUCATION: {
        label: "education",
        matchOn: "institution"
    }
}

function getContent(type, entity, current = false) {
    let output = {};
    let index;
    for(let i = 0; Content[type.label].length > i; i++) {
        if(Content[type.label][i][type.matchOn].toLowerCase() === entity.replace(/-/g," ").toLowerCase()) {
            index = i;
            break;
        }
    }
    try {
        output = Content[type.label][index];
        output.hero.brand = Content[type.label][index].hero.brand.url;
        output.hero.classes = Content[type.label][index].hero.title.replace(/ /g,"_").toLowerCase();
        output.callout = Content[type.label][index].Callout;
        output.calloutCurrent = current;
        delete output.Callout;
        output.modalAction = {
            callback: function(location) {
                window.open(location, "_blank");
            },
            footer: "Clicking the &quot;Apply&quot; button will open up a new tab with the job application on the " + output.hero.title + " website.",
            label: "Apply"
        };
        output.cdn = cdn;
        return output;
    } catch(e) {
        console.error("Invalid entity name:", entity);
        console.error(e);
    }
}

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
            content: getContent(OPTIONS.EXPERIENCE, "Gecko Robotics", true)
        }
    },
    {
        path: '/experience/:company',
        component: ExperienceTemplate,
        meta: (route) => ({
            title: titlePrefix + 'Experience - ' + route.params.company.replace(/-/g," "),
        }),
        props: (route) => ({
            content: getContent(OPTIONS.EXPERIENCE, route.params.company)
        })
    },
    {
        path: '/education/:institution',
        component: EducationTemplate,
        meta: (route) => ({
            title: titlePrefix + 'Education - ' + route.params.institution.replace(/-/g," "),
        }),
        props: (route) => ({
            content: getContent(OPTIONS.EXPERIENCE, route.params.institution)
        })
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