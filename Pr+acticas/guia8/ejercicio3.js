// Ejercicio 3: Suma de dos números ingresados por el usuario
// 1. Pide al usuario que ingrese dos números.
// 2. Suma ambos números.
// 3. Muestra el resultado.

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingresá el primer número: "));
let num2 = parseFloat(prompt("Ingresá el segundo número: "));
let suma = num1 + num2;

console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);