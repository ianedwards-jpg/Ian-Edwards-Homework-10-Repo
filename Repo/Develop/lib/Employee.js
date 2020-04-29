// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email, role) {
    this.name = name
    this.id =id
    this.email = email
    this.role = role 
  }
  getName() {
    return this.name
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole () {
    this.role = 'employee'
  }
}

module.exports = Employee





































// function writeToFile(fileName, data) {

//   fs.writeFile("answerData.json", data, function (err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

//   });
// }