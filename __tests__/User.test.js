import { TestScheduler } from "jest";
import User from "./../src/js/User.js";

describe("User", () => {
  let currentUser;

  beforeEach(() => {
    currentUser = new User("Mike", 32);
  });

  test("should assign the 'name' key to a given string", () => {
    expect(currentUser.name).toEqual("Mike");
  });

  test("should assign the 'age' key to a given number", () => {
    expect(currentUser.age).toEqual(32);
  });
}); 