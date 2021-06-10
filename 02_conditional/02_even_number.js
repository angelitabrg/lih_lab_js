const prompt = require('prompt-sync')();

var number = prompt("Enter the number: ");

if(number%2 == 0){
    console.log("It's an even number!");

}else{
    console.log("It's an odd number!");
}
