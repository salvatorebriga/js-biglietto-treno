'use strict'

const everyKm = 0.21;
let kilometers = prompt('Inserisci i kilometri');
let age = prompt("inserisci l'età");

let price = kilometers * everyKm;
console.log(price.toFixed(2));

if(age < 18 && age != 0){
    price = price - ((price * 20) / 100);
    document.getElementById('prezzo').innerHTML = price.toFixed(2) + '$' + ' sconto giovani del 20%';
}else if(age > 65 && age < 110){
    price = price - ((price * 40) / 100);
    document.getElementById('prezzo').innerHTML = price.toFixed(2) + '$' + ' sconto over 65 del 40%';
}
else{
    document.getElementById('prezzo').innerHTML = price.toFixed(2) + '$';
}

console.log(price.toFixed(2));
