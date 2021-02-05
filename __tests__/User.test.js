import User from "./../src/js/User.js";
import Calculations from "./../src/js/Calculations.js";

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

  test("should return the global life expectancy when the key is called", () => {
    expect(currentUser.lifeExpectancy).toEqual(72.8);
  });

  // test("should return user's remaining life expectancy in the given planet's years based on the user's country", () => {
  //   expect(currentUser.yearsLeft())
  // })
}); 