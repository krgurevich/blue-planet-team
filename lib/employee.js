class Employee {
    static array = [];
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        Employee.array.push(this);
    }
    displayEmployee() {
        return Employee.array;
    }
}
module.exports = Employee;