/**
  Copyright (c) 2020 Mark Adkins
  All Rights Reserved
 */

// App Core
import { createApp, ref } from 'vue';
import AppView from './AppView.vue';
import { router, data } from './router';
import Clipboard from 'v-clipboard'
import VueAnnouncer from '@vue-a11y/announcer';
import { marked } from 'marked';
import './console';
import './analytics';
import '../stylesheets/style.sass';
import GChart from "vue-google-charts/legacy";

const app = createApp(AppView);
app.config.globalProperties.cdn = import.meta.env.VITE_CDN;
app.config.globalProperties.$api = {
    content: import.meta.env.VITE_CMS,
    jobs: import.meta.env.VITE_JOBS_API
};

app.use(router);
app.use(Clipboard);
app.use(VueAnnouncer);
app.use(GChart);
app.mount('#app');

//Directives
app.directive('scrollvisible', {
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
    app.nextTick(() => {
        document.title = to.meta.title || data.titlePrefix + "Senior Product Designer";
    });
});

app.config.globalProperties.$filters = {
    markdown(value) {
        return marked.parse(value);
    }
}
