// singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const Jsuser = {
    name: "Faizan",
    "full name": "Mohd Faizan Alam",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "faizan@google.com",
    isLoggedIn: false,
    lastLoggeninDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "faizan@outlook.com"
// Object.freeze(Jsuser)
Jsuser.email = "faizan@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}
Jsuser.greetingTwo = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
