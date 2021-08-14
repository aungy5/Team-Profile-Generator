const Employee = require('/Users/andrew/Team-Profile-Generator/lib/employee.js');

describe("getName", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Employee('Jim','2','jim@gmail.com');
        //const result = getName(testEmp);
        expect(testEmp.name).toEqual('Jim');
    })
});

describe("getID", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Employee('Jim','2','jim@gmail.com');
        //const result = getName(testEmp);
        expect(testEmp.id).toEqual('2');
    })
});

describe("getEmail", () => {
    it("should return the name of the employee", () => {
        const testEmp = new Employee('Jim','2','jim@gmail.com');
        //const result = getName(testEmp);
        expect(testEmp.email).toEqual('jim@gmail.com');
    })
});
