//MILESTONE 1
/*
Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Stampare in console.
*/

const boxContainer = document.querySelector('.box-container')
// Scrivo un programma che stampi i numeri da 1 a 100.
for(let i = 1; i <= 100; i++) {

    //Variabile per indicare sia multipli di 3 che di 5
    let FizzBuzz;
    
    // Per i multipli di 3 stampo Fizz al posto del numero e per i multipli di 5 stampo Buzz.
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

    // Stampato in console
    console.log(FizzBuzz);
}