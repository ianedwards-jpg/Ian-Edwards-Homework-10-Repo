// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require('./Employee')

let name = function getName() {
    employee.name;
    console.log(employee.name)
}

let role = function getRole() {
    employee.role;
    console.log(employee.role)

}

let email = function getEmail() {
    employee.email;
    console.log(employee.email)

}

let id = function getId() {
    employee.id;
    console.log(employee.id)

}

let school = function getSchool() {
    employee.intern.school;
    console.log(intern.school)
}

module.exports = {
    name,
    role,
    email,
    id,
    school
}


