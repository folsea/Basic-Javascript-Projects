function call_Loop(){  //counting length 
let text=" trying new codes";
let length= text.length;

document.getElementById("Loop").innerHTML= length;
}


var fam_mem=["Mama Roze", "GiGi", "Fire Bug BB"];//listing fmaily memebers 
var Content ="";
var Y;
function for_Loop(){
    for ( Y = 0; Y < fam_mem.length; Y++) {
        Content += fam_mem [Y] + "<br>";
    }
    document.getElementById("List_of_fam_mem").innerHTML=Content;
}

function Fire_Bug() {// firbug's hobby 
    var Fire_Bug_BB=[];
    Fire_Bug_BB[0]= "Oldest child";
    Fire_Bug_BB[1]= "red and blue Beetle/lady bug";
    Fire_Bug_BB[2]= "gamming";
    Fire_Bug_BB[3]= "soccer";
    document.getElementById("Fire_Bug_BB").innerHTML= "Fire bug BB's main hobby " + Fire_Bug_BB[2]+ ".";
}

function count_To_Ten(){  //basic counting
    var Digit="";
    var X=1;
    while (X<11){
        Digit += "<br>"+ X;
        X++;
    }
document.getElementById("Counting_to_Ten").innerHTML=Digit;
}


var member= "Fire_bug_BB"; //simple let code
document.write(member);
{
    let memeber= "Whose bug?";
    document.write("<br>" + memeber);
}
document.write("<br>"+ member);
