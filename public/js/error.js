/**
 Copyright (c) 2020 Mark Adkins
 All Rights Reserved
 */

// App Core
import Vue from 'vue'
import ErrorView from './ErrorView.vue'
import Clipboard from 'v-clipboard'
import { data } from './router'
const Error = Vue.extend(ErrorView)

Vue.use(Clipboard)
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

// Constructor
const app = new Error({
    el: '#app',
    data() {
        return {
            cdn: data.cdn
        }
    }
});