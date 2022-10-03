/*You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/

let addition = 5+3;

message=addition;

console.log("\n");
console.log(message);
console.log("\n");
console.log(message);
console.log("\n");
console.log(message);
console.log("\n");
console.log(message);



let message_el=document.getElementsByClassName("showMessage");

// console.log(message_el);

message_el[0].innerText=`console.log(5 + 3):${message}`;
message_el[1].innerText=`console.log(5 + 3):${message}`;
message_el[2].innerText=`console.log(5 + 3):${message}`;
message_el[3].innerText=`console.log(5 + 3):${message}`;
