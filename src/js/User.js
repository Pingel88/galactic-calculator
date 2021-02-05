export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = 72.8;
  };

  updateLifeExpectancy(country) {
    this.lifeExpectancy = country;
  };
};