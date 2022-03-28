/* Scrivi un programma che stampi in console i numeri da 1 a 100.
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

const squareContainerElement = document.querySelector(".square_container");

/* creare il ciclo per stampare i numeri da 1 a 100 */
for (let i = 1; i <= 100; i++) {
  let fizzBuzzElement = i;
  //console.log(i);
  const squareElement = document.createElement("div");
  squareElement.classList.add("square");
  squareElement.classList.add("bg-primary");

  /* verificare se i è multipo di 3 o di 5 o di 3 e 5 */
  if (fizzBuzzElement % 3 == 0 && fizzBuzzElement % 5 == 0) {
    fizzBuzzElement = "FizzBuzz";
    squareElement.classList.add("bg-danger");
  } else if (fizzBuzzElement % 5 == 0) {
    fizzBuzzElement = "Buzz";
    squareElement.classList.add("bg-warning");
  } else if (fizzBuzzElement % 3 == 0) {
    fizzBuzzElement = "Fizz";
    squareElement.classList.add("bg-success");
  }

  /* stampare il risultato*/
  //console.log(fizzBuzzElement);
  squareContainerElement.appendChild(squareElement).innerHTML = fizzBuzzElement;
}
