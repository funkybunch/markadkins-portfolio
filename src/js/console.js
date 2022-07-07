// Determines if the browser or operating system is in dark mode
// const BrowserIsDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const BrowserIsDarkMode = true;

// Inverted Logo SVG Code
const WelcomeSVGWhite = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="109px" height="33px" viewBox="0 0 109 33" version="1.1"><script xmlns=""/>
    <g id="Experience" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Experience-/-Bellese" transform="translate(-65.000000, -69.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M84.812,76.596 L84.812,96 L82.264,96 L82.264,80.516 L76.076,96 L73.808,96 L67.592,80.572 L67.592,96 L65.044,96 L65.044,76.596 L68.096,76.596 L74.984,92.892 L81.76,76.596 L84.812,76.596 Z M101.864,91.436 L93.184,91.436 L91.532,96 L88.788,96 L96.096,76.624 L98.98,76.624 L106.26,96 L103.516,96 L101.864,91.436 Z M101.136,89.448 L97.524,79.48 L93.912,89.448 L101.136,89.448 Z M120.708,96 L115.556,87.936 L112.784,87.936 L112.784,96 L110.236,96 L110.236,76.26 L116.732,76.26 C118.972011,76.26 120.651994,76.7966613 121.772,77.87 C122.892006,78.9433387 123.452,80.3666578 123.452,82.14 C123.452,83.7453414 123.004004,85.0379951 122.108,86.018 C121.211996,86.9980049 119.914675,87.6093321 118.216,87.852 L123.592,96 L120.708,96 Z M112.784,86.088 L116.508,86.088 C119.401348,86.088 120.848,84.8186794 120.848,82.28 C120.848,79.7413206 119.401348,78.472 116.508,78.472 L112.784,78.472 L112.784,86.088 Z M132.86,86.032 L141.876,96 L138.74,96 L130.508,86.788 L130.508,96 L127.96,96 L127.96,76.26 L130.508,76.26 L130.508,85.416 L138.768,76.26 L141.876,76.26 L132.86,86.032 Z M154.868,69.484 L147.28,101.068 L143.472,101.068 L151.06,69.484 L154.868,69.484 Z M166.6,76.456 L173.852,96 L169.68,96 L168.308,92.024 L160.384,92.024 L158.984,96 L154.812,96 L162.092,76.456 L166.6,76.456 Z M164.332,80.684 L161.42,89.028 L167.244,89.028 L164.332,80.684 Z" id="MARK/A"/>
        </g>
    </g>
</svg>
`;

// Color Logo SVG Code
const WelcomeSVGDark = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="109px" height="33px" viewBox="0 0 109 33" version="1.1"><script xmlns=""/>
    <g id="Experience" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Experience-/-Bellese" transform="translate(-65.000000, -69.000000)" fill="#000000" fill-rule="nonzero">
            <path d="M84.812,76.596 L84.812,96 L82.264,96 L82.264,80.516 L76.076,96 L73.808,96 L67.592,80.572 L67.592,96 L65.044,96 L65.044,76.596 L68.096,76.596 L74.984,92.892 L81.76,76.596 L84.812,76.596 Z M101.864,91.436 L93.184,91.436 L91.532,96 L88.788,96 L96.096,76.624 L98.98,76.624 L106.26,96 L103.516,96 L101.864,91.436 Z M101.136,89.448 L97.524,79.48 L93.912,89.448 L101.136,89.448 Z M120.708,96 L115.556,87.936 L112.784,87.936 L112.784,96 L110.236,96 L110.236,76.26 L116.732,76.26 C118.972011,76.26 120.651994,76.7966613 121.772,77.87 C122.892006,78.9433387 123.452,80.3666578 123.452,82.14 C123.452,83.7453414 123.004004,85.0379951 122.108,86.018 C121.211996,86.9980049 119.914675,87.6093321 118.216,87.852 L123.592,96 L120.708,96 Z M112.784,86.088 L116.508,86.088 C119.401348,86.088 120.848,84.8186794 120.848,82.28 C120.848,79.7413206 119.401348,78.472 116.508,78.472 L112.784,78.472 L112.784,86.088 Z M132.86,86.032 L141.876,96 L138.74,96 L130.508,86.788 L130.508,96 L127.96,96 L127.96,76.26 L130.508,76.26 L130.508,85.416 L138.768,76.26 L141.876,76.26 L132.86,86.032 Z M154.868,69.484 L147.28,101.068 L143.472,101.068 L151.06,69.484 L154.868,69.484 Z M166.6,76.456 L173.852,96 L169.68,96 L168.308,92.024 L160.384,92.024 L158.984,96 L154.812,96 L162.092,76.456 L166.6,76.456 Z M164.332,80.684 L161.42,89.028 L167.244,89.028 L164.332,80.684 Z" id="MARK/A"/>
        </g>
    </g>
</svg>
`;

// Determine if the full color or inverted logo should be used.
// This is based on if the browser is in dark mode or not.
const selectSVG = (BrowserIsDarkMode) ? WelcomeSVGWhite : WelcomeSVGDark

// Create a Data URI using the selected SVG.
const svgDataUrl = `data:image/svg+xml;base64,${btoa(selectSVG)}`

// Make Non-breaking space a reusable variable.  No one knows Unicode off the top of their head.
const NBSP = '\u00A0';

// Encode emojis used
const Emojis = {
    fire: String.fromCodePoint(0x1F525),
    laptop: String.fromCodePoint(0x1F4BB),
    wave: String.fromCodePoint(0x1F44B),
    heart: String.fromCodePoint(0x1F49C),
}

// Style welcome message logo
const WelcomeLogoStyles = [
    `background-image: url(${ svgDataUrl})`,
    'padding-bottom: 60px',
    'padding-left: 100%',
    'margin-top: 20px',
    'margin-bottom: 20px',
    'background-size: contain',
    'background-position: left center',
    'background-repeat: no-repeat'
].join(';') + ";";

// Set font family for entire console log message
const WelcomeCommonStyles = [
    'font-family: \'Poppins\', poppins, system-ui, -apple-system, systemui, Helvetica, Arial, sans-serif',
].join(';') + ";";

// H1 Styles
const WelcomeH1 = [
    'font-size: 3em',
    'font-weight: bold',
    'padding-top: 12px',
    'padding-bottom: 12px',
].join(';') + ";";

// H2 Styles
const WelcomeH2 = [
    'font-size: 2em',
    'font-weight: normal',
    'padding-bottom: 24px',
].join(';') + ";";

// Paragraph Styles
const WelcomeP = [
    'font-size: 1.5em',
    'font-weight: normal',
    'padding-bottom: 12px',
].join(';') + ";";

// Message padding
const WelcomePaddingBottom = [
    'padding-bottom: 36px',
].join(';') + ";";

// Set Light Mode color to dark grey
const WelcomeLightStyles = WelcomeCommonStyles + ([
    'color:#242424',
].join(';')) + ";";

// Set Dark Mode color to white
const WelcomeDarkStyles = WelcomeCommonStyles + ([
    'color:#FFFFFF',
].join(';')) + ";";

const WelcomeNeutralColor = (BrowserIsDarkMode) ? 'color:#FFFFFF' : 'color:#242424';

const WelcomeH1Styles = (BrowserIsDarkMode) ? WelcomeDarkStyles + WelcomeH1 : WelcomeLightStyles + WelcomeH1;
const WelcomeH2Styles = (BrowserIsDarkMode) ? WelcomeDarkStyles + WelcomeH2 : WelcomeLightStyles + WelcomeH2 + WelcomeNeutralColor;
const WelcomePStyles = (BrowserIsDarkMode) ? WelcomeDarkStyles + WelcomeP : WelcomeLightStyles + WelcomeP + WelcomeNeutralColor;

// Output everything to the console
console.log("%c %c" + Emojis.wave + NBSP + NBSP + "Hi there!\n%cFancy seeing you here in the console\n%cIf you're wondering about the tech stack " + Emojis.laptop + ", here is what I'm using:\n" +
    "- Vue JS\n- Express API\n- Strapi CMS\n- S3 asset storage\n- Cloudflare CDN" +
    "\n\nNo off-the-shelf templates or site-builders here.\nHand-crafted with " + Emojis.heart + " in Raleigh, NC.\n\nWant to get in touch?  hellofromtheconsole@markadkins.design%c ", WelcomeLogoStyles, WelcomeH1Styles, WelcomeH2Styles, WelcomePStyles, WelcomePaddingBottom);