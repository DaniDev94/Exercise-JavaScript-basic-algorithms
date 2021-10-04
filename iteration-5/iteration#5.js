const num1 = 10;
const num2 = 20;
const num3 = 2;
/*1.1------------------------------------------------------------------------>*/
if (num1 === 10) {
  console.log("1--> number1 es estrictamente igual a 10");
}

/*1.2------------------------------------------------------------------------>*/
if (num2 / num1 == 2) {
  console.log("2--> number2 dividido entre number1 es igual a 2");
}

// /*1.3------------------------------------------------------------------------>*/
if (num1 !== num2) {
  console.log("3--> number1 es estrictamente distinto a number2");
}

// /*1.4------------------------------------------------------------------------>*/
if (num3 != num1) {
  console.log("4--> number3 es distinto number1");
}

// /*1.5------------------------------------------------------------------------>*/
if (num3 * 5 == num1) {
  console.log("5--> number3 por 5 es igual a number1");
}

// /*1.6------------------------------------------------------------------------>*/
if ((num3 * 5 == num1) && (num1 * 2 == num2)){
  console.log("6--> number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

// /*1.7------------------------------------------------------------------------>*/
if ((num2 / 2 == num1) || (num1 / 5 == num3)) {
  console.log("7--> number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
