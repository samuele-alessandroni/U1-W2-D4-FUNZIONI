// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* function giveMeRandom(n) {

    let arrNumCas = []

    for (let i = 0; i < n; i++) {
        let numCas = Math.floor(Math.random() * 11)
        arrNumCas[i] = numCas
    }
    return arrNumCas
}



function checkArray(arrInput) {
    let sum = 0
    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i] > 5) {
            console.log('Il numero in posizione:', arrInput[i], 'è maggiore di 5');
            sum += arrInput[i]
        } else {if (arrInput[i] < 5) {
            console.log('Il numero in posizione:', arrInput[i], 'è minore di 5');
        }
            
        }
        
    }

    return console.log('La somma di tutti i numeri maggiori di 5 è:', sum);
}

console.log(checkArray(giveMeRandom(10))); */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/


 let shoppingCart = [
    {
        price: 60,
        name: 'jacket',
        id: 1230,
        quantity: 1,
    },
    {
        price: 25,
        name: 'pullover',
        id: 7895,
        quantity: 1,
    },
    {
        price: 30,
        name: 'jeans',
        id: 2140,
        quantity: 2,
    },
    {
        price: 15,
        name: 't-shirt',
        id: 4562,
        quantity: 3,
    }
]

function shoppingCartTotal(cart) {
    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
      totalPrice += (cart[i].price * cart[i].quantity)  
        
    }

    return totalPrice
}

console.log('Il prezzo totale del carrello è di:', shoppingCartTotal(shoppingCart), '€'); 

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
let blackTShirt = {
    price: 18,
    name: 't-shirt-black',
    id: 4564,
    quantity: 2,
}
function addToshoppingCart(newObj) {
    shoppingCart.push(newObj)
}

addToshoppingCart(blackTShirt)

console.log('Riepilogo ordini:',shoppingCart);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
    let x = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price > x) {
            x = shoppingCart[i].price
        }
        
    }
    
    let y = 0

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price === x) {
            return console.log("Questo è l'articolo di maggior valore:", shoppingCart[i]);
        }
    }
}

maxShoppingCart(shoppingCart)
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
    console.log("Questo è l'ultimo item del cart", shoppingCart.pop());
}

latestShoppingCart(shoppingCart)
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
