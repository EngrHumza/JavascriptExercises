// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// • Tests for equality and inequality with strings
console.log("Humza"=="Humza");
console.log("Humza"=="Faisal");
console.log("\n\n")

// • Tests using the lower case function
let lower_name="humza";
console.log(lower_name==lower_name.toLowerCase());
let upper_name=lower_name.toUpperCase();
console.log(upper_name==upper_name.toLowerCase());
console.log("\n\n")

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5===5);
console.log(4===5);
console.log(4!=5);
console.log(4!=4)
console.log(5>4);
console.log(4>5);
console.log(4<5);
console.log(5<4);
console.log(4<=5);
console.log(5<=4);
console.log(5>=4);
console.log(4>=5);

console.log("\n\n")
// • Tests using "and" and "or" operators
console.log(4===4 && 5===5)
console.log(4===4 && 5===4)
console.log(4===4 || 5===5)
console.log(4===5 || 5===4)

console.log("\n\n")
// • Test whether an item is in a array
let num=[1,2,3,4,5];
console.log(4 in num);
// • Test whether an item is not in a array
console.log(!(4 in num))