/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.*/


/*Personal Message: Store a person’s name in a variable,and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
*/

// Name Humza Liaqat
// Date:29/9/2022

//This program will print personal message

let first_name="Humza";

let message_El=document.getElementById("showMessage");

message_El.innerText=`Hello ${first_name}, would you like to learn some Python today?`;


/* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.*/

//This program will print quote by famous person

let famous_person1="Allama Iqbal";

let message1="Failure is not fatal until we surrender trying again is the key of glorious victory";

let message_el1=document.getElementById("showMessage1");

message_el1.innerText=`${famous_person1} once said, ${message1}`;
