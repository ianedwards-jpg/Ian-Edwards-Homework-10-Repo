// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");
const axios= require("axios")
const fs = require("fs")

//Questions Array for README input
const questions = [
    {
        name: 'title',
        message: 'Give your project a name.',
      },
      {
        name: 'description',
        message: 'What is your project about? What does it do? What are you hoping to accomplish with it?',
      },
      {
        name: 'installation',
        message: 'Describe the installation process for your project. List any modules that will need to be installed for it to run.',
      },
      {
        name: 'usage',
        message: 'Provide instructions for the usage of your project. Include pictures as needed.',
      },
      {
        name: 'license',
        message: 'Describe what your project may and may not be used for. Include any special permissions that must be sought.',
      },
      {
        name: 'contributing',
        message: 'If you wish for others to build on your project, include instructions on accessing the project and guidelines for contribution.',
      },
      {
        name: 'tests',
        message: 'What kind of tests did you run?',
      },
    ]

    inquirer.prompt(questions).then(answers => {
        console.info('Answer:', answers);
        const data = json.stringify(answers)
        module.exports = data;
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });




function writeToFile(fileName, data) {
    
    fs.writeFile("answerData.json", data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
}