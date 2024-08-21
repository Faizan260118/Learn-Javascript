const accountId = 144553
let accountEmail = "faizan@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2  //not allowed

accountEmail = "fa@al.com"
accountPassword = "212121"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])