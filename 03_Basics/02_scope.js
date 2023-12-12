// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "faizan"

    function two (){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()
    // console.log(username)
}

// one()

if (true) {
    const username = "faizan"
    if (username === "faizan") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)


// ************************************ interesting ************************************//
console.log(addone(5))
function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
