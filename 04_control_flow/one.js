// if 
const isUserLoggedIn = true;
const temperature = 41;

if (temperature === 40) {
    console.log("less than 40");
} else {
    console.log("temperature is greater than 40");
};

// console.log("execute");
// <, >, <=, >=, ==, !=, ===

// const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// };

// console.log(`User power: ${power}`);  //? Power doesn't     print because of scope


const balance = 850;

//? if (balance >500) console.log("test"),console.log("test2");   unreadable code / Implicit scope

if (balance <= 500) {
    console.log("Balance is less than 500");
} else if (balance <= 750) {
    console.log("Balance is less than 750");
} else if (balance <= 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balnace is less than 1200");
};

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const guestUser = true;

if (userLoggedIn && debitCard && 2 === 2) {
    console.log("Allow to buy course");
};

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
};