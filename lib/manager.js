// importing Employee constructor 
const Employee = require('./Employee');

// extending employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

// to be exported 
module.exports = Manager; 