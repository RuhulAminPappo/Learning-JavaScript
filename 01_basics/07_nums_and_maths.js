const score = 400 //in this, compiler automatically detects score as number data type;
console.log(score);

const balance = new Number(100) //this will explicitly define the datatype as number;
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //this fixes two numbers after the decimal

const otherNumber = 3.1416
console.log(otherNumber.toPrecision(3)); //toPrecision() => kinda like ceil in cpp, search about it later;

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))




//________________MATHS__________________

console.log(Math); // Maths is an object
console.log(Math.abs(-4)); //abs() => absolute value;
console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(4,3,5,9)); //finds minimum value of array
console.log(Math.max(4,3,5,9)); //finds maximum value of array

console.log(Math.random()); //its value will always be between 0-1 range;
console.log(Math.floor(Math.random()*10) + 1); //range => 1-10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



