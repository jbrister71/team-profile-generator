const template = require('./src/html-template');
const questionTemplate = require('./src/questionTemplate');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');

const employeeArr = [];

// Creates an Engineer or Intern based on questions asked
function promptGeneralQuestions() {
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

// Creates a Manager
function promptManagerQuestions() {
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

// Writes the html file and sets stylesheet
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
    console.log(`
    =======================================
    Welcome to the Team Profile Generator
    =======================================
    `)

    promptManagerQuestions()
        .then(data => {
            return template.generateHTML(employeeArr);
        })
        .then(html => {
            generateSite(html);
        })
}

init();