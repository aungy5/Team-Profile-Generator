const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const generateManagerInfo = (answers) => `<h1> Manager: ${answers.name}</h1>
<h2>EmployeeID: ${answers.id}</h2>
<h2>Manager's Email: ${answers.email}</h2>
<h2>Manager's Email: ${answers.office}</h2>`;

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employeeID?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?"
      },
      {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?"
      },
      {
        type: 'list',
        name: 'add',
        message: "Would you like to add another employee to your team?",
        choices: ['Yes','No']
      },
      {
        type: 'list',
        name: 'addType',
        message: "What type of employee would you like to add",
        choices: ['Engineer','Intern'],
        when: (answers) => answers.add === "Yes"
      },
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's name?",
        when: (answers) => answers.addType === "Engineer"
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineer's employeeID?",
        when: (answers) => answers.addType === "Engineer"
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's email?",
        when: (answers) => answers.addType === "Engineer"
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's github username?",
        when: (answers) => answers.addType === "Engineer"
      },
      {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's name?",
        when: (answers) => answers.addType === "Intern"
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the Intern's employeeID?",
        when: (answers) => answers.addType === "Intern"
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's email?",
        when: (answers) => answers.addType === "Intern"
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What school is the intern currently attending?",
        when: (answers) => answers.addType === "Intern"
      },
      {
        type: 'list',
        name: 'add2',
        message: "Would you like to add another employee to your team?",
        choices: ['Yes','No'],
        when: (answers) => answers.internSchool || answers.engineerGithub != ""
      },
      {
        type: 'list',
        name: 'addType2',
        message: "What type of employee would you like to add",
        choices: ['Engineer','Intern'],
        when: (answers) => answers.add2 === "Yes"
      },
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's name?",
        when: (answers) => answers.addType2 === "Engineer"
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineer's employeeID?",
        when: (answers) => answers.addType2 === "Engineer"
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's email?",
        when: (answers) => answers.addType2 === "Engineer"
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's github username?",
        when: (answers) => answers.addType2 === "Engineer"
      },
      {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's name?",
        when: (answers) => answers.addType2 === "Intern"
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the Intern's employeeID?",
        when: (answers) => answers.addType2 === "Intern"
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's email?",
        when: (answers) => answers.addType2 === "Intern"
      },
      {
        type: 'input',
        name: 'internSchool',
        message: "What school is the intern currently attending?",
        when: (answers) => answers.addType2 === "Intern"
      }

  ])

.then((answers) => {
    const managerContent = generateManagerInfo(answers);

    fs.writeFile('index.html', managerContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
    