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

// console.log(loginUserMessage("Radhe"))

function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 450, 500, 3000));

const user = {
    username: "Radhe",
    // price: 199
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sattu",
    price: 399
})

const myNewArray = [200, 400, 100, 700]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));