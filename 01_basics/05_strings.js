console.log("Hey Public!");

const name = "Radhe"
const repoCount = 37

// console.log(name + repoCount + " value"); // Concatenate of all value

//console.log(`Hello my name is ${name} & my repo count is ${repoCount}`); // Modern way to describe for backend developer to readable content!


const gameName = new String('hulkman-spiderboy')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // object empty

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));


const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(-3,-1);
console.log(anotherString);

const newStringOne = "     Jiggu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://wwww.yahoo.com/maniben%20lahoo"

console.log(url.replace('%20' , '-'));

console.log(url.includes('radhe'));

console.log(gameName.split('-')); // output will be in array