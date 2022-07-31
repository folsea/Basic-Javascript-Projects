function sent(){// puts parts together
    var part_1= "Here ";
    var part_2= "we ";
    var part_3= "go";
    var part_4= "!";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("con").innerHTML=Whole_sentence;
}

function slice_Method(){ //only shows specifice area of a string 
    var sent=" Let us see what this does,";
    var section= sent.slice( 8,12);
    document.getElementById("Slice").innerHTML=section;
}


function up(){// capitalizes all letters 
    var x= "fire";
    var result= x.toUpperCase();
    document.getElementById("1up").innerHTML= result;
}


function search(){// shows a where a variable is 
    var searc= "Mama Roze, Fire Bug BB, and GiGi"
    var position= searc.search("Fire Bug BB");

    document.getElementById("sear").innerHTML= position;

}

function string(){  // basic numbers of 
    var x=1982;
    document.getElementById("num").innerHTML= x.toString();
}

function prem(){ // precision a set number or places 
    var x=3.14159265358979328462643383279502884197;
    document.getElementById("pre").innerHTML= x.toPrecision(3);
}

function fix(){ // fixed how many decimals behind 
    var x=3.14159265358979328462643383279502884197;
    var n= x.toFixed(4);
    document.getElementById("fixed").innerHTML= n;
}