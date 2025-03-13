//singleton 
//Object.create => this is constructor method

//object literals

const mySym = Symbol("key1")

const JsUSer = {
    name: "Pappo",
    "full name": "Ruhul Amin Pappo",
    [mySym]: "mykey1",
    age: 18,
    location: "Rajshahi",
    email: "papporuhulamin@gmail.com",
    isLoggerIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUSer.email)
console.log(JsUSer["email"]) //same as dot operator, we will use this 
console.log(JsUSer["full name"])
console.log(JsUSer[mySym])  //this one is important

JsUSer.email = "ruhulamin@icloud.com"
//Object.freeze(JsUSer) //this makes sures that that any data of the object cannot be changed

JsUSer.greeting = function(){
    console.log("Hello JS User");
}
JsUSer.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUSer.greeting());
console.log(JsUSer.greetingTwo());