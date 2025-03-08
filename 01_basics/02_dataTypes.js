"use strict";  //treat all JS code as newer version

// alert( 3 + 3) //we are using node.js, not browser. thats why alert is not working

console.log(3+3)
console.log("pappo")

let name = "pappo" //string
let age = 21 //integer
let isLoggedIn = false //boolean
let state = null

console.log(typeof age)
console.log(typeof undefined) //data type = undefined
console.log(typeof null) //data type = object

/* 
DATA TYEPS ->
premitive data types: 
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol => unique

object

*/





//________________SUMMARY_____________

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null // type of value of null is object 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp); //object data type

// https://262.ecma-international.org/5.1/#sec-11.4.3