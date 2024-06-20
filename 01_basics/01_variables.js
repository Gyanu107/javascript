const accountId = 107
var accountEmail = "gyan@work.com"
let accountPassword = "987456"
accountCity = "Ahmedabad"

let accountState

// accountId = 1 // not allowed

accountEmail = "gyanesh@work.com"
accountPassword = "123456"
accountCity = "Mumbai"

/* 
Prefer not use of var because of issue in block scope & functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])