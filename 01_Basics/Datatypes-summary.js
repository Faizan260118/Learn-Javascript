// Primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100

const compare = (score == scoreValue)
// console.log(compare);
// console.log(typeof compare)
// console.log(score == scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)

const bigNumber = 3456735242434323242n
console.log(bigNumber);
console.log(typeof(bigNumber));

// Reference type (Non Primitive)

// Arrays, Objects, Function

const heros = ["shaktiman", "naagraz", "doga"];
//? Change element
heros[1] = "Ironman";

//? Push element
heros.push("Thor");

// console.log(heros);

let myObj = {
    name: "Faizan",
    age: 22,
}
//? Change element 
myObj.name = "Zara";

// console.log(myObj.name);

const myFunction = function () {
    console.log("Hello world");
}

// console.log(typeof outsideTemp);

// Return type of variables in JavaScript

// Primitive Datatypes:-

// Number => number
// String => string
// Boolean => boolean
// null  => object
// undefined => undefined
// Symbol => symbol
// BigInt => bigint

// Non - primitive Datatypes:-

// Arrays => object
// Function => function / object function
// Object  => object

// ********************************************************************************** //

//Stack (Primitive), Heap (Non-Primitive)

//? Stack give copy of original reference and does not manipulate original value.
//? Whereas in Heap directly give the original refernce and we can manipulate the original value.

let myYoutubename = "faizalali"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename === anothername);
// console.log(myYoutubename);
// console.log( typeof myYoutubename);
// console.log(anothername);
// console.log( typeof anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "faizan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

let heroName = ["Ironman", "Spiderman", "Batman"];

let heroName2 = heroName;
heroName2[1] = "Thor";

console.log(heroName);
console.log(heroName2);

