console.log("Hey Public!")

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "JumanJi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jumanji@mail.com",
    fullname: {
        userfullname: {
            firstname: "Rajudada",
            lastname: "khoptitod"
        }
    }    
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "p", 2: "q"}
const obj2 = { 3: "p", 4: "q"}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@yahoo.com"
    },
    {
        id: 1,
        email: "r@yahoo.com"
    },
    {
        id: 1,
        email: "r@yahoo.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "Js Learning",
    price: "1000",
    courseInstructor: "Jogi"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course // D Structuring for value assign

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Bhola",
//     "coursename": "java learning istitute",
//     "price": "free"
// }