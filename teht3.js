"use strict";
const n1 = parseInt(prompt("First number"));
const n2 = parseInt(prompt("Second number"));
const n3 = parseInt(prompt("Third number"));

let sum = n1 + n2 + n3;
let multiply = n1 * n2 * n3;
let average = sum / 3;

document.querySelector("#response").innerHTML = "Summa: " + sum + "<br>" + "Tulo: " + multiply + "<br>" + "Keskiarvo: " + average;