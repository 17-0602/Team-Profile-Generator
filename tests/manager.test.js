const Manager = require("../lib/manager");

test("Test if we can get office number from constructor", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "abc@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "abc@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Test if we can get office number from getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "abc@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});