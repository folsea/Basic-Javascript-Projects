var family= "Red Fire Family"; // name of family or company
var Child_1= "Fire Bug BB", Child_2= "Ryann", Child_3= "Nash", Mom="Mama Roze",Uncle="Uncle Dut", Grandma="GiGi", Grandpa="Peepaw", Pet_1="Fire Dog Duke", Pet_2="Earth Pup Milo"; // family name variables 

window.alert("Welcome from " + family); // open the webiste message 

function myFunction(){
    var sentence = Child_1+ ", " + Child_2 + ", "+ Child_3 +", "+ Mom+ ", " + Uncle + ", " + Grandma+ ", "+ Grandpa +", " + Pet_1 + ", and" + Pet_2 +"!";
    sentence += " come join us for crafts, gaming, learning, and general " + family + " fun!!!";
    document.getElementById("into").innerHTML = sentence;
}   // after the button is click this will display the neames of the people in the family or company along with a quick intro. 
