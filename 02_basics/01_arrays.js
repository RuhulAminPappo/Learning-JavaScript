const myArr = [0, 1, 2, 3, 4, 5] // JS arrays are resizable
const myHeroes = ["Ironman", "Spiderman"]
const myArr2 = new Array(1, 2, 3, 4)


console.log(myArr[0]);


//Array methods

myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9); //inserts element in first position
console.log(myArr);

myArr.shift(); //removes first element
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() //join() => binds and converts array to string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice, splice [look more into this topic]

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


