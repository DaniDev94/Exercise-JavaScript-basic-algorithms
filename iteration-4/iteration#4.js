/*1.1------------------------------------------------------------------------>*/
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// console.log(avengers[0]);
/*1.2------------------------------------------------------------------------>*/
avengers[0] = "IRONMAN";
// console.log(avengers);
/*1.3------------------------------------------------------------------------>*/
// console.log(avengers.length);
/*1.4------------------------------------------------------------------------>*/
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
// console.log(rickAndMortyCharacters);
// console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1])
// console.log(rickAndMortyCharacters[4]); Si añadimos mas elementos al array no es valido
/*1.5------------------------------------------------------------------------>*/
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
// console.log(rickAndMortyCharacters);
let elementFirstAndLast = rickAndMortyCharacters2[0] + ' ' + rickAndMortyCharacters2[4];
// console.log(elementFirstAndLast);
/*1.6------------------------------------------------------------------------>*/
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters3.splice(1,1);//Elimina indicando la posición.
// console.log(rickAndMortyCharacters3);
let newArray = rickAndMortyCharacters3.slice(1,5);//Crea una copia de una parte del array indicando la posición. 
// console.log(newArray);






