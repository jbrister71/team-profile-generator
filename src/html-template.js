// The next three functions handle html for employee cards
function generateManager(employee) {
    const { name, email, id, office } = employee;
    
    return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="header-info">${name}</h2>
                        <h2 class="role header-info">Manager</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Id: ${id}</p>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">Office Number: ${office}</p>
                    </div>
                </div>     
    `
}

function generateEngineer(employee) {
    const { name, email, id, github } = employee;
    
    return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="header-info">${name}</h2>
                        <h2 class="role header-info">Engineer</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Id: ${id}</p>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">Github: ${github}</p>
                    </div>
                </div>     
    `
}

function generateIntern(employee) {
    const { name, email, id, school } = employee;
    
    return `
                <div class="card">
                    <div class="card-header">
                        <h2 class="header-info">${name}</h2>
                        <h2 class="role header-info">Intern</h2>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Id: ${id}</p>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">School: ${school}</p>
                    </div>
                </div>     
    `
}

// Uses the getRole() function to determine which type of card to build
function generateEmployees(employeeData) {
    let employeeTemplate = '';
    
    for(let i = 0; i < employeeData.length; i++) {
        if(employeeData[i].getRole() == 'Manager') {
            employeeTemplate += generateManager(employeeData[i]);
        }
        else if(employeeData[i].getRole() == 'Engineer') {
            employeeTemplate += generateEngineer(employeeData[i]);
        }
        else if(employeeData[i].getRole() == 'Intern') {
            employeeTemplate += generateIntern(employeeData[i]);
        }
    }

    return employeeTemplate;
}

// Basic html
function generateHTML(employeeData) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css" />
    </head>

    <body>
        <header>
            <h1>My team</h1>
        </header>
        <main>
            <div class="card-container">
                ${generateEmployees(employeeData)}
            </div>
        </main>
    </body>
    `
}

module.exports = { generateHTML };