# Esercizio: pari o dispari

chiedere all'utente se vuole pari o dispari
e un numero intero compreso tra 1 e 9.
Generare un numero casuale compreso tra 1 e 9,
che sarà la giocata del computer.
Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

//prima cosa: dati di input

- definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispari //SceltaUtentePariDispari
- definisco una variabile con un valore di prompt 1-9 - numerico numero dell'utente (1/9) /numeroUtente
- definisco una variabile con un valore randomico tra 1 e 9 (valore del computer) /numeroComputer

- definisco una variabile con la somma di numeroUtente + numeroComputer = totaleNumero

- definisco una variabile che ci dice se il valore totaleNumero è pari o dispari //risultatoPariDispari

-SE (risultatoPariDispari === 0 (pari) && SceltaUtentePariDispari === 'pari'){
vince utente
ELSE SE (risultatoPariDispari !== 0 (dispari) && SceltaUtentePariDispari === 'dispari')
vince utente
ELSE
vince computer
