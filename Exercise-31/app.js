// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames = ["admin", "Humza", "Faisal", "Talha", "Abrar", "Ali"];

// • If the list is empty, print the message We need to find some users!
function test_empty_list() {
    if (usernames.length==0) {
        console.log("We need to find some users!");
    }
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.

// usernames.splice(0,usernames.length);
usernames.length=0;
// while(usernames.length>0){
//     usernames.pop();
// }

// usernames =[];

test_empty_list();