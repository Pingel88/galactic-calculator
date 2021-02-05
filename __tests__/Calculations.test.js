import Calculations from "./../src/js/Calculations.js";

describe("Calculations", () => {
  let calcs;

  beforeEach(() => {
    calcs = new Calculations();
  });

  test("should return a float of the difference between Mercury's and Earth's orbit in the form of a ratio", () => {
    expect(calcs.mercury).toEqual(0.24);
  });
}); 