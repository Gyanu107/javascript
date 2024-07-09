const codeing = ["js", "java", "cpp", "python", "ruby"]

// codeing.forEach( function (val) {
//     console.log(val);
// })

// codeing.forEach( (items) => {
//     console.log(items);
// })


// function printMe(item){
//     console.log(item);
// }

// codeing.forEach(printMe)

// codeing.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})