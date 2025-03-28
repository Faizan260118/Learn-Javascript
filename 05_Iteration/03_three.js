// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    if(greet == " "){
        break
    }
    // console.log(`Each char is ${greet}`);
    // console.log(`Each char is ${greetings.length}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value) //! myObject is not iterable
// }

//? How to Access Object Keys and Values with for...of

for (const key of Object.keys(myObject)){
    console.log(key);
};

for (const value of Object.values(myObject)){
    console.log(value);
};

for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key}: ${value}`);
};