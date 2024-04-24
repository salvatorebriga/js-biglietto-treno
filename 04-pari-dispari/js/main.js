'use strict'

let SceltaUtentePariDispari = prompt('Scegli pari o dispari').toLowerCase();
console.log(SceltaUtentePariDispari);

if(SceltaUtentePariDispari === 'pari' || SceltaUtentePariDispari === 'dispari'){

    let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 9'));

    if(numeroUtente < 10 && numeroUtente > 0){
        console.log('il tuo numero: ' + numeroUtente);

        let numeroComputer = Math.floor(Math.random() * 9 + 1);
        console.log('il numero del computer: ' + numeroComputer);

        let totaleNumero = numeroUtente + numeroComputer;
        console.log('la somma: ' + totaleNumero);

        let risultatoPariDispari = totaleNumero % 2;

        if(risultatoPariDispari === 0 && SceltaUtentePariDispari === 'pari'){
            console.log('vince utente');
        }else if(risultatoPariDispari !== 0 && SceltaUtentePariDispari === 'dispari'){
            console.log('vince utente');
        }else{
            console.log('vince computer');
        }
    }else{
        console.log('inserisci un numero da 1 a 9 perfavore!!');
    } 
}else{
    console.log('occhio a come scrivi!! Riprova');
}

