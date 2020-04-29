// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email)
        this.github = github

    }
   
}

module.exports = Engineer


let name = function getName () {
    employee.name;
    console.log(employee.name)
}

let email = function getEmail () {
    employee.email;
    console.log(employee.email)
}

let id = function getId () {
    employee.id;
    console.log(employee.id)
}

let github = function getGithub () {
    employee.intern.school;
    console.log(intern.school)
}
