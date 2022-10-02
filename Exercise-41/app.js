// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians_names = ["Humza", "Ali", "Haider"];

function show_magicians(magician){
    for(let i=0; i<magicians_names.length; i++){
        console.log(magicians_names[i]);
    }
}

show_magicians(magicians_names);