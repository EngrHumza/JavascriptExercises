// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green";

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if(alien_color=="green"){
    console.log("player just earned 5 points")
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
function pass_test(){
    if(alien_color=="green"){
        // console.log("player just earned 5 points")
    }
    console.log(alien_color=="green", "passes the if test")    
}

pass_test();

function fail_test(){
    alien_color="red";
    if(alien_color=="green"){
        console.log("player just earned 5 points")
    }
    else{
        ;
    }    
}

fail_test();