const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Faizan"))
console.log(Array.from("Faizan"))
console.log(Array.from({ name: "faizan" }))  //Interesting array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

console.log(Array.of(car1, car2, car3))