const template = require('./src/html-template');
const questionTemplate = require('./src/questionTemplate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

const employeeArr = [];

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

function promptGeneralQuestions() {
    
    console.log('here');
    return inquirer.prompt(questionTemplate.employeeQuestions)
            .then(data => {
                if(data.role == 'Engineer') {
                    const { name, id, email, github } = data;

                    const engineer = new Engineer(name, id, email, github);

                    employeeArr.push(engineer);
                }
                else {
                    const { name, id, email, school } = data;

                    const intern = new Intern(name, id, email, school);

                    employeeArr.push(intern);
                }

                if(data.confirmAdd) {
                    return promptGeneralQuestions();
                }
                else {
                    return;
                }
            });
}

function promptManagerQuestions() {
    let manager;

    return inquirer.prompt(questionTemplate.managerQuestions)
        .then(data => {
            const { name, id, email, office } = data;

            const manager = new Manager(name, id, email, office);

            employeeArr.push(manager);

            if(data.confirmAdd) {
                return promptGeneralQuestions();
            }
            else {
                return;
            }
        })
};

function generateSite(html) {
    fs.writeFile('./dist/index.html', html, err => {
        if(err) {
            console.log(err);

            return;
        }
        else {
            console.log("File successfully written!");
        }
    });

    fs.copyFile('./style.css', './dist/style.css', err => {
        if(err) {
            console.log(err);

            return;
        }
        else {
            console.log("Stylesheet copied!");
        }
    });
}

function init() {
    promptManagerQuestions()
        .then(data => {
            return template.generateHTML(employeeArr);
        })
        .then(html => {
            generateSite(html);
        })
}

init();