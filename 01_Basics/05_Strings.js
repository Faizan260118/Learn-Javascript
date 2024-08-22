const name = "Faizan"
const repoCount = 50

//console.log(name + repoCount + " Value")  //*Avoid to write this type of this syntax*//

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  

const gameName = new String("fai-zz-zan")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   faizan  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://google.com/onlinecodingcourse"

console.log(url.replace('coding', 'programming'));

console.log(url.includes('faizan'));

console.log(gameName.split('-'));

const firstString = [100+5+3+"Faizan"+"kalra"+7+2]
console.log(firstString)

