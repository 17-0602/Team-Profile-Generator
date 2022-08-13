const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Test if we can instantiate employee object", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Test if we can get name", () => {
        const name = "Jared";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Test if we can get ID", () => {
        const testValue = 404;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Test if we can get email", () => {
        const testValue = "abc@gmail.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Test if we can get name from getName()", () => {
            const testValue = "Jared";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Test if we can get ID from getId()", () => {
            const testValue = 404;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Test if we can get email from getEmail()", () => {
            const testValue = "abc@gmail.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Jared", 1, "abc@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});