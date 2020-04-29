// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
//const axios = require("axios")
//const fs = require("fs")

class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id =id
    this.email = email
  }
  getName() {
    return this.name
  }
  getRole () {
    this.role;
   

}

}

module.exports = Employee

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
const employee = function employeeData () {
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
const intern = function internData() {
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
const engineer = function engineerData() {
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
const manager = function managerData() {
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




































// function writeToFile(fileName, data) {

//   fs.writeFile("answerData.json", data, function (err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

//   });
// }