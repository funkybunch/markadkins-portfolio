/**
  Copyright (c) 2020 Mark Adkins
  All Rights Reserved
 */

// App Core
import { ViteSSG } from 'vite-ssg';
import AppView from './AppView.vue';
import { routes, data } from './router.js';
import Clipboard from 'v-clipboard'
import VueAnnouncer from '@vue-a11y/announcer';
import { marked } from 'marked';
import './console.js';
import './analytics.js';
import '../stylesheets/style.sass';
import GChart from 'vue-google-charts';
import { nextTick } from 'vue';
import { useHead } from '@unhead/vue';

export const createApp = ViteSSG(AppView, {
        routes,
    }, ({ app, router, routes, isClient, initialState }) => {
    app.config.globalProperties.cdn = import.meta.env.VITE_CDN;
    app.config.globalProperties.$api = {
        content: import.meta.env.VITE_CMS,
        jobs: import.meta.env.VITE_JOBS_API
    };
    initialState.cdn = app.config.globalProperties.cdn;
    initialState.$api = app.config.globalProperties.$api;

    app.use(Clipboard);
    app.use(VueAnnouncer);
    app.use(GChart);

    //Directives
    app.directive('scrollvisible', {
        inViewport (el) {
            let rect = el.getBoundingClientRect()
            return !(rect.bottom < 0 || rect.right < 0 ||
                rect.left > window.innerWidth ||
                rect.top > window.innerHeight)
        },

        bind(el, binding) {
            el.$onScroll = function() {
                if (binding.def.inViewport(el)) {
                    el.classList.add('scroll-visible')
                    binding.def.unbind(el, binding)
                }
            }
            document.addEventListener('scroll', el.$onScroll)
        },

        inserted(el, binding) {
            el.$onScroll()
        },

        unbind(el, binding) {
            document.removeEventListener('scroll', el.$onScroll)
            delete el.$onScroll
        }
    })

    router.afterEach((to, from) => {
        useHead({
            title: to.meta.title || data.titlePrefix + "UX Designer"
        })
    });

    app.config.globalProperties.$filters = {
        markdown(value) {
            return marked.parse(value);
        }
    }
});