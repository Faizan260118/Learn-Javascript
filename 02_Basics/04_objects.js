// const tinderUser = new Object()  //singleton object
const tinderUser = {}  //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Faizan",
            lastname: "Alam"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
    {
        id: 1,
        email: "f@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));
// console.log(tinderUser.isPrototypeOf('name'));

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "faizan"
}

// course.courseInstructor

//? Object destructure
const { courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);

const course2 = {
	platform: "Acadlearn'er",
	language: "Javascript",
	instructor: "Faizan",
	price: 3999,
}

const {instructor : tutor, platform : online, price : fees} = course2;

console.log(tutor);
console.log(online);
console.log(fees);

// ? JSON API syntax in types of object

// {
//     "name": "faizan",
//     "coursename": "JS in hindi",
//     "price": "free"
// }


// ? JSON API syntax in types of array

[
    {},
    {},
    {},
]