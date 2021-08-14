const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

//const writeFileAsync = util.promisify(fs.writeFile);

const filePathForHTML = "./dist/index.html"

const myTeam = [];

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
      choices: ['Engineer','Intern']
    }
  ]).then(answers => {
    let manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    myTeam.push(manager);
    if (answers.add === "Engineer") {
      promptEngineer();
    } 
    else if (answers.add === "Intern") {
      promptIntern();
    }
    else {
      generateHTML();
    }
  })
  .catch(err => {
    if (err) {
      console.log(err)
    }
  })
};
promptManager();

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is the intern's name?"
    },
    {
      type: 'input',
      name: 'internID',
      message: "What is the intern's employeeID?"
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the intern's email?"
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is the intern's current school?"
    },
    {
      type: 'list',
      name: 'add',
      message: "Would you like to add another employee to your team?",
      choices: ['Engineer','Intern','None']
    }
  ]).then(answers => {
    let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
    myTeam.push(intern);
    if (answers.add === "Engineer") {
      promptEngineer();
    } 
    else if (answers.add === "Intern") {
      promptIntern();
    }
    else {
      generateHTML();
    }
  })
  .catch(err => {
    if (err) {
      console.log(err)
    }
  })
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
      name: 'EngineerID',
      message: "What is the Engineer's employeeID?"
    },
    {
      type: 'input',
      name: 'EngineerEmail',
      message: "What is the Engineer's email?"
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
      choices: ['Engineer','Intern','None']
    }
  ]).then(answers => {
    let engineer = new Engineer(answers.EngineerName, answers.EngineerID, answers.EngineerEmail, answers.EngineerGithub)
    myTeam.push(engineer);
    if (answers.add === "Engineer") {
      promptEngineer();
    } 
    else if (answers.add === "Intern") {
      promptIntern();
    }
    else {
      generateHTML();
    }
  })
  .catch(err => {
    if (err) {
      console.log(err)
    }
  })
};

function generateStarterHTML() {
  return `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <!-- myCSS -->
      <link rel="stylesheet" href="./style.css">
  
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header>
      <div class="p-5 text-center bg-red">
          <h1 class="mb-3">Team Profile Generator</h1>
      </div>
      </header>
  
      <div class="col-sm-12 text-center" id="teamcards">`
}

function generateMyTeamHTML(myTeam) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${myTeam.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${myTeam.getRole()}</h6>
    <li>EmployeeID: ${myTeam.getId()} </li>
    <li>Email: <a href="${myTeam.getEmail()}">${myTeam.getEmail()}</a></li>
    ${myTeam.getRoleSpecificHTML()}
  </div>
</div>`
}

function generateBottomHTML() {
  return `</div> 
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>`
}

function generateHTML() {
  fs.writeFileSync(filePathForHTML, "")
  let htmlContent = generateStarterHTML();
  for (var i in myTeam) {
    console.log(myTeam)
    htmlContent += generateMyTeamHTML(myTeam[i])
  }
  htmlContent += generateBottomHTML();
  fs.writeFileSync(filePathForHTML, htmlContent)
}