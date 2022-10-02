// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Mango", "Apple", "Orange"]

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
for(let i=0; i<favorite_fruits.length; i++){
    if(favorite_fruits[i]==="Mango"){
        console.log("You really like Mango")
    }
    else if(favorite_fruits[i]==="Apple"){
        console.log("You really like Apple")
    }
    else if(favorite_fruits[i]==="Orange"){
        console.log("You really like orange")
    }
    else if(favorite_fruits[i]==="Bnana"){
        console.log("You really like Bnana")
    }
    else if(favorite_fruits[i]==="Tarboz"){
        console.log("You really like Tarboz")
    }
}