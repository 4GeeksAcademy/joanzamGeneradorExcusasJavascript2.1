/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
    function getRandomNumber(lista) {
let tamanoLista = lista.length
      let numero = Math.random()
      let indiceWho = Math.floor(Math.random() * tamanoLista);
      let excuse = wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;
      return excuse;
    }

  /**
   * 1.Generar de cada lista una palabra aleatoria
   * 2.Concatenar las palabras
   * 3 Mostra en pantalla
   */
};
 const generateExcuse = () => {
    let decimalRandom = Math.random();
    let indiceWho = Math.floor(decimalRandom * who.length);
    let indiceAction = Math.floor(decimalRandom * action.length);
    let indiceWhat = Math.floor(decimalRandom * what.length);
    let indiceWhen = Math.floor(decimalRandom * when.length);
    let wordWho = who[indiceWho];
    let wordAction = action[indiceAction];
    let wordWhat = what[indiceWhat];
    let wordWhen = when[indiceWhen];

    let excuse = wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;
    return excuse;
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();
};