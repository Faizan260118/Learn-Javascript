// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  // false
console.log(null < 0);  // false
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null >= 0);  // true
console.log(null <= 0);  // true

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(undefined >= 0);  // false
console.log(undefined <= 0);  // false

//* Special case */
console.log(undefined == null); //true

// * We have to avoid these type of conversion * //
// * Priority to write clean and readable code *//

// === 

console.log("2" === 2);