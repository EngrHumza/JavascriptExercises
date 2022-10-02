// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich_items(...items){
    for(let i=0; i<items.length;i++){
        console.log("adding " + items[i] + " to your sandwitch");
    }
    console.log("Have a Great Sandwitch");
}

sandwich_items('peanut butter', 'strawberry jam');
console.log("\n\n");
sandwich_items('turkey', 'apple slices', 'honey mustard');
console.log("\n\n");
sandwich_items('roast beef', 'cheddar cheese', 'lettuce', 'honey dijon');