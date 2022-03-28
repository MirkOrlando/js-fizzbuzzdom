/* Scrivi un programma che stampi in console i numeri da 1 a 100.
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

/* creare il ciclo per stampare i numeri da 1 a 100 */

for (let i = 1; i <= 100; i++) {
  let fizzBuzzElement = i;
  //console.log(i);

  /* verificare se i è multipo di 3 o di 5 o di 3 e 5 */
  if (fizzBuzzElement % 3 == 0 && fizzBuzzElement % 5 == 0) {
    fizzBuzzElement = "FizzBuzz";
  } else if (fizzBuzzElement % 5 == 0) {
    fizzBuzzElement = "Buzz";
  } else if (fizzBuzzElement % 3 == 0) {
    fizzBuzzElement = "Fizz";
  }

  /* stampare il risultato in console*/
  console.log(fizzBuzzElement);
}
