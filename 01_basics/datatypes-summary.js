// The categorization of Data is based on two things
// 1. how they are stored in memory
// 2. how they getting accessed

//  Primitive
// Primitives are Call by Value // Copy of original value is passed, So original value not changed.
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// Non-Primitives are call by Reference, so by changing reference value original value is changed

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


let myName = "Aditya PAwar"

let anotherName = myName 
anotherName = "Skilled Engineer"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);
