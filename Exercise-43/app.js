// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians_names = ["Humza", "Ali", "Haider"];

function show_magicians(magicians){
    for(let i=0; i<magicians.length; i++){
        ;
    }
    console.log(magicians);
}

// show_magicians(magicians_names);

function make_great(magicians){
    let make_great_magicians=[];
    for(let i=0; i<magicians.length; i++){
        make_great_magicians.push("The Great" + " " + magicians[i]);
    }
    return(make_great_magicians);
}

let make_great_array=make_great(magicians_names);

show_magicians(magicians_names);
show_magicians(make_great_array);