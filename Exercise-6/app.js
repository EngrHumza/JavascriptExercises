/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */


let name_with_spaces="\tHumza\n Liaqat\t\n";

let striped = remove_space(name_with_spaces)

let message_el=document.getElementById("showMessage");

message_el.innerText=name_with_spaces + striped;

// message_el.innerText=`${name_with_spaces}  ${striped}`;

function remove_space(str){
    str=str.split("")
    for(let i=0; i<str.length; i++){
        if(str[i]=="\t" || str[i]=="\n"){
            str[i]=""
        }
    }
    str=str.join("")
    return str
}

console.log(name_with_spaces);

console.log(striped);