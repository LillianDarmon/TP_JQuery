var RandomNumber = Math.floor(Math.random() * 101);//creation of a random number

var InputValue = $("#value");
var TryRep = $("#TryRep");

function play_() {

    var Try_ = parseInt(InputValue.val());//the number inputed from the input is stored in this variable

    if (Try_ === RandomNumber) {//if the number guessed is correct 
        alert("Vous avez deviné le nombre.");
        TryRep.addClass("alertok");
        TryRep.removeClass("alert_h");
        TryRep.removeClass("alert_b");

    } else if (Try_ < RandomNumber) {//if the number guessed is too low 
        TryRep.text("trop bas.");
        TryRep.addClass("alert_b");
        TryRep.removeClass("alert_h");

    } else { //if the number guessed is too high 
        TryRep.text("trop haut");
        TryRep.addClass("alert_h");
        TryRep.removeClass("alert_b");
    }
    
}
function test_() {//test if the number trying to be inputed is over 100
    var Try_ = parseInt(InputValue.val());//the number inputed from the input is stored in this variable
    console.log(Try_)
if(Try_ > 100){
      alert("veuillez entrez un nombre inferieure à 100")  
      console.log(Try_)
}
}