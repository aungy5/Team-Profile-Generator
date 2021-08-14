const Manager = require('/Users/andrew/Team-Profile-Generator/lib/manager.js');

describe("getName", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Manager('Manager','5','manager@gmail.com','102');
        expect(testEmp.name).toEqual('Manager');
    })
});

describe("getOffice", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Manager('Manager','5','manager@gmail.com','102');
        expect(testEmp.officeNumber).toEqual('102');
    })
});