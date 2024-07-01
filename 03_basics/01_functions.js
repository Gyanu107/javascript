console.log("Hey buddy!");

function saymyName() {
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("E");
}

// saymyName()  => Exicute
// saymyName    => Refrence

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(3,5)

// console.log("Result: ", result);


function loginUserMessage(username = "Boy"){
    // if(username === undefined){ => both scenario are same but the below one is most profession.
        if(!username){
        console.log("Please Enter a valid UserName");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Radhe"))