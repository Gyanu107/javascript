const myOldFamily = ["Chagan", "Magan", "Lagan"]
const myNewFamily = ["Suresh", "Mahesh", "Naresh"]

// myNewFamily.push(myOldFamily)
// console.log(myNewFamily);
// console.log(myNewFamily[3][1]);

// const allFamily = myNewFamily.concat(myOldFamily)
// console.log(allFamily);

const all_new_members = [...myOldFamily, ...myNewFamily]
// console.log(all_new_members);


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArr.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Radhe"));
console.log(Array.from("Radhe"));
console.log(Array.from({name: "Radhe"})); // Interesting

let score1 = 99
let score2 = 100
let score3 = 264

console.log(Array.of(score1,score2,score3));