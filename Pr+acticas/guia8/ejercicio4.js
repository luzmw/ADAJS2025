// Ejercicio 4: Determinar si un número es par o impar
// 1. Solicita al usuario que ingrese un número entero.
// 2. Determina si el número es par o impar.
// 3. Muestra un mensaje indicando el resultado.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresá un número entero: "));

if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}