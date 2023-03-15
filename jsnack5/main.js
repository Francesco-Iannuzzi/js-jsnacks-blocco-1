/*

Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

const numberOdd = [];
console.log(numberOdd);

let i = 0
while (i < 6) {
    let userNumber = Number(prompt('Inserisci un numero'));
    i++

    if (userNumber % 2 === 0) {
        console.log('Non posso inserirlo');

    } else {
        numberOdd.push(userNumber);
        console.log(numberOdd);
    }
}


for (let j = 0; j < 6; j++) {
    let userNumber = Number(prompt('Inserisci un numero'));
    

    if (userNumber % 2 === 0) {
        console.log('Non posso inserirlo');

    } else {
        numberOdd.push(userNumber);
        console.log(numberOdd);
    }
}