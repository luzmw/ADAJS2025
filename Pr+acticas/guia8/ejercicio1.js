// Ejercicio 1: Calcula el doble de un número
// 1. Solicita al usuario que ingrese un número cualquiera.
// 2. Calcula el doble de ese número.
// 3. Muestra el resultado en la consola.

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingresá un número: "));
let doble = numero * 2;

console.log("El doble de " + numero + " es: " + doble);
