// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car(manufacturer, model_name,...x){
    let car={
        manufacturer:manufacturer,
        model:model_name
    };

    for(let i=0; i<x.length;i++){
        car={...car,...x[i]}
    }
    return car;
}

console.log(car("Alto", 2011,{color:"red",speed:120}))

