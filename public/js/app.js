import Vue from 'vue'
import App from './App.vue'
import cardContentJSON from './data.json'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)
require("./analytics");

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
    render: h => h(App)
});

