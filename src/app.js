/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function randomgenerador(listadepalabras) {
    const palabra =
      listadepalabras[Math.floor(Math.random() * listadepalabras.length)];

    return palabra;
  }

  const randomExcuse = () =>
    `${randomgenerador(who)} ${randomgenerador(action)} ${randomgenerador(
      what
    )} ${randomgenerador(when)} ${randomgenerador(and)}`;
  console.log(randomExcuse());

  function mostrarExcusa() {
    document.getElementById("generador").innerHTML = randomExcuse();
  }
};
