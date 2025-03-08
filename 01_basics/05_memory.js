//stack (primitive data type), heap (non primitive data type)

let myYoutubeName = "RuhulAminPappo" 

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName)
console.log(anotherName)


//this goes to heap
let userOne = {
    email: "abc@gmail.com",
    password:"1234"
}

let userTwo = userOne

userTwo.email = "papporuhulamin@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);






