/*

Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

const numberOdd = [];
console.log(numberOdd);

const userNumber = Number(prompt('Dimmi un numero'));
console.log(userNumber);

if (userNumber  % 2 === 0) {
    console.log('Non posso inserirlo');
    
} else {
    numberOdd.push(userNumber);
    console.log(numberOdd);
}