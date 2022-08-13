const Engineer = require("../lib/engineer");

test("Test if we can get GitHub user from constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "abc@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "abc@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Test if we can get GitHub user from getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "abc@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});