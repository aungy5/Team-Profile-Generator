const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const writeFileAsync = util.promisify(fs.writeFile);

const promptManager = () => {
  return inquirer.prompt([
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
    }
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'InternName',
      message: "What is the intern's name?"
    },
    {
      type: 'input',
      name: 'InternId',
      message: "What is the intern's employeeID?"
    },
    {
      type: 'input',
      name: 'InternEmail',
      message: "What is the intern's email?"
    },
    {
      type: 'input',
      name: 'InternOffice',
      message: "What is the intern's office number?"
    },
    {
      type: 'input',
      name: 'InternSchool',
      message: "What is the intern's current school?"
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
    }
  ]);
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'EngineerName',
      message: "What is the Engineer's name?"
    },
    {
      type: 'input',
      name: 'EngineerId',
      message: "What is the Engineer's employeeID?"
    },
    {
      type: 'input',
      name: 'EngineerEmail',
      message: "What is the Engineer's email?"
    },
    {
      type: 'input',
      name: 'EngineerOffice',
      message: "What is the Engineer's office number?"
    },
    {
      type: 'input',
      name: 'EngineerGithub',
      message: "What is the Engineer's Github Username?"
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
    }
  ]);
};

const addAnother = (answers) => {
  if (answers.addType === "Engineer")
  promptEngineer();
  if (answers.addType === "Intern")
  promptIntern();
}

const generateHTML = (answers) => `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <style>
    #teamcards { display: flex;
    flex-direction: row;
    padding: 20px;
    justify-content: center;
    background-color: lightskyblue;}

    header {
      background-color: navy;
      color: lightskyblue;
    }
    </style>

    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>
    <div class="p-5 text-center bg-red">
        <h1 class="mb-3">Team Profile Generator</h1>
    </div>
    </header>

    <div class="col-sm-12 text-center" id="teamcards">
      <!-- Card 1 -->
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${answers.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          <p>ID: ${answers.id}</p>
          <p>Office Number: ${answers.office}</p>
          <a href="#" class="card-link">Email: ${answers.email}</a>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${answers.InternName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
          <p>ID: ${answers.InternId}</p>
          <p>Office Number: ${answers.InternOffice}</p>
          <a href="#" class="card-link">Email: ${answers.InternEmail}</a>
          <a href="#" class="card-link">School: ${answers.InternSchool}</a>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${answers.EngineerName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <p>ID: ${answers.EngineerId}</p>
        <p>Office Number: ${answers.EngineerOffice}</p>
        <a href="#" class="card-link">Email: ${answers.EngineerEmail}</a>
        <a href="#" class="card-link">Github: ${answers.EngineerGithub}</a>
        </div>
      </div>
      </div> 
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>`

const init = () => {
  promptManager()
    .then ((answers) => addAnother(answers))
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();