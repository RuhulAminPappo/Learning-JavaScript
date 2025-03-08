//string has many methods, look up in the mdn website for all the methods and syntaxes (IMPORTANT) 

const name = "pappo"
const repoCount = 20

//console.log(name + repoCount + " Value"); //outdated syntax

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //this is more modern syntax, we should use this;

const gameName = new String('ping-pong')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

//learn some more methods from mdn website documentation 


const newString = gameName.substring(0,4) // divides the strinf from 0 index to 4-1=3 index
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Pappo   "
console.log(newStringOne);
console.log(newStringOne.trim()); //trims the extra spaces and keeps only the string



const url = "https://youtube.com/abcd%20efgh"

console.log(url.replace('%20','-')); //syntax of replace('what to replace', 'after replace')

console.log(url.includes('abcd')); //includes() => searches inside the string, if exits then returns true;

console.log(gameName.split('-')); //look up the split() method in mdn website;

