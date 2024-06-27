// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ghanshyam",
    "full name": "Ghanshyam Chachad",
    [mySym]: "mykey1",
    age: 44,
    location: "Ahmedabad",
    email: "ghanshyam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday" ,"Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ghanshyam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ghanshyam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js user");
}

JsUser.greetingtwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());