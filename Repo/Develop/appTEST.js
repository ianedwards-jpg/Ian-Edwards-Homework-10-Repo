const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const htmlRenderer = require("./lib/htmlRenderer")
const fs = require("fs")
const path = require("path")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
//Questions Array for employee class
const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter your full name.',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter your Employee ID.',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email.'
    },
    {
        name: "role",
        type: "rawlist",
        message: "What is your role within our organization?",
        choices: [
            "Intern",
            "Engineer",
            "Manager",
        ]
    }
]

// Render Employee Data and switch to 
function employeeData() {
    inquirer.prompt(questions).then(answers => {
        console.info('Answer:', answers);
        switch (answers.role) {
            case "Intern":
                internData(answers);
                break;

            case "Engineer":
                engineerData(answers);
                break;

            case "Manager":
                managerData(answers);
                break;
        }
        //////////////////////////////////////////////////////////////////  
        //const data = json.stringify(answers)
        //module.exports = data;
    })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}


// Intern Data Render Function
function internData(employeeAnswers) {
    inquirer
        .prompt({
            name: "school",
            type: "input",
            message: "What school did you attend?"
        })
        .then(function (answer) {
            const intern = new Intern (employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, answer.school)
            readOrWrite(intern)
            console.log("School: " + answer.school);
            //runSearch();
        });
}


//Engineer Data Render Function 
function engineerData() {
    inquirer
        .prompt({
            name: "github",
            type: "input",
            message: "Please Enter Github profile id."
        })
        .then(function (answer) {
            console.log("Github: " + answer.github);
            //runSearch();
        });
}

// Manager Data Render Function 
function managerData() {
    inquirer
        .prompt({
            name: "officeNum",
            type: "input",
            message: "What is your office number?"
        })
        .then(function (answer) {
            console.log("Office Number: " + answer.officeNum);
            //runSearch();
        });
}
function addEmployee() {
    inquirer
        .prompt({
            name: "addEmployee",
            type: "confirm",
            message: "Add New Employee?"
        })
        .then(function (answer) {
            console.log(answer);
            if (answer.addEmployee === true)
                return employeeData();
            else if (answer.addEmployee === false) {
                console.log("Have a great life, jackwad.");
                return
            }
        });
}

addEmployee(); 

function readOrWrite (newEmployee) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", (err, data) => {
        const employees = JSON.parse(data) 
      
        employees.push(newEmployee) 
        fs.writeFileSync(outputPath,htmlRenderer([...employees, newEmployee, ]) , "utf-8");
        fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(employees), (err, data) => { 
            if (err)
            console.error(err)
        }) 
     })
}