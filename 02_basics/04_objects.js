// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {    //object inside object
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} //spread operator [like array]
console.log(obj3);


const users = [ //array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course //destructuring of object

console.log(courseInstructor);
console.log(instructor);


// JSON api
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
