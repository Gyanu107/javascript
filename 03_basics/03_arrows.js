const user = {
    username: "chunny",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sushi"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "lala"
//     // console.log(this);
//     console.log(this.username);
// }

// chai()


// const chaipatti = function() { 
//     let username = "lala"
//     console.log(this.username);   
// }

const chaipatti = () => { 
    let username = "lala"
    console.log(this);   
}

// chaipatti()

// const addnewOne = (num1, num2) => {
//     return num1 + num2
// }


// Implisit Return
// const addnewOne = (num1, num2) => num1 + num2

// const addnewOne = (num1, num2) => ( num1 + num2 )

const addnewOne = (num1, num2) => ({username: "chaman"})

console.log(addnewOne(3,9));

const mynewArray = [2, 3, 8, 5, 1]

// mynewArray.forEach()