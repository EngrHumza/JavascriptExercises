/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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

console.log("\n\n\n")

console.log("I found a bigger table for dinner")

friends.unshift("Adil");
// friends.splice()

function insert_element_middle(){
    if((friends.length%2)==0){
        let i = friends.length/2;
        friends.splice(i,0,"Kashif")
    }
    else{
        let i = Math.floor(friends.length/2)
        friends.splice(i,0,"Azeem")
    }
}

insert_element_middle();
print_names(friends)

console.log("\n\n\n")

friends.push("Sohaib")
print_names(friends);