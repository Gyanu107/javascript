// const coding = ["js", "java", "cpp", "python", "ruby"]

// const values =  coding.forEach( (item) => {
//     // console.log(item);
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//    return num > 4
// } )


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Finction', publish: 1978, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Finction', publish: 1990, edition: 2013 },
    { title: 'Book Three', genre: 'History', publish: 1987, edition: 2000 },
    { title: 'Book Four', genre: 'Non-Finction', publish: 1999, edition: 2012 },
    { title: 'Book Five', genre: 'Science', publish: 1950, edition: 1990 },
    { title: 'Book Six', genre: 'History', publish: 1980, edition: 2014 },
    { title: 'Book Seven', genre: 'Non-Finction', publish: 1968, edition: 1992 },
    { title: 'Book Eight', genre: 'Finction', publish: 1928, edition: 1972 },
    { title: 'Book Nine', genre: 'Non-Finction', publish: 1907, edition: 2001 },

];

let userBooks = books.filter( (bk) => bk.genre === 'Non-Finction')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1970 && bk.genre === "History"
})
console.log(userBooks);