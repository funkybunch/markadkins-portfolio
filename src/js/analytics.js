const axios = require('axios').default;
let ga_allowed = true;

axios.get('https://www.google-analytics.com')
    .catch(function (error) {
        console.error(error);
        ga_allowed = false;
    })
    .then(function () {
        // Respect Browser's Do Not Track Preference
        if(navigator.doNotTrack !== "1" && ga_allowed) {
            let recaptchaScript = document.createElement('script');
            recaptchaScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-43059653-8');
            document.head.appendChild(recaptchaScript);

            try {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-43059653-8');    }
            catch(e) {

            }
            try {
                (function(apiKey){
                    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
                        v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
                            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
                        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
                        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
                })('4c4dc78e-9a3d-4237-6221-d33165ddbf72');

                pendo.initialize({});
            }
            catch(e) {

            }

        } else {
            console.log("Did not load analytics per request of the browser's Do Not Track setting.");
        }
    });
