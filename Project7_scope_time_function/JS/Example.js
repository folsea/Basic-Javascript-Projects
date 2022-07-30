function get_Date(){
   if (new Date().getHours()<12){
    Greetings = "How are you this morning?";
   }
   else{
   Greetings= "How are you this evening";
}
    document.getElementById("Greeting").innerHTML=Greeting;
}


function Age_function(){
    Age= document.getElementById("Age").value;
    if (Age<=17){
        sign_up="You need a gaurdian to sign up";
    }
    else{ 
        sign_up="Please, Proceed.";
    }
        document.getElementById("age").innerHTML= sign_up;
}

function Time_function(){
    var Time= new Date().getHours();
    var Reply;
    if(Time<12==Time>0){
        Reply ="Good morning";
    }
    else if (Time>=12==Time<18){
        Reply="Good afternoon.";
    }
    else{ 
        Reply= "good night.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}