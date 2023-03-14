const firstNumber = prompt('inserisci un numero');

const secondNumber = prompt('inserisci un altro numero');

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber) {
    console.log(secondNumber);
} else {
    console.log('nobody');
}