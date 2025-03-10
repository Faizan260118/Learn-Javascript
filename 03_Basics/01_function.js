function sayMyName() {
    console.log("F")
    console.log("A")
    console.log("I")
    console.log("Z")
    console.log("A")
    console.log("N")
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2) {

    let result = number1 + number2
    console.log(result);
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result)


function loginUserMessage(username = "zara") {
    // if(username === undefined){
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("faizan"))
// console.log(loginUserMessage("Fazian"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 1000, 2000))

const user = {
    username: "faizan",
    price: 199,
    items: 2
}

function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    return `Username is ${anyObject.username} and price is ${anyObject.price} and total items is ${anyObject.items}`
}

// handleObject(user)
console.log(handleObject(user));
console.log(handleObject({
    username: "zara",
    price: 399,
    items: 5,
}))

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 200, 400, 600]));

const newArr = ["Sania", "Faizan", "Zara"];

function returnNewArrValue(getArray){
    return getArray[2]
}

console.log(returnNewArrValue(newArr));
console.log(returnNewArrValue(["Physics", "Algebra", "Statistics"]));
