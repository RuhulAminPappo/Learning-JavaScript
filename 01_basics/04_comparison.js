//basics, no problem
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


//avoid this kind of comparisons
console.log(null > 0); //converts null = 0; then compares 
console.log(null == 0); // '==' works different than comparators, cause '==' is a whole another thing. if confused look up in google
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

