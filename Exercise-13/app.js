/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/

let transportation = ["cycle", "car", "jet", "motocycle", "aeroplane"];
let message = ["I would like to own a ", "I want to travel on ", "I want to own a ", "I want to travel whole world on ", "I want to own a "]
// let message_El=document.getElementById("showMessage");

// message_El.innerText=`I am: ${friends[0]} \n I am: ${friends[1]} \n I am: ${friends[2]} \n I am: ${friends[3]} \n I am: ${friends[4]}`;

function print_names(transportation){
    for(let i=0; i<transportation.length; i++){
        console.log(message[i] + transportation[i]);
    }
}

print_names(transportation);