const Intern = require('/Users/andrew/Team-Profile-Generator/lib/intern.js');

describe("getName", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Intern('Intern','5','intern@gmail.com','Syracuse University');
        expect(testEmp.name).toEqual('Intern');
    })
});

describe("getOffice", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Intern('Intern','5','intern@gmail.com','Syracuse University');
        expect(testEmp.school).toEqual('Syracuse University');
    })
});