/*Personal Message: Store a person’s name in a variable,and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
*/


let first_name="Humza";

let message_El=document.getElementById("showMessage");

message_El.innerText=`Hello ${first_name}, would you like to learn some Python today?`;

console.log(`Hello ${first_name}, would you like to learn some Python today?`)