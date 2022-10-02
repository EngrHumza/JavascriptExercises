/*Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/

let friends = ["Humza", "Faisal", "Farhad", "Haris", "Talha"];

let message_El=document.getElementById("showMessage");

message_El.innerText=`${friends[0]} \n ${friends[1]} \n ${friends[2]} \n ${friends[3]} \n ${friends[4]}`;

function print_names(friends){
    for(let i=0; i<friends.length; i++){
        console.log(friends[i]);
    }
}

print_names(friends);