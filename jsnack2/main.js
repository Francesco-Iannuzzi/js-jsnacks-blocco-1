/*

SNACK 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const firstWord = prompt('inserisci un parola');

const secondWord = prompt('inserisci un altra parola');

if (firstWord.length > secondWord.length) {
    console.log(`La prima parola "${firstWord}" è più lunga della seconda "${secondWord}"`);

} else if (secondWord.length > firstWord.length) {
    console.log(`La seconda parola "${secondWord}" è più lunga della prima "${firstWord}"`);

} else {
    console.log(`La prima parola "${firstWord}" è più lunga della seconda "${secondWord}"`);
}