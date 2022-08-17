const template = require('./src/html-template');
const fs = require('fs');
const { rejects } = require('assert');

function init() {
    html = template.generateHTML('placeholder');

    fs.writeFile('./dist/index.html', html, err => {
        if(err) {
            rejects(err);

            return;
        }
    });
}

init();