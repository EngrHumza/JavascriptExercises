// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car(manufacturer, model_name,...x){
    let car={
        manufacturer:manufacturer,
        model:model_name
    };

    for(let i=0; i<x.length;i++){
        car={...car,...x[i]}
    }

    // for(let i=0; i<x.length; i++){
    //     car[i]=x[i];
    // }

    return car;
}

console.log(car('honda', 'accord',{year: 1991, color: 'white',
    headlights: 'popup'}))

