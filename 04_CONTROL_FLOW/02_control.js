// if _|--> 

const isUserloggedIn = true
const temperature = 41

if( temperature <= 50 ){
    console.log("less than equals to 50");
}
else{
    console.log("temperature is greater than 50");
}     //less than 50

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}  // User power: fly

// console.log(`User power: ${power}`); // error

const balance = 1000

if (balance > 500) console.log("test"),console.log("test2")// test  test2

if (balance < 500){
    console.log("less than 500");
}
else if (balance < 750){
    console.log("less than 750");   
}
else if (balance < 900) {
    console.log("less than 750");  
}
else {
    console.log("less than 1200");
} // less than 1200

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
} // false 

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} //true //User logged in

