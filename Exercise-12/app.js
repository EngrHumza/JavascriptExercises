/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/

let friends = ["Humza", "Faisal", "Farhad", "Haris", "Talha"];

let message_El=document.getElementById("showMessage");

message_El.innerText=`I am: ${friends[0]} \n I am: ${friends[1]} \n I am: ${friends[2]} \n I am: ${friends[3]} \n I am: ${friends[4]}`;

function print_names(friends){
    for(let i=0; i<friends.length; i++){
        console.log("I am: " + friends[i]);
    }
}

print_names(friends);