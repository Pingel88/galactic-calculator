import User from "./../src/js/user.js";
import Calculations from "./../src/js/calculations.js";

describe("User", () => {
  let currentUser;
  let calc;

  beforeEach(() => {
    currentUser = new User("Mike", 32);
    calc = new Calculations();
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

  test("should update the User.lifeExpectancy value based on the country given", () => {
    currentUser.updateLifeExpectancy(calc.turkey);
    expect(currentUser.lifeExpectancy).toEqual(77.7);
  });

  test("should update the User.lifeExpectancy value based on the country given", () => {
    currentUser.updateLifeExpectancy(calc.greece);
    expect(currentUser.lifeExpectancy).toEqual(82.2);
  });

  test("should update the User.lifeExpectancy value based on the country given", () => {
    currentUser.updateLifeExpectancy(calc.japan);
    expect(currentUser.lifeExpectancy).toEqual(84.6);
  });

  test("should update the User.lifeExpectancy value based on the country given", () => {
    currentUser.updateLifeExpectancy(calc.unitedStates);
    expect(currentUser.lifeExpectancy).toEqual(78.9);
  });

  test("should update the User.lifeExpectancy value based on the country given", () => {
    currentUser.updateLifeExpectancy(calc.nigeria);
    expect(currentUser.lifeExpectancy).toEqual(54.7);
  });

}); 