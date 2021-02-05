import { TestScheduler } from "jest";
import User from "./../src/js/User.js";

describe("User", () => {
  test("should create a new instance of the User class and assign the 'name' key to a given string", () => {
  const currentUser = new User("Mike");
  expect(currentUser.name).toEqual("Mike");
  })
});