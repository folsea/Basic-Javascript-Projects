function Vote_Function(){
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote= (Age<18) ? "You are not old enough":"You can";
    document.getElementById("Vote").innerHTML= Can_vote +" to vote.";
}

function RFFM(Name, Avatar,Role,hobby) {
    this.RFFM_Name=Name;// current screen name they go by 
    this.RFFM_Avatar=Avatar;// their cartoon icon discription
    this.RFFM_Role=Role;// chang roles in the group
    this.RFFM_hobby=hobby;//added or remove hobbies
}
var FireBugBB= new RFFM("Fire Bug BB", "Red and Blue Beetle/LadyBug", "Oldest Child Star", "Woodwork and video games");
var MamaRoze=   new RFFM("Mama Roze", "Blue and Red Buttterfly", " The oldest child's Mother", "Wood engraving, coloring, and fabric crafting");
var Gigi= new RFFM("GiGi","not decided","Grandmother to all the kids", "Mosaic and Resin works");
function member(){
    document.getElementById("mem").innerHTML = "BB's name is " + FireBugBB.RFFM_Name + " his avatart is " + FireBugBB.RFFM_Avatar + ". His role in the group is " + FireBugBB.RFFM_Role + " and his hobbies are " + FireBugBB.RFFM_hobby+".";
}

function member2() {
    document.getElementById("mem2").innerHTML = "AF's name is " + MamaRoze.RFFM_Name + " her avatart is " + MamaRoze.RFFM_Avatar + ". Her role in the group is " + MamaRoze.RFFM_Role + " and her hobbies are " + MamaRoze.RFFM_hobby + ".";
}

function nesting(){
    document.getElementById("Nested_Function").innerHTML =Count();
    function Count(){
        var Starting_point= 5;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}