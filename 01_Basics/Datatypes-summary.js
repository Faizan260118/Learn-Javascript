// Primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100

// const compare = (score == scoreValue)
// console.log(typeof compare)
// console.log(score == scoreValue);

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)

const bigNumber = 3456735242434323242n

// Reference type (Non Primitive)

// Arrays, Objects, Function

const heros = ["shaktiman", "naagraz", "doga"];
let myObj = {
    name: "Fazian",
    age: 22,
}

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
// Function => function
// Object  => object

// ********************************************************************************** //

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "faizalali"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "faizan@google.com"

console.log(userOne.email);
console.log(userTwo.email);