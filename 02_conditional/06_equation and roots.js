var a = 1;
var b = 3;
var c = -4;

var delta = (b**2) - (4*a*c);

var x1 = (-b + Math.sqrt(delta)) / (2*a);
var x2 = (-b - Math.sqrt(delta)) / (2*a);

if(delta<0){
    console.log("This equation has no real roots.");

}else if(delta==0){
    console.log("The root of this equation is:", x1);

}else{
    
    if(x1>x2){
        console.log("The roots of this equation are x2=" + x2 + " x1=" + x1);
        
    }else{
        console.log("The roots of this equation are x1=" + x1 + " x2=" + x2);
    }

}