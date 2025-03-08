let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) //converted score string to number
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN = not a number 

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false
"pappo" =>true
*/


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);




//************** operations ********

let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); //2 to the power 3
console.log(2/3);
console.log(2%3);



let str1 = "hola"
let str2 = " pappo"
let str3 = str1 + str2
console.log(str3);


//interesting and tricky stuff
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); //look in to ECMA note's ToPrimitive (7.1.1) section

console.log(true);
console.log(+true);
console.log(+"");


let num1, num2, num3
num1 = num2 = num3 = 2+2


//have a look into the postfix and prefix increment operators in JS in mdn website
//it it quite the opposite of c/c++
