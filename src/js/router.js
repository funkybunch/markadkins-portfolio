/**
 Copyright (c) 2020 Mark Adkins
 All Rights Reserved
 */

// Router Core
import Vue from "vue"
import Router from 'vue-router'
const cdn = "https://cdn.markadkins.design"
const titlePrefix = "Mark Adkins // "
const currentCompany = "Fidelity"
Vue.use(Router)

// Components & Data
import Content from './content.json'
import ExperienceTemplate from './templates/Experience.vue'
import EducationTemplate from './templates/Education.vue'
import ErrorTemplate from './templates/Error.vue'
import JobStats from './templates/JobStats.vue'

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

function getContent(type, entity) {
    let output = {};
    let index;
    let current = (currentCompany.toLowerCase() === entity.replace(/-/g," ").toLowerCase());
    for(let i = 0; Content[type.label].length > i; i++) {
        console.log("run", type)
        console.log("comparing", Content[type.label][i]['attributes'][type.matchOn].toLowerCase(), "to", entity.replace(/-/g," ").toLowerCase())
        if(Content[type.label][i]['attributes'][type.matchOn].toLowerCase() === entity.replace(/-/g," ").toLowerCase()) {
            index = i;
            break;
        }
    }
    try {
        output = JSON.parse(JSON.stringify(Content[type.label][index]));
        output.attributes.hero.brand = JSON.parse(JSON.stringify(Content[type.label][index].attributes.hero.brand.data.attributes.url));
        output.attributes.hero.brandWidth = JSON.parse(JSON.stringify(Content[type.label][index].attributes.hero.brand.data.attributes.width));
        output.attributes.hero.brandHeight = JSON.parse(JSON.stringify(Content[type.label][index].attributes.hero.brand.data.attributes.height));
        output.attributes.hero.classes = JSON.parse(JSON.stringify(Content[type.label][index].attributes.hero.title.replace(/ /g,"_").toLowerCase()));
        output.callout = JSON.parse(JSON.stringify(Content[type.label][index].attributes.Callout));
        output.calloutCurrent = current;
        delete output.Callout;
        output.modalAction = {
            callback: function(location) {
                window.open(location, "_blank");
            },
            footer: "Clicking the &quot;Apply&quot; button will open up a new tab with the job application on the " + output.company + " website.",
            label: "Apply"
        };
        output.cdn = cdn;
        return output;
    } catch(e) {
        console.error("Invalid entity name:", entity);
        console.error(e);
        return null;
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
            content: getContent(OPTIONS.EXPERIENCE, currentCompany)
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
            content: getContent(OPTIONS.EDUCATION, route.params.institution)
        })
    },
    {
        path: '/jobs/stats',
        name: 'Job Application Statistics',
        component: JobStats,
        meta: {
            title: titlePrefix + 'Job Application Statistics',
        },
    },
    {
        path: '*',
        name: 'error',
        component: ErrorTemplate
    }
]

export const router = new Router({
    mode: 'history',
    routes
})

export const data = {
    cdn,
    titlePrefix
}