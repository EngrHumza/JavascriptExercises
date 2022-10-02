// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let usernames = ["admin", "Humza", "Faisal", "Talha", "Abrar", "Ali"];

for (let i = 0; i < usernames.length; i++) {
    // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    if (usernames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?")
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else if (usernames[i] == "Humza") {
        console.log("Hello Humza, thank you for logging in again.")
    }
    else if (usernames[i] == "Talha") {
        console.log("Hello Talha, thank you for logging in again.")
    }
    else if (usernames[i] == "Faisal") {
        console.log("Hello Faisal, thank you for logging in again.")
    }
    else if (usernames[i] == "Abrar") {
        console.log("Hello Abrar, thank you for logging in again.")
    }
    else if (usernames[i] == "Ali") {
        console.log("Hello Ali, thank you for logging in again.")
    }
    else{
        
    }
}