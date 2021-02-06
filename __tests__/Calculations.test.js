import Calculations from "./../src/js/Calculations.js";
import User from "./../src/js/User.js";

describe("Calculations", () => {
  let calc;
  let currentUser;
  let oldUser;
  let otherUser;

  beforeEach(() => {
    calc = new Calculations();
    currentUser = new User("Mike", 32);
    oldUser = new User("Old Fart", 91);
    otherUser = new User("Lucky", 83);
  });

  test("should return a float of the difference between Mercury's and Earth's orbit in the form of a ratio", () => {
    expect(calc.mercury).toEqual(0.24);
  });

  test("should return a float of the difference between Venus' and Earth's orbit in the form of a ratio", () => {
    expect(calc.venus).toEqual(0.62);
  });

  test("should return a float of the difference between Mars' and Earth's orbit in the form of a ratio", () => {
    expect(calc.mars).toEqual(1.88);
  });

  test("should return a float of the difference between Jupiter's and Earth's orbit in the form of a ratio", () => {
    expect(calc.jupiter).toEqual(11.86);
  });
  
    test("should return a float or integer of the life expectancy of the country in years", () => {
      expect(calc.afghanistan).toEqual(64.8);
      expect(calc.albania).toEqual(78.6);
      expect(calc.algeria).toEqual(76.9);
      expect(calc.andorra).toEqual(81.9);
      expect(calc.angola).toEqual(61.2);
      expect(calc.antiguaAndBarbuda).toEqual(77);
      expect(calc.argentina).toEqual(76.7);
      expect(calc.armenia).toEqual(75.1);
      expect(calc.australia).toEqual(83.4);
      expect(calc.austria).toEqual(81.5);
      expect(calc.azerbaijan).toEqual(73);
      expect(calc.bahamas).toEqual(73.9);
      expect(calc.bahrain).toEqual(77.3);
      expect(calc.bangladesh).toEqual(72.6);
      expect(calc.barbados).toEqual(79.2);
      expect(calc.belarus).toEqual(74.8);
      expect(calc.belgium).toEqual(81.6);
      expect(calc.belize).toEqual(74.6);
      expect(calc.benin).toEqual(61.8);
      expect(calc.bhutan).toEqual(71.7);
      expect(calc.bolivia).toEqual(71.5);
      expect(calc.bosniaAndHerzegovina).toEqual(77.4);
      expect(calc.botswana).toEqual(69.6);
      expect(calc.brazil).toEqual(75.9);
      expect(calc.brunei).toEqual(75.9);
      expect(calc.bulgaria).toEqual(75.1);
      expect(calc.burkinaFaso).toEqual(61.6);
      expect(calc.burundi).toEqual(61.6);
      expect(calc.caboVerde).toEqual(73);
      expect(calc.cambodia).toEqual(69.8);
      expect(calc.cameroon).toEqual(59.3);
      expect(calc.canada).toEqual(82.4);
      expect(calc.centralAfricanRepublic).toEqual(53.3);
      expect(calc.chad).toEqual(54.2);
      expect(calc.chile).toEqual(80.2);
      expect(calc.colombia).toEqual(77.3);
      expect(calc.comoros).toEqual(64.3);
      expect(calc.congoDemocraticRepublicOfThe).toEqual(60.7);
      expect(calc.congoRepublicOf).toEqual(64.6);
      expect(calc.costaRica).toEqual(80.3);
      expect(calc.coteDivoire).toEqual(57.8);
      expect(calc.croatia).toEqual(78.5);
      expect(calc.cuba).toEqual(78.8);
      expect(calc.cyprus).toEqual(81);
      expect(calc.czechRepublic).toEqual(79.4);
      expect(calc.denmark).toEqual(80.9);
      expect(calc.djibouti).toEqual(67.1);
      expect(calc.dominica).toEqual(78.2);
      expect(calc.dominicanRepublic).toEqual(74.1);
      expect(calc.ecuador).toEqual(77);
      expect(calc.egypt).toEqual(72);
      expect(calc.elSalvador).toEqual(73.3);
      expect(calc.equatorialGuinea).toEqual(58.7);
      expect(calc.eritrea).toEqual(66.3);
      expect(calc.estonia).toEqual(78.8);
      expect(calc.eswatini).toEqual(60.2);
      expect(calc.ethiopia).toEqual(66.6);
      expect(calc.federatedStatesOfMicronesia).toEqual(67.9);
      expect(calc.fiji).toEqual(67.4);
      expect(calc.finland).toEqual(81.9);
      expect(calc.france).toEqual(82.7);
      expect(calc.gabon).toEqual(66.5);
      expect(calc.gambia).toEqual(62.1);
      expect(calc.georgia).toEqual(73.8);
      expect(calc.germany).toEqual(81.3);
      expect(calc.ghana).toEqual(64.1);
      expect(calc.greece).toEqual(82.2);
      expect(calc.grenada).toEqual(72.4);
      expect(calc.guatemala).toEqual(74.3);
      expect(calc.guinea).toEqual(61.6);
      expect(calc.guineaBissau).toEqual(58.3);
      expect(calc.guyana).toEqual(69.9);
      expect(calc.haiti).toEqual(64);
      expect(calc.honduras).toEqual(75.3);
      expect(calc.hongKong).toEqual(84.9);
      expect(calc.hungary).toEqual(76.9);
      expect(calc.iceland).toEqual(83);
      expect(calc.india).toEqual(69.7);
      expect(calc.indonesia).toEqual(71.7);
      expect(calc.iran).toEqual(76.7);
      expect(calc.iraq).toEqual(70.6);
      expect(calc.ireland).toEqual(82.3);
      expect(calc.israel).toEqual(83);
      expect(calc.italy).toEqual(83.5);
      expect(calc.jamaica).toEqual(74.5);
      expect(calc.japan).toEqual(84.6);
      expect(calc.jordan).toEqual(74.5);
      expect(calc.kazakhstan).toEqual(73.5);
      expect(calc.kenya).toEqual(66.7);
      expect(calc.kiribati).toEqual(68.4);
      expect(calc.kuwait).toEqual(75.5);
      expect(calc.kyrgyzstan).toEqual(71.5);
      expect(calc.laos).toEqual(67.9);
      expect(calc.latvia).toEqual(75.3);
      expect(calc.lebanon).toEqual(78.9);
      expect(calc.lesotho).toEqual(54.3);
      expect(calc.liberia).toEqual(64.1);
      expect(calc.libya).toEqual(72.9);
      expect(calc.liechtenstein).toEqual(80.7);
      expect(calc.lithuania).toEqual(75.9);
      expect(calc.luxembourg).toEqual(82.3);
      expect(calc.madagascar).toEqual(67);
      expect(calc.malawi).toEqual(64.3);
      expect(calc.malaysia).toEqual(76.2);
      expect(calc.maldives).toEqual(78.9);
      expect(calc.mali).toEqual(59.3);
      expect(calc.malta).toEqual(82.5);
      expect(calc.marshallIslands).toEqual(74.1);
      expect(calc.mauritania).toEqual(64.9);
      expect(calc.mauritius).toEqual(75);
      expect(calc.mexico).toEqual(75.1);
      expect(calc.moldova).toEqual(71.9);
      expect(calc.mongolia).toEqual(69.9);
      expect(calc.montenegro).toEqual(76.9);
      expect(calc.morocco).toEqual(76.7);
      expect(calc.mozambique).toEqual(60.9);
      expect(calc.myanmar).toEqual(67.1);
      expect(calc.namibia).toEqual(63.7);
      expect(calc.nepal).toEqual(70.8);
      expect(calc.netherlands).toEqual(82.3);
      expect(calc.newZealand).toEqual(82.3);
      expect(calc.nicaragua).toEqual(74.5);
      expect(calc.niger).toEqual(62.4);
      expect(calc.nigeria).toEqual(54.7);
      expect(calc.northMacedonia).toEqual(75.8);
      expect(calc.norway).toEqual(82.4);
      expect(calc.oman).toEqual(77.9);
      expect(calc.pakistan).toEqual(67.3);
      expect(calc.palau).toEqual(73.9);
      expect(calc.palestine).toEqual(74.1);
      expect(calc.panama).toEqual(78.5);
      expect(calc.papuaNewGuinea).toEqual(64.5);
      expect(calc.paraguay).toEqual(74.3);
      expect(calc.peoplesRepublicOfChina).toEqual(76.9);
      expect(calc.peru).toEqual(76.7);
      expect(calc.philippines).toEqual(71.2);
      expect(calc.poland).toEqual(78.7);
      expect(calc.portugal).toEqual(82.1);
      expect(calc.qatar).toEqual(80.2);
      expect(calc.romania).toEqual(76.1);
      expect(calc.russia).toEqual(72.6);
      expect(calc.rwanda).toEqual(69);
      expect(calc.saintKittsAndNevis).toEqual(74.8);
      expect(calc.saintLucia).toEqual(76.2);
      expect(calc.saintVincentAndTheGrenadines).toEqual(72.5);
      expect(calc.samoa).toEqual(73.3);
      expect(calc.saoTomeAndPrincipe).toEqual(70.4);
      expect(calc.saudiArabia).toEqual(75.1);
      expect(calc.senegal).toEqual(67.9);
      expect(calc.serbia).toEqual(76);
      expect(calc.seychelles).toEqual(73.4);
      expect(calc.sierraLeone).toEqual(54.7);
      expect(calc.singapore).toEqual(83.6);
      expect(calc.slovakia).toEqual(77.5);
      expect(calc.slovenia).toEqual(81.3);
      expect(calc.solomonIslands).toEqual(73);
      expect(calc.southAfrica).toEqual(64.1);
      expect(calc.southKorea).toEqual(83);
      expect(calc.southSudan).toEqual(57.9);
      expect(calc.spain).toEqual(83.6);
      expect(calc.sriLanka).toEqual(77);
      expect(calc.sudan).toEqual(65.3);
      expect(calc.suriname).toEqual(71.8);
      expect(calc.sweden).toEqual(82.8);
      expect(calc.switzerland).toEqual(83.8);
      expect(calc.syria).toEqual(72.7);
      expect(calc.tajikistan).toEqual(71.1);
      expect(calc.tanzania).toEqual(65.5);
      expect(calc.thailand).toEqual(77.2);
      expect(calc.timorLeste).toEqual(69.5);
      expect(calc.togo).toEqual(61);
      expect(calc.tonga).toEqual(70.9);
      expect(calc.trinidadAndTobago).toEqual(73.6);
      expect(calc.tunisia).toEqual(76.7);
      expect(calc.turkey).toEqual(77.7);
      expect(calc.turkmenistan).toEqual(68.2);
      expect(calc.uganda).toEqual(63.4);
      expect(calc.ukraine).toEqual(72.1);
      expect(calc.unitedArabEmirates).toEqual(78);
      expect(calc.unitedKingdom).toEqual(81.3);
      expect(calc.unitedStates).toEqual(78.9);
      expect(calc.uruguay).toEqual(77.9);
      expect(calc.uzbekistan).toEqual(71.7);
      expect(calc.vanuatu).toEqual(70.5);
      expect(calc.venezuela).toEqual(72.1);
      expect(calc.vietnam).toEqual(75.4);
      expect(calc.yemen).toEqual(66.1);
      expect(calc.zambia).toEqual(63.9);
      expect(calc.zimbabwe).toEqual(61.5);
      expect(calc.otherWorldAverage).toEqual(72.8);
  });

  test("should return the user's age as a number in Mercury years", () => {
    expect(calc.planetAge(currentUser.age, calc.mercury)).toEqual(133.333);
  });

  test("should return the user's age as a number in Venus years", () => {
    expect(calc.planetAge(currentUser.age, calc.venus)).toEqual(51.613);
  });

  test("should return the user's age as a number in Mars years", () => {
    expect(calc.planetAge(currentUser.age, calc.mars)).toEqual(17.021);
  });

  test("should return the user's age as a number in Jupiter years", () => {
    expect(calc.planetAge(currentUser.age, calc.jupiter)).toEqual(2.698);
  });

    test("should return a string stating the user's remaining life expectancy in the given planet's years", () => {
    expect(calc.yearsLeft(currentUser.age, currentUser.lifeExpectancy, calc.mercury)).toEqual("You have 170 of this planet's years left to live.");
  });

  test("should return a string stating the user's remaining life expectancy in the given planet's years", () => {
    currentUser.updateLifeExpectancy(calc.nepal);
    expect(calc.yearsLeft(currentUser.age, currentUser.lifeExpectancy, calc.venus)).toEqual("You have 62.581 of this planet's years left to live.");
  });

  test("should return a string stating the user's remaining life expectancy in the given planet's years", () => {
    currentUser.updateLifeExpectancy(calc.chad);
    expect(calc.yearsLeft(currentUser.age, currentUser.lifeExpectancy, calc.mars)).toEqual("You have 11.809 of this planet's years left to live.");
  });

  test("should return a string stating the user's remaining life expectancy in the given planet's years", () => {
    currentUser.updateLifeExpectancy(calc.belgium);
    expect(calc.yearsLeft(currentUser.age, currentUser.lifeExpectancy, calc.jupiter)).toEqual("You have 4.182 of this planet's years left to live.");
  });

  test("should return a string stating how long the user has lived beyond their life expectancy in the given planet's years", () => {
    oldUser.updateLifeExpectancy(calc.chile);
    expect(calc.yearsLeft(oldUser.age, oldUser.lifeExpectancy, calc.jupiter)).toEqual("You have lived 0.911 of this planet's years beyond your life expectancy.");
  });

  test("should return a string stating how long the user has lived beyond their life expectancy in the given planet's years", () => {
    expect(calc.yearsLeft(oldUser.age, oldUser.lifeExpectancy, calc.mars)).toEqual("You have lived 9.681 of this planet's years beyond your life expectancy.");
  });

  test("should return a string stating how long the user has lived beyond their life expectancy in the given planet's years", () => {
    oldUser.updateLifeExpectancy(calc.nicaragua);
    expect(calc.yearsLeft(oldUser.age, oldUser.lifeExpectancy, calc.venus)).toEqual("You have lived 26.613 of this planet's years beyond your life expectancy.");
  });

  test("should return a string stating how long the user has lived beyond their life expectancy in the given planet's years", () => {
    oldUser.updateLifeExpectancy(calc.northMacedonia);
    expect(calc.yearsLeft(oldUser.age, oldUser.lifeExpectancy, calc.mercury)).toEqual("You have lived 63.333 of this planet's years beyond your life expectancy.");
  });

  test("should return a string stating 'Watch your back.' if the user's age matches the user's life expectancy", () => {
    otherUser.updateLifeExpectancy(calc.iceland);
    expect(calc.yearsLeft(otherUser.age, otherUser.lifeExpectancy, calc.mars)).toEqual("Watch your back.");
  });

}); 