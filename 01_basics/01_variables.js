const accountId = 144553
let accountEmail = "papporuhulamin@gmail.com" //we will use 'let' for variable data types 
var accountPassword = "12345"  //var is not used in modern code practise because it has scope problems
accountCity = "Rajshahi"

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


accountEmail = "hr@hr.com"
accountPassword = "21212121"
accountCity = "Dhaka"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


console.table([accountId, accountEmail, accountPassword, accountCity])
