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

console.log(id === anotherId);

// const bigNumber = 123123145645641231231231n
/* 

> NonPrimitive / Reference Type

* Objects, Array, Functions

 */

const heros = ["batman", "hulk", "captinamerica"];

let myObj = {
    name: "Gyan",
    age: 18,
}

const myFunction = function(){
    console.log("Thank you for watching)")
}
console.log (typeof bigNumber);