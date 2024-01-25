/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* function area(l1, l2){
    return l1 * l2
}

console.log(area(2,3)); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* function crazySum(num1, num2){
    if (num1 != num2) {
       return  num1 + num2
    } else {if (num1 === num2) {
        return (num1 + num2) * 3
    }
        
    } 
}

console.log(crazySum(1, 2)); */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* function crazyDiff(num1){
    if (Math.abs(num1 - 19) < 19) {
        return Math.abs(num1 - 19)
    } else {if (Math.abs(num1 - 19) > 19) {
        return Math.abs((num1 - 19) * 3)
    }
        
    }
}

console.log(crazyDiff(-21)); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


/* function boundary(n) {
    if ((n > 20 && n <= 100) || n === 400) {
        return 'true'
    }
    
}

console.log(boundary(400)); */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


/* function epify(str) {

    if (str === "EPICODE") {
        return str
    } else {
        return "EPICODE " + str
    }
}

console.log(epify("prova")); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


/* function check3and7(num1) {
    if (num1 < 0) {
        return console.log('Il numero inserito è negativo');
    }
    
    if (num1 % 3 === 0 && num1 % 7 === 0) {
        return console.log('Il numero è multiplo di 3 e 7');
    } else {
        if (num1 % 3 === 0) {
            return console.log('Il numero inserito è un multiplo di 3');
        }else{
            if (num1 % 7 === 0) {
                return console.log('Il numero inserito è un multiplo di 7');
            }else{
                return console.log('Il numero inserito non è un multiplo di 3 o 7');
            }
        }
    }
}

console.log(check3and7(49)); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString('epicode')); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

 /*function upperFirst(str) {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].split("")
        str[i][0] = str[i][0].toUpperCase()
        str[i] = str[i].join("")
    }
    return str = str.join(" ")
    
}

console.log(upperFirst('ciao mi chiamo samuele'));*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* function cutString(str) {
    str = str.split("")
    str.splice(0,1)
    str.splice(-1,1)
    return str = str.join("")
}

console.log(cutString('hello')); */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/


/* function giveMeRandom(n) {

    let arrNumCas = []

    for (let i = 0; i < n; i++) {
        let numCas = Math.floor(Math.random() * 11)
        arrNumCas[i] = numCas
    }
    return arrNumCas
}

console.log(giveMeRandom(1000)); */
