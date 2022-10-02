/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
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

console.log("\n\n\n")

console.log(friends[3] + " will not be able to make it to the dinner")

console.log("\n\n\n")

friends.pop();

friends.push("Haider")

print_names(friends);