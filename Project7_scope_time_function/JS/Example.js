// basic get the time function
function get_Date(){
   if (new Date().getHours()<12){
    Greetings = "How are you this morning?";
   }
    document.getElementById("Greeting").innerHTML=Greeting; 
}

// age verifcaiton type thing so kids do not sign up with adult aproval
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

//Function based off what time of day it is 
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