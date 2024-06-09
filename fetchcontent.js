const path = require('path');
const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config()

axios.get(process.env.VITE_CMS).then(function(data) {
    fs.writeFileSync(path.join(__dirname, 'src/js/content.json'), JSON.stringify(data.data));
});