const Intern = require("../lib/intern");

test("Test if we can get school from constructor", () => {
  const testValue = "TEC";
  const e = new Intern("Foo", 1, "abc@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "abc@gmail.com", "TEC");
  expect(e.getRole()).toBe(testValue);
});

test("Test if we can get school from getSchool()", () => {
  const testValue = "TEC";
  const e = new Intern("Foo", 1, "abc@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});