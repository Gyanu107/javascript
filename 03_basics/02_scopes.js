//var c = 300
let a = 30

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "rambhai" 

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two()
}

// one()

if (true){
    const username = "munna"
    if (username === "munna") {
        const website = " youtube"
        //console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ===================== Interesting =====================

console.log(addone(5));

function addone(num) { // basic functions
    return num + 1
}

addTwo(5)

const addTwo = function(num){ // Expression
    return num + 2
}