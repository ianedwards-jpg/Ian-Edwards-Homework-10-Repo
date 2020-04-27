// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
//const axios = require("axios")
//const fs = require("fs")

//Questions Array for employee class
const questions = [
  {
    name: 'name',
    message: 'Enter your full name.',
  },
  {
    name: 'id',
    message: 'Enter your Employee ID.',
  },
  {
    name: 'email',
    message: 'Enter your email.'
  }
]
function employeeData () {
inquirer.prompt(questions).then(answers => {
  console.info('Answer:', answers);
  const data = json.stringify(answers)
  module.exports = data;
})
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

  chooseRole()
}

function chooseRole() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What is your role within our organization?",
      choices: [
        "Intern",
        "Engineer",
        "Manager",
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Intern":
          artistSearch();
          break;

        case "Engineer":
          multiSearch();
          break;

        case "Manager":
          rangeSearch();
          break;
      }
    });
}

employeeData();



























// function writeToFile(fileName, data) {

//   fs.writeFile("answerData.json", data, function (err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

//   });
// }