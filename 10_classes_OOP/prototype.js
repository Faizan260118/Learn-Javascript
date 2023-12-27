// let myName = "faizan     "
// let mySurname = "ali   "

// console.log(myName.truelength());


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this .spiderman}`);
    }
}

Object.prototype.faizan = function(){
    // console.log(`faizan is present in all objects`);
}

Array.prototype.heyFaizan = function(){
    // console.log(`Faizan says hello`);
}

// heroPower.faizan()
// myHeros.faizan()
// myHeros.heyFaizan()
// heroPower.heyFaizan()

// inheritance


const User = {
    name:"chai",
    email: "google@55.com",

}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"faizan".trueLength()
"iceTea".trueLength()