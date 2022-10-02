let message_El=document.getElementById("showMessage");
let txt="";
first_name = "humza";
lowerCase_firstName=first_name.toLowerCase();
upperCase_firstName=first_name.toUpperCase();
message_El.innerText=`LowerCase: ${lowerCase_firstName} UpperCase: ${upperCase_firstName}`;

console.log(lowerCase_firstName);
console.log(upperCase_firstName);