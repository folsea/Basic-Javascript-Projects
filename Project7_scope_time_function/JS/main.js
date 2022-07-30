var x= 5;//glodable variable 

function Adding(){
    document.write(10+x+"<br>");
}

function Adding2(){
    document.write(x+50+"</br>");
}

Adding();
Adding2();

function Adding3(){
    var z=5; // local vatiable 
    document.write(10+x+"<br>");
}
function Adding4(){
    document.write(z+50);
}

Adding3();
Adding4();

//intentional error 
function Adding5(){ 
    var y=5;
    console.log(10+y);
}
function adding6(){
    console.log(y+50);
}

Adding5();
adding6();