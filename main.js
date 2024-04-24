'use strict'

const everyKm = 0.21;
let kilometers = prompt();
let age = prompt();

let price = kilometers * everyKm;

document.getElementById('prezzo').innerHTML = price + '$';
console.log(price);
