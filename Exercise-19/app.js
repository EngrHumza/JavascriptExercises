// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

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

console.log("\n\n\n")

console.log("number of people invited for dinner: " + friends.length)

console.log("\n\n\n")
print_names(friends);
