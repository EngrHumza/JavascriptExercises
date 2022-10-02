// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color = "green";

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if(alien_color=="green"){
    console.log("player just earned 5 points");
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if(alien_color!="green"){
    console.log("player just earned 10 points");
}

// • Write one version of this program that runs the if block and another that runs the else block.
// •Version:1
alien_color="green";

if(alien_color=="green"){
    console.log("player just earned 5 points");
}
else{
    console.log("player just earned 10 points");
}

// •Version:2
alien_color="red";

if(alien_color=="green"){
    console.log("player just earned 5 points");
}
else{
    console.log("player just earned 10 points");
}