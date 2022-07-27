window.alert(Math.random()*100);//I use this to verify the pages are link correctly 

// additio function 
function Addition() {
    var addition= 2+2;
    document.getElementById("add").innerHTML ="2+2="+ addition;
}
//subtraction function
function subtraction(){
    var Subtraction =5-2;
    document.getElementById("sub").innerHTML="5-2"+ Subtraction;
}
//multiplication function
function multiple(){
     var multiplication= 6*8;
     document.getElementById("mult").innerHTML="6x8="+ multiplication;
}
//division function
function division(){
    var division= 48/6;
    document.getElementById("Div").innerHTML="48/6=" + division;
}
// several steps
function more_math(){
    var multiple=(1+2)*10/2-5;
    document.getElementById("multi").innerHTML="1 plus 2, mulitplied by 10, divided in half and then subtracted by 5 equals" + multiple;
} 
//percentage
function modulus_Operation(){
    var percent= 25% 6;
    document.getElementById("per").innerHTML="When you divid 25 y 6 you have a remainder of:" + percent;
}
//negative function
function negative_num(){
    var  x=10;
    document.getElementById("neg").innerHTML = -x;
}
//decimal number
function dec(){ 
var y =5.25;
 y--;
 document.getElementById("x").innerHTML = y;
}

//adds 1 to what ver number you have
function con() { 
 var z=6;
 z++;
document.getElementById("y").innerHTML = z;
}