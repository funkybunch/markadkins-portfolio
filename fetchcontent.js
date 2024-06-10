const path = require('path');
const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config()

let routes = ['/'];

function urlify(text) {
    return text.toLowerCase().replaceAll(' ', '-');
}

axios.get(process.env.VITE_CMS).then(function(data) {
    const content = data.data;
    fs.writeFileSync(path.join(__dirname, 'src/js/content.json'), JSON.stringify(content));
    for(let company in content.experience) {
        routes.push('/experience/' + urlify(content.experience[company].attributes.company));
    }
    for(let institution in content.education) {
        routes.push('/education/' + urlify(content.education[institution].attributes.institution));
    }
    console.log(routes)
});