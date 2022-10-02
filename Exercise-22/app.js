/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

let friends = ["Faisal", "Farhad", "Haris", "Talha"];

let greeting = "Hi ";

let message = " I would like to invite you for dinner"

// let message_El=document.getElementById("showMessage");

// message_El.innerText=`I am: ${friends[0]} \n I am: ${friends[1]} \n I am: ${friends[2]} \n I am: ${friends[3]} \n I am: ${friends[4]}`;

function print_names(friends){
    for(let i=0; i<friends.length; i++){
        console.log(greeting + friends[i] + message);
    }
}

print_names(friends);

let x = friends[6];

console.log("\n\n\n")

if(x==undefined){
    console.log( x + " ----> Array Index Error");

    x= friends[3];

    console.log("\n");
    console.log(x + " will not be able to make it to the dinner")
}
