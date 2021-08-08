class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`This employee's name is ${this.name}`);
        return this.name;
    }

    getId() {
        console.log(`This employee's id is ${this.id}`);
        return this.id;
    }

    getEmail() {
        console.log(`This employee's id is ${this.email}`);
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;

