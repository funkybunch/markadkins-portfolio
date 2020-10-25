// Respect Browser's Do Not Track Preference
if(navigator.doNotTrack !== "1") {
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-43059653-8');
    document.head.appendChild(recaptchaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-43059653-8');
} else {
    console.log("Did not load analytics per request of the browser's Do Not Track setting.");
}
