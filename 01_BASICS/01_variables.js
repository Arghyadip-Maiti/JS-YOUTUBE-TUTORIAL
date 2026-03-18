const accountId=12345

let accountEmail="arghyadip@email.com"

var accountPassword="3456"

accountCity="Kolkata"//can create variables without any starting but try to avoid it...

let accountState

//accountId=2--this thing is not acceptable...const cant change

console.log(accountId);

accountCity="Pune"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var because of the scope problem
*/
