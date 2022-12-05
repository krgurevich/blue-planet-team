class Employee {
    static array = [];
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        Employee.array.push(this);
    }
}
module.exports = Employee;