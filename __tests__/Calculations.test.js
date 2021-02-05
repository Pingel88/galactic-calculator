import Calculations from "./../src/js/Calculations.js";
import User from "./../src/js/User.js";

describe("Calculations", () => {
  let calcs;
  let currentUser;

  beforeEach(() => {
    calcs = new Calculations();
    currentUser = new User("Mike", 32);
  });

  test("should return a float of the difference between Mercury's and Earth's orbit in the form of a ratio", () => {
    expect(calcs.mercuryYear).toEqual(0.24);
  });

  test("should return a float of the difference between Venus' and Earth's orbit in the form of a ratio", () => {
    expect(calcs.venusYear).toEqual(0.62);
  })

  test("should return a float of the difference between Mars' and Earth's orbit in the form of a ratio", () => {
    expect(calcs.marsYear).toEqual(1.88);
  })

  test("should return a float of the difference between Jupiter's and Earth's orbit in the form of a ratio", () => {
    expect(calcs.jupiterYear).toEqual(11.86);
  })
  
    test("should return a float or integer of the life expectancy of the country in years", () => {
      expect(calcs.afghanistan).toEqual(64.8);
      expect(calcs.albania).toEqual(78.6);
      expect(calcs.algeria).toEqual(76.9);
      expect(calcs.andorra).toEqual(81.9);
      expect(calcs.angola).toEqual(61.2);
      expect(calcs.antiguaAndBarbuda).toEqual(77);
      expect(calcs.argentina).toEqual(76.7);
      expect(calcs.armenia).toEqual(75.1);
      expect(calcs.australia).toEqual(83.4);
      expect(calcs.austria).toEqual(81.5);
      expect(calcs.azerbaijan).toEqual(73);
      expect(calcs.bahamas).toEqual(73.9);
      expect(calcs.bahrain).toEqual(77.3);
      expect(calcs.bangladesh).toEqual(72.6);
      expect(calcs.barbados).toEqual(79.2);
      expect(calcs.belarus).toEqual(74.8);
      expect(calcs.belgium).toEqual(81.6);
      expect(calcs.belize).toEqual(74.6);
      expect(calcs.benin).toEqual(61.8);
      expect(calcs.bhutan).toEqual(71.7);
      expect(calcs.bolivia).toEqual(71.5);
      expect(calcs.bosniaAndHerzegovina).toEqual(77.4);
      expect(calcs.botswana).toEqual(69.6);
      expect(calcs.brazil).toEqual(75.9);
      expect(calcs.brunei).toEqual(75.9);
      expect(calcs.bulgaria).toEqual(75.1);
      expect(calcs.burkinaFaso).toEqual(61.6);
      expect(calcs.burundi).toEqual(61.6);
      expect(calcs.caboVerde).toEqual(73);
      expect(calcs.cambodia).toEqual(69.8);
      expect(calcs.cameroon).toEqual(59.3);
      expect(calcs.canada).toEqual(82.4);
      expect(calcs.centralAfricanRepublic).toEqual(53.3);
      expect(calcs.chad).toEqual(54.2);
      expect(calcs.chile).toEqual(80.2);
      expect(calcs.colombia).toEqual(77.3);
      expect(calcs.comoros).toEqual(64.3);
      expect(calcs.congoDemocraticRepublicOfThe).toEqual(60.7);
      expect(calcs.congoRepublicOf).toEqual(64.6);
      expect(calcs.costaRica).toEqual(80.3);
      expect(calcs.coteDivoire).toEqual(57.8);
      expect(calcs.croatia).toEqual(78.5);
      expect(calcs.cuba).toEqual(78.8);
      expect(calcs.cyprus).toEqual(81);
      expect(calcs.czechRepublic).toEqual(79.4);
      expect(calcs.denmark).toEqual(80.9);
      expect(calcs.djibouti).toEqual(67.1);
      expect(calcs.dominica).toEqual(78.2);
      expect(calcs.dominicanRepublic).toEqual(74.1);
      expect(calcs.ecuador).toEqual(77);
      expect(calcs.egypt).toEqual(72);
      expect(calcs.elSalvador).toEqual(73.3);
      expect(calcs.equatorialGuinea).toEqual(58.7);
      expect(calcs.eritrea).toEqual(66.3);
      expect(calcs.estonia).toEqual(78.8);
      expect(calcs.eswatini).toEqual(60.2);
      expect(calcs.ethiopia).toEqual(66.6);
      expect(calcs.federatedStatesOfMicronesia).toEqual(67.9);
      expect(calcs.fiji).toEqual(67.4);
      expect(calcs.finland).toEqual(81.9);
      expect(calcs.france).toEqual(82.7);
      expect(calcs.gabon).toEqual(66.5);
      expect(calcs.gambia).toEqual(62.1);
      expect(calcs.georgia).toEqual(73.8);
      expect(calcs.germany).toEqual(81.3);
      expect(calcs.ghana).toEqual(64.1);
      expect(calcs.greece).toEqual(82.2);
      expect(calcs.grenada).toEqual(72.4);
      expect(calcs.guatemala).toEqual(74.3);
      expect(calcs.guinea).toEqual(61.6);
      expect(calcs.guineaBissau).toEqual(58.3);
      expect(calcs.guyana).toEqual(69.9);
      expect(calcs.haiti).toEqual(64);
      expect(calcs.honduras).toEqual(75.3);
      expect(calcs.hongKong).toEqual(84.9);
      expect(calcs.hungary).toEqual(76.9);
      expect(calcs.iceland).toEqual(83);
      expect(calcs.india).toEqual(69.7);
      expect(calcs.indonesia).toEqual(71.7);
      expect(calcs.iran).toEqual(76.7);
      expect(calcs.iraq).toEqual(70.6);
      expect(calcs.ireland).toEqual(82.3);
      expect(calcs.israel).toEqual(83);
      expect(calcs.italy).toEqual(83.5);
      expect(calcs.jamaica).toEqual(74.5);
      expect(calcs.japan).toEqual(84.6);
      expect(calcs.jordan).toEqual(74.5);
      expect(calcs.kazakhstan).toEqual(73.5);
      expect(calcs.kenya).toEqual(66.7);
      expect(calcs.kiribati).toEqual(68.4);
      expect(calcs.kuwait).toEqual(75.5);
      expect(calcs.kyrgyzstan).toEqual(71.5);
      expect(calcs.laos).toEqual(67.9);
      expect(calcs.latvia).toEqual(75.3);
      expect(calcs.lebanon).toEqual(78.9);
      expect(calcs.lesotho).toEqual(54.3);
      expect(calcs.liberia).toEqual(64.1);
      expect(calcs.libya).toEqual(72.9);
      expect(calcs.liechtenstein).toEqual(80.7);
      expect(calcs.lithuania).toEqual(75.9);
      expect(calcs.luxembourg).toEqual(82.3);
      expect(calcs.madagascar).toEqual(67);
      expect(calcs.malawi).toEqual(64.3);
      expect(calcs.malaysia).toEqual(76.2);
      expect(calcs.maldives).toEqual(78.9);
      expect(calcs.mali).toEqual(59.3);
      expect(calcs.malta).toEqual(82.5);
      expect(calcs.marshallIslands).toEqual(74.1);
      expect(calcs.mauritania).toEqual(64.9);
      expect(calcs.mauritius).toEqual(75);
      expect(calcs.mexico).toEqual(75.1);
      expect(calcs.moldova).toEqual(71.9);
      expect(calcs.mongolia).toEqual(69.9);
      expect(calcs.montenegro).toEqual(76.9);
      expect(calcs.morocco).toEqual(76.7);
      expect(calcs.mozambique).toEqual(60.9);
      expect(calcs.myanmar).toEqual(67.1);
      expect(calcs.namibia).toEqual(63.7);
      expect(calcs.nepal).toEqual(70.8);
      expect(calcs.netherlands).toEqual(82.3);
      expect(calcs.newZealand).toEqual(82.3);
      expect(calcs.nicaragua).toEqual(74.5);
      expect(calcs.niger).toEqual(62.4);
      expect(calcs.nigeria).toEqual(54.7);
      expect(calcs.northMacedonia).toEqual(75.8);
      expect(calcs.norway).toEqual(82.4);
      expect(calcs.oman).toEqual(77.9);
      expect(calcs.pakistan).toEqual(67.3);
      expect(calcs.palau).toEqual(73.9);
      expect(calcs.palestine).toEqual(74.1);
      expect(calcs.panama).toEqual(78.5);
      expect(calcs.papuaNewGuinea).toEqual(64.5);
      expect(calcs.paraguay).toEqual(74.3);
      expect(calcs.peoplesRepublicOfChina).toEqual(76.9);
      expect(calcs.peru).toEqual(76.7);
      expect(calcs.philippines).toEqual(71.2);
      expect(calcs.poland).toEqual(78.7);
      expect(calcs.portugal).toEqual(82.1);
      expect(calcs.qatar).toEqual(80.2);
      expect(calcs.romania).toEqual(76.1);
      expect(calcs.russia).toEqual(72.6);
      expect(calcs.rwanda).toEqual(69);
      expect(calcs.saintKittsAndNevis).toEqual(74.8);
      expect(calcs.saintLucia).toEqual(76.2);
      expect(calcs.saintVincentAndTheGrenadines).toEqual(72.5);
      expect(calcs.samoa).toEqual(73.3);
      expect(calcs.saoTomeAndPrincipe).toEqual(70.4);
      expect(calcs.saudiArabia).toEqual(75.1);
      expect(calcs.senegal).toEqual(67.9);
      expect(calcs.serbia).toEqual(76);
      expect(calcs.seychelles).toEqual(73.4);
      expect(calcs.sierraLeone).toEqual(54.7);
      expect(calcs.singapore).toEqual(83.6);
      expect(calcs.slovakia).toEqual(77.5);
      expect(calcs.slovenia).toEqual(81.3);
      expect(calcs.solomonIslands).toEqual(73);
      expect(calcs.southAfrica).toEqual(64.1);
      expect(calcs.southKorea).toEqual(83);
      expect(calcs.southSudan).toEqual(57.9);
      expect(calcs.spain).toEqual(83.6);
      expect(calcs.sriLanka).toEqual(77);
      expect(calcs.sudan).toEqual(65.3);
      expect(calcs.suriname).toEqual(71.8);
      expect(calcs.sweden).toEqual(82.8);
      expect(calcs.switzerland).toEqual(83.8);
      expect(calcs.syria).toEqual(72.7);
      expect(calcs.tajikistan).toEqual(71.1);
      expect(calcs.tanzania).toEqual(65.5);
      expect(calcs.thailand).toEqual(77.2);
      expect(calcs.timorLeste).toEqual(69.5);
      expect(calcs.togo).toEqual(61);
      expect(calcs.tonga).toEqual(70.9);
      expect(calcs.trinidadAndTobago).toEqual(73.6);
      expect(calcs.tunisia).toEqual(76.7);
      expect(calcs.turkey).toEqual(77.7);
      expect(calcs.turkmenistan).toEqual(68.2);
      expect(calcs.uganda).toEqual(63.4);
      expect(calcs.ukraine).toEqual(72.1);
      expect(calcs.unitedArabEmirates).toEqual(78);
      expect(calcs.unitedKingdom).toEqual(81.3);
      expect(calcs.unitedStates).toEqual(78.9);
      expect(calcs.uruguay).toEqual(77.9);
      expect(calcs.uzbekistan).toEqual(71.7);
      expect(calcs.vanuatu).toEqual(70.5);
      expect(calcs.venezuela).toEqual(72.1);
      expect(calcs.vietnam).toEqual(75.4);
      expect(calcs.yemen).toEqual(66.1);
      expect(calcs.zambia).toEqual(63.9);
      expect(calcs.zimbabwe).toEqual(61.5);
      expect(calcs.otherWorldAverage).toEqual(72.8);
  })

  test("should return the user's age as a number in Mercury years", () => {
    expect(calcs.planetAge(currentUser, calcs.mercuryYear)).toEqual(133.333);
  })

  test("should return the user's age as a number in Venus years", () => {
    expect(calcs.planetAge(currentUser, calcs.venusYear)).toEqual(51.613);
  })

  test("should return the user's age as a number in Mars years", () => {
    expect(calcs.planetAge(currentUser, calcs.marsYear)).toEqual(17.021);
  })

  test("should return the user's age as a number in Jupiter years", () => {
    expect(calcs.planetAge(currentUser, calcs.jupiterYear)).toEqual(2.698);
  })
  
}); 