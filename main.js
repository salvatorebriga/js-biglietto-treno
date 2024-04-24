'use strict'

const everyKm = 0.21;
let kilometers = prompt();
let age = prompt();

let price = kilometers * everyKm;

if(age < 18){
    price -= (price * 20) / 100;
}else if(age > 65){
    price -= (price * 40) / 100;
}

document.getElementById('prezzo').innerHTML = price.toFixed(2) + '$';
console.log(price.toFixed(2));
