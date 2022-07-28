
    document.write("Hello Deary! ")


    document.write( "The tempature is 10" +5+" her in Lousiana. ");
    
    document.write("\"To "+ 2E310 + " and Beyond\"! ");

    document.write("\"From "+ -3E310+" and back\".")

    function a(){
    document.getElementById("1").innerHTML=(1+2==3);
}
    function B(){
    x=" the secrect of life  ",
    y=42,
    document.getElementById("2").innerHTML=( x===y);
}
   function C(){  
    document.getElementById("3").innerHTML=(32>5 && 5>4);
}
    function D(){
    document.getElementById("4").innerHTML=(32<5 || 5<6);
}
    function E(){
        document.getElementById("5").innerHTML=!(5>10);
}
    function F(){
        document.getElementById("6").innerHTML=(5<10);
}        
    function G(){
        document.getElementById("7").innerHTML=(10>5);
}