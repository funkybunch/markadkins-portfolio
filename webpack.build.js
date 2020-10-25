const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
const env = require('dotenv').config();
const { spawn } = require('child_process');

// Definitions
const args = process.argv.slice(2);
const localContentFile = './src/js/content.json';
const startBuild = async () => {
    try {
        return await axios.get('https://markadkins-portfolio-api-ysslq.ondigitalocean.app/v1/content');
    } catch (error) {
        console.log("Failed to fetch content.  Check API health.");
        process.exit(1);
    }
}

// Functions
function buildApp() {
    spawnProcess('npm', ['run', 'compile']);
}

function startDevServer() {
    spawnProcess('npm', ['run', 'compile:serve']);
}

function spawnProcess(cmd, args) {
    const process = spawn(cmd, args, {stdio: ['inherit']});
    process.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    process.stderr.on('data', function(data) {
        console.log('stderr: ' + data.toString());
    });
    process.on('exit', function(code) {
        console.log('child process exited with code ' + code.toString());
    })
}

startBuild().then(function(content) {
    fs.writeFileSync(localContentFile, JSON.stringify(content.data));

    if(args[0] === "--dev") {
        startDevServer();
    } else {
        buildApp();
    }
});