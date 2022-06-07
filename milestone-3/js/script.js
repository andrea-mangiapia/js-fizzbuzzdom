// MILESTONE 3
/*
Per ogni numero, dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (seguendo le regole della Milestone 1).
Per questa Milestone avete lo screenshot allegato al messaggio.
*/


const boxContainer = document.querySelector('.box-container')
// Scrivo un programma che stampi i numeri da 1 a 100.
for(let i = 1; i <= 100; i++) {

    //Variabile per indicare sia multipli di 3 che di 5
    let FizzBuzz;

    // Dichiaro variabile "colore del box" in base alla variabile FizzBuzz
    let FizzBuzzBoxColor;

    
    // Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
    //Per i numeri che sono sia multipli di 3 che di 5 stampo FizzBuzz.

    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = 'FizzBuzz';
        FizzBuzzBoxColor = 'fizzbuzz';
    } else if (i % 3 === 0) {
        FizzBuzz = 'Fizz';
        FizzBuzzBoxColor = 'fizz';
    } else if (i % 5 === 0) {
        FizzBuzz = 'Buzz';
        FizzBuzzBoxColor = 'buzz';
    } else {
        FizzBuzz = i;
    }

    // Richiamo un elemento nel documento che corrisponde al selettore Css specificato
    const boxContainer = document.querySelector('.box-container');


    // Creo dei div box, assegnando variabile FixBuzzColor e variabile FizzBuzz
    const newBox = `<div class="box ${FizzBuzzBoxColor}">${FizzBuzz}</div>`;

    // Li contateniamo a boxContainer
    boxContainer.innerHTML += newBox;


}



