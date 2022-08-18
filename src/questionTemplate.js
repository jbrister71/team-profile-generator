const employeeQuestions = [
    {
        type: 'input',
        name: "name",
        message: "What is this employee's name?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: [ 'Engineer', 'Intern' ],
        default: 0
    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's id?",
        validate: idInput => {
            if(idInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is this employee's email?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this employee's github username?",
        when: ({ role }) => { 
            if(role == "Engineer") {
                return true;
            }
            else {
                return false;
            }
        },
        validate: githubInput => {
            if(githubInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does this employee attend?",
        when: ({ role }) => { 
            if(role == "Intern") {
                return true;
            }
            else {
                return false;
            }
        },
        validate: schoolInput => {
            if(schoolInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAdd',
        message: "Would you like to add another employee?",
        default: false
    }
];

const managerQuestions = [
    {
        type: 'input',
        name: "name",
        message: "What is the manager's name?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id?",
        validate: idInput => {
            if(idInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?",
        validate: officeInput => {
            if(officeInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAdd',
        message: "Would you like to add another employee?",
        default: false
    }
];

module.exports = {
    employeeQuestions,
    managerQuestions
}