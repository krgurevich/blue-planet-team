// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    }
}

// to be exported 
module.exports = Intern; 