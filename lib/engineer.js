const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
    super(name, id, email);    
    this.githubUsername = githubUsername
    }
    getGithub() {
        return this.githubUsername;
    }
    getRole() {
        return "Engineer";
    }
    getRoleSpecificHTML() {
        return `<li>Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()} </a>`
    }
}

module.exports = Engineer;

