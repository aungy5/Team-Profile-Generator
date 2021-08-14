const Engineer = require('/Users/andrew/Team-Profile-Generator/lib/engineer.js');

describe("getName", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Engineer('Engineer','5','engineer@gmail.com','GitUser4376');
        expect(testEmp.name).toEqual('Engineer');
    })
});

describe("getOffice", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Engineer('Engineer','5','engineer@gmail.com','GitUser4376');
        expect(testEmp.githubUsername).toEqual('GitUser4376');
    })
});