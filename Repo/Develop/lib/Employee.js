// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
//const axios = require("axios")
//const fs = require("fs")


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
  switch (answer.action) {
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
  //chooseRole()
}

// Intern Data Render Function
function internData() {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?"
    })
    .then(function(answer) {
      var query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
        //runSearch();
      });
    });
}

//Engineer Data Render Function 
function engineerData() {
  inquirer
    .prompt({
      name: "gitHub",
      type: "input",
      message: "Please Enter Github profile id."
    },)
    .then(function(answer) {
      var query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
        //runSearch();
      });
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
      var query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
        //runSearch();
      });
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