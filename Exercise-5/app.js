/* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message. 
Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.” */

let famous_person="Allama Iqbal";

message="Failure is not fatal until we surrender trying again is the key of glorious victory";

let message_el=document.getElementById("showMessage");

message_el.innerText=`${famous_person} once said, ${message}`;

console.log(`${famous_person} once said, ${message}`)