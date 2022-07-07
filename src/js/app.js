/**
  Copyright (c) 2020 Mark Adkins
  All Rights Reserved
 */

// App Core
console.err = function() {}
console.warn = function() {}
console.error = function() {}
import Vue from 'vue'
import AppView from './AppView.vue'
import Clipboard from 'v-clipboard'
import { router, data } from './router'
const Portfolio = Vue.extend(AppView)
import VueAnnouncer from 'vue-announcer'
import { marked } from 'marked'
import './console'
import '../stylesheets/style.sass'


Vue.use(Clipboard)
Vue.use(VueAnnouncer)
require("./analytics")

//Directives
Vue.directive('scrollvisible', {
    inViewport (el) {
        var rect = el.getBoundingClientRect()
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
    Vue.nextTick(() => {
        document.title = to.meta.title || data.titlePrefix + "Senior Product Designer";
    });
});

Vue.filter('markdown', function(value) {
    return marked.parse(value);
})

// Constructor
const app = new Portfolio({
    el: '#app',
    data() {
        return {
            cdn: data.cdn
        }
    },
    router
});