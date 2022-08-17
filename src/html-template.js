function generateHTML(employeeData) {
    return `
    <!DOCTYPE html>
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
            Placeholder for employee cards
        </main>
    </body>
    `
}

module.exports = { generateHTML };