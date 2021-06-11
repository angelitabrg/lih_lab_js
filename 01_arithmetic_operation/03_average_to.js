const prompt = require('prompt-sync')();

var grade1 = prompt("Enter the first grade:");
var grade2 = prompt("Enter the second grade:");
var grade3 = prompt("Enter the third grade:");
var grade4 = prompt("Enter the fourth grade:");

var sum = parseInt(grade1) + parseInt(grade2) + parseInt(grade3) + parseInt(grade4);
var average = sum / 4;

console.log("The arithmetic average is: ", average);