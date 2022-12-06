const inquirer = require("inquirer");
const fs = require("fs");

// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const writeFile = require("./src/generateHTML");

// Collects user's input to to build team profile
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please provide the name of the team manager -",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log(' Please enter the name of the employee!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the manager's employee ID -",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log(' Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please provide the manager's email address -",
        validate: emailInput => {
            if (emailInput.includes('@')) {
                return true;
            } else {
                console.log(' Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please provide the office number -",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log(' Please enter the office number!');
                return false;
            }
        }
    },
];

let inputNewEmpQuestions = [
    {
        type: "list",
        name: "new_emp_type",
        message: "Please choose the role for which you would like to add profile :",
        choices: ["Engineer", "Intern"],
    },
];

let internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the intern -",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log(' Please enter the name of this employee!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's employee ID -",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log(' Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please provide the intern's email address -",
        validate: emailInput => {
            if (emailInput.includes('@')) {
                return true;
            } else {
                console.log(' Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        input: "input",
        name: "school",
        message: "Please provide the school name of the Intern",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log(' Please enter the school name!');
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "addNewEmployee",
        message: "Would you like to add add more team member profiles",
        default: false,
    },
];

// engineerQuestions
let engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the Engineer -",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log(' Please enter the name of this employee!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID -",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log(' Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please provide the engineer's email address -",
        validate: emailInput => {
            if (emailInput.includes('@')) {
                return true;
            } else {
                console.log(' Please enter a valid email address!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHub",
        message: "Please provide the GitHub username of the Engineer",
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log(' Please enter the GitHub username!!');
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "addNewEmployee",
        message: "Would you like to add add more team member profiles",
        default: false,
    },
];

const inputNewEmployee = () => {
    console.log(`- Please enter new record - `);
    inquirer.prompt(inputNewEmpQuestions).then((selectedOption) => {
        // console.log(selectedOption)
        switch (selectedOption.new_emp_type) {
            case "Intern":
                generateInternHTML();
                break;
            case "Engineer":
                generateEngineerHTML();
                break;
        }
    });
};

function generateInternHTML() {
    inquirer.prompt(internQuestions).then((internData) => {
        // console.log(internData);
        const { name, id, email, school } = internData;
        let employee;
        employee = new Intern(name, id, email, school);
        if (internData.addNewEmployee) {
            inputNewEmployee();
        } else {
            writeFile(Employee.array);
        }
    });
}

function generateEngineerHTML() {
    inquirer.prompt(engineerQuestions).then((engineerData) => {
        // console.log(engineerData);
        const { name, id, email, gitHub } = engineerData;
        let employee;
        employee = new Engineer(name, id, email, gitHub);
        if (engineerData.addNewEmployee) {
            inputNewEmployee();
        } else {
            writeFile(Employee.array);
        }
    });
}

function initialQuestions() {
    inquirer.prompt(managerQuestions).then((employeeData) => {
        // console.log(employeeData);
        const { name, id, email, officeNumber } = employeeData;
        let employee;
        employee = new Manager(name, id, email, officeNumber);
        // console.log(employee);

        inputNewEmployee();
    });
}

initialQuestions();
