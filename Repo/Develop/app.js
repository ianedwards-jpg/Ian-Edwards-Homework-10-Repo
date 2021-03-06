const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const confirm = require('inquirer-confirm')
const path = require("path");
const fs = require("fs");
​const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​ 
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
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

 function employeeData () {
  inquirer.prompt(questions).then(answers => {

    console.info('Answer:', answers);
    switch (answers.role) {
      case "Intern":
        internData();
        break;
  
      case "Engineer":
        engineerData();
        break;
  
      case "Manager":
        managerData();
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
 function internData() {
    inquirer
      .prompt({
        name: "school",
        type: "input",
        message: "What school did you attend?"
      })
      .then(function(answer) {
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
      },)
      .then(function(answer) {
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
      .then(function(answer) {
        console.log("Office Number: " + answer.officeNum);
         //runSearch();
        });
  }

function writeFile () { 

  fs.appendFile('message.txt', answer, answers, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
}

function runApp () {
 inquirer
    .prompt({
      name: "newEmployee",
      type: "confirm",
      message: "Add Employee?"
    })
    .then(function(answer) {
       console.log("School: " + answer.school);
       //runSearch();
      });
}


employeeData(); 
runApp();