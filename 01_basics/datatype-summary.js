console.log("Hey Man!")

// Types of DataType

/* 

> Primitive

* 7 Types : String, Number, Boolearn, Null, undefined, Symbol, BigInt 

*/

const score = 100
const scoreValue = 100.36

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 123123145645641231231231n
/* 

> NonPrimitive / Reference Type

-- Objects, Array, Functions

*/

// const heros = ["batman", "hulk", "captinamerica"];

// let myObj = {
//     name: "Gyan",
//     age: 18,
// }

// const myFunction = function(){
//     console.log("Thank you for watching)")
// }
// console.log (typeof bigNumber);

// ================================================================

// Stack (Primitive), Heap(Refrence/Non-Primitive)

let myProject = "radhebio"

let anothername = myProject
anothername = "script"

console.log(anothername);
console.log(myProject);


let userOne = {
    email: "user@google.com",
    upi: "user@rbl"
}

let userTwo = userOne

userTwo.email = "hulk@google.com"

console.log(userOne.email);
console.log(userTwo.email);