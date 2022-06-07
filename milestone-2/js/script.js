//MILESTONE 2
/* 
Per ogni numero, data una ul nel DOM,
aggiungete un elemento html li con il numero o la stringa corretta
(seguendo le regole della Milestone 1).
*/

const boxContainer = document.querySelector('.box-container')
// Scrivo un programma che stampi i numeri da 1 a 100.
for(let i = 1; i <= 100; i++) {

    //Variabile per indicare sia multipli di 3 che di 5
    let FizzBuzz;

    // Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
    //Per i numeri che sono sia multipli di 3 che di 5 stampo FizzBuzz.

    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz = 'FizzBuzz';
    } else if (i % 3 === 0) {
        FizzBuzz = 'Fizz';
    } else if (i % 5 === 0) {
        FizzBuzz = 'Buzz';
    } else {
        FizzBuzz = i
    }

    // Richiamo un elemento nel documento che corrisponde al selettore css specificato:
    const boxList = document.querySelector('.am-list');

    // Aggiungo gli li all'interno di boxList
    const newList = `<li>${FizzBuzz}</li>`;
    boxList.innerHTML += newList;

}