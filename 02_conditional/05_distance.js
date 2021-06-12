const prompt = require('prompt-sync')();

var ax = prompt("Enter the x coordinate of point A: ");
var ay = prompt("Enter the y coordinate of point A: ");
var bx = prompt("Enter the x coordinate of point B: ");
var by = prompt("Enter the y coordinate of point B: ");

var distance = Math.sqrt( (bx - ax **2) + (by - ay **2) );

if(distance >= 10){
    console.log("Far away");

}else{
    console.log("Close");
}
