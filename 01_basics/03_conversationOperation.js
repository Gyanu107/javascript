
// let score = "99" => true
// let score = "99abc" => Nan
// let score = null
//let score = undefined
//let score = true => 1; false => 0
let score = "99"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let isLoggedIn = 1 true
// let isLoggedIn = "" false
let isLoggedIn = "Gyan" 

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

let someNumber = "18"
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// =================Operations=================

let value = 5
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hey"
let str2 = " Buddy!"
let str3 = str1 + str2
console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + "2" + "2");
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // don not put this kind of silly thing

let gameCounter = 100
gameCounter++
++gameCounter

console.log(gameCounter);


// ================================================================

// Stack (Primitive), Heap(Refrence/Non-Primitive)

let myProject = "radhebhai"

let anothorname = myProject

console.log("anothorname);