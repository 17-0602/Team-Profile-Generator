const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter new memeber's name",
        name: "name"
    },
    {
        type: "list",
        message: "Choose member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter new member's ID",
        name: "id"
    },
    {
        message: "Enter new member's Email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add another new member?",
            choices: [
                "Yes",
                "No"
            ],
            name: "otherMember"
        }])
        .then(function({roleInfo, otherMember}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (otherMember === "Yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- BOOTSTRAP CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="container-md p-3 mb-2 bg-danger text-white">
            <span class="h3 d-flex justify-content-center">My Team</span>
        </header>
        <div class="container text-center">
            <div class="row">`;
    fs.writeFile("./output/teamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col">
            <div class="card" style="width: 18rem;">
            <h5 class="card-header p-3 mb-2 bg-primary text-white">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</li>
                <li class="list-group-item">GitHub user: <a href="https://github.com/${gitHub}">${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="card" style="width: 18rem;">
            <h5 class="card-header p-3 mb-2 bg-primary text-white">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="card" style="width: 18rem;">
            <h5 class="card-header p-3 mb-2 bg-primary text-white">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</li>
                <li class="list-group-item">Office number: ${officePhone}</li>
            </ul>
        </div>`
        }
        console.log("Creating new member's profile");
        fs.appendFile("./output/teamProfile.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/teamProfile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

initApp();