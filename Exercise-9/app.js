/*Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.*/

let favorite_number=10;

message="My Favorite Number is: " + favorite_number;

let message_el=document.getElementById("showMessage");

message_el.innerText=`${message}`;
