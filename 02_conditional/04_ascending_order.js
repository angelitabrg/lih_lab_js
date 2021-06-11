/*

Exercício 5 - Verificando ordenação
Receba 3 números inteiros na entrada e imprima

crescente

se eles forem dados em ordem crescente. Caso contrário, imprima 

não está em ordem crescente

*/

const prompt = require('prompt-sync')();

var number1 = prompt("Enter the first number: ");
var number2 = prompt("Enter the second number: ");
var number3 = prompt("Enter the third number: ");

if( (number1<number2) && (number2<number3) ){
    console.log("Ascending order!");
}else{
    console.log("It's not in ascending order!");
}
