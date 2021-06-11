/*

Exercícios 2 - FizzBuzz parcial, parte 1
Receba um número inteiro na entrada e imprima 

Fizz

 se o número for divisível por 3. Caso contrário, imprima o mesmo número que foi dado na entrada.

Exercícios 3 - FizzBuzz parcial, parte 2
Receba um número inteiro na entrada e imprima

Buzz

se o número for divisível por 5. Caso contrário, imprima o mesmo número que foi dado na entrada.

Exercícios 4 - FizzBuzz parcial, parte 3
Receba um número inteiro na entrada e imprima

FizzBuzz

na saída se o número for divisível por 3 e por 5. Caso contrário, imprima o mesmo número que foi dado na entrada.

*/

const prompt = require('prompt-sync')();

var number = prompt("Enter the number: ");

if( (number%3 == 0) && (number%5 == 0) ){
    console.log("FizzBuzz");
}else if(number%3 == 0){
    console.log("Fizz");
}else if(number%5 == 0){
    console.log("Buzz");
}else{
    console.log(number);
}