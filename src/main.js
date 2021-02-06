import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculations from './js/calculations.js';
import User from './js/user.js';

$("form#calculator").submit(function(event) {
  event.preventDefault();
  const calc = new Calculations();
  const user = new User($("input#name-form").val(), parseInt($("input#age-form").val()));
  const userPlanet = $("#planet").val();
  const userPlanetCapitalized = userPlanet.charAt(0).toUpperCase() + userPlanet.slice(1);
  user.updateLifeExpectancy(calc[$("#country").val()]);
  const planetAge = calc.planetConverter(user.age, calc[userPlanet]);
  const planetLifeExpectancy = calc.planetConverter(user.lifeExpectancy, calc[userPlanet]);
  const planetYearsLeft = calc.yearsLeft(user.age, user.lifeExpectancy, calc[userPlanet]);
  $("#name").text(user.name);
  $("#age").text(`${user.age} Earth years`);
  $("#life-expectancy").text(`${user.lifeExpectancy} Earth years`);
  $("#age-planet").text(`${planetAge} ${userPlanetCapitalized} years`);
  $("#life-expectancy-planet").text(`${planetLifeExpectancy} ${userPlanetCapitalized} years`);
  $("#life-expectancy-left").text(planetYearsLeft);
  $("#results").show();
});