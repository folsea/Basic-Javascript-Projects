window.alert(Welcome)// verify my java script page is connect to the html 

function my_Dictionary() {
    var BB = {
        Name:"Fire Bug BB",
        Avatar:"Red and blue beetle/ladybug",
        Age:"7",
        hobby:"video",
        sport:"soccer",
    };
    delete BB.Age;
    document.getElementById("fb1").innerHTML = BB.Name;
    document.getElementById("fb2").innerHTML = BB.Avatar;
    document.getElementById("fb3").innerHTML = BB.Age;
} 