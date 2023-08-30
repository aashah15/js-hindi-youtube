// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ashraf",
            lastname: "Shah"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// target = {} source = obj1, obj2, obj4
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// using spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in urdu",
    price: "999",
    courseInstructor: "Ashraf"
}

course.courseInstructor

// const {courseInstructor} = course
// const {courseInstructor: instructor} = course
const {courseInstructor: mentor} = course

// console.log(courseInstructor);
// console.log(instructor);
console.log(mentor);

// {
//     "name": "Ashraf",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]