/*

Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/


const invited = [
    'Ciro',
    'Pasqualino',
    'Concetta',
    'Zi Toton'
]


const userName = prompt('Mi dica il suo nome');


/*

//ciclare nell'array
for (let i = 0; i < invited.length; i++) {
    const userNameValid = invited[i];
    console.log(userNameValid);
    
    if (userName == userNameValid) {
        console.log('Benvenuto alla festa');
    }
}

*/

let hasAcces = false;
    //creare un ciclo per il controllo della mai
    for (let i = 0; i < invited.length; i++) {
        console.log(invited[i]);
        if (userName == invited[i]) {
           hasAcces = true;
        }
        
    }

    if (hasAcces) {

        
        console.log('Benvenuto alla festa');

    } else {

        
        console.log('Guardie!');
    }


let hasAcces2 = false;
    //creare un ciclo per il controllo della mai
    let j = 0
    while (j < invited.length) {
        console.log(invited[j]);
        if (userName == invited[j]) {
           hasAcces = true;
        }

        j++
        
    }

    if (hasAcces) {

        
        console.log('Benvenuto alla festa');

    } else {

        
        console.log('Guardie!');
    }
