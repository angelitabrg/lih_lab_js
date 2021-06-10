const prompt = require('prompt-sync')();

var number = prompt("Enter the corresponding value next to a square: ");

var perimeter = number * 4;
var area = number ** 2;

console.log("Perimeter:", perimeter, "Area:", area);
