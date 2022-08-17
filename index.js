const template = require('./src/html-template');
const fs = require('fs');
const { rejects } = require('assert');

const mockData = [
    {
        name: 'Jared',
        role: 'Manager',
        id: 1,
        email: 'jared@fakeemail.com',
        office: 1
    },
    {
        name: 'Alec',
        role: 'Engineer',
        id: 2,
        email: 'alec@fakeemail.com',
        github: 'ibealec'
    },
    {
        name: 'Grace',
        role: 'Engineer',
        id: 3,
        email: 'grace@fakeemail.com',
        github: 'gchoi2u'
    },
    {
        name: 'Tammer',
        role: 'Engineer',
        id: 4,
        email: 'tammer@fakeemail.com',
        github: 'tammerg'
    },
    {
        name: 'John',
        role: 'Intern',
        id: 5,
        email: 'john@fakeemail.com',
        school: '2University'
    }
]

function init() {
    html = template.generateHTML(mockData);

    fs.writeFile('./dist/index.html', html, err => {
        if(err) {
            rejects(err);

            return;
        }
    });
}

init();