/* Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. */

let addition = 4+4;
let subtraction=12-4;
let multiplication=8*1;
let division=64/8;

message=`Addition: ${addition} Subtraction: ${subtraction} Multiplication: ${multiplication} Division: ${division}`;

let message_el=document.getElementById("showMessage");

message_el.innerText=`${message}`;

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)