const prompt = require('prompt-sync')();

var name = prompt("Enter the name: ");
var month = prompt("Enter the expiration month: ");
var date = prompt("Enter the expiration date: ");
var amount = prompt("Enter the amount: ");

console.log("Hello " + name + ".");
console.log("Your invoice due on " + month + " " + date + " in the amount of $" + amount + " is closed.");