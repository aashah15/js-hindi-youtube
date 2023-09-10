// const user = {
//     username: "Ashraf",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//     }

// }
// user.welcomeMessage()   //Ashraf , welcome to website

const user = {
    username: "Ashraf",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()   //Ashraf , welcome to website
                        //     {
                        //     username: 'Ashraf',
                        //     price: 999,
                        //     welcomeMessage: [Function: welcomeMessage]
                        //   }
// user.username = "sam"   //username(context) changed to sam
// user.welcomeMessage()   //sam , welcome to website

// console.log(this);   // context is {}, so prints {}, context is empty in node environment

// function chai(){
//     console.log(this);
// }

// chai()    // prints nodes global enivronment

// function chai(){
//     let username = "Ashraf"
//     console.log(this.username);
// }

// chai()   // output shows undefined, so we can't use this in a function

// const chai = function () {
//     let username = "Ashraf"
//     console.log(this.username);
// }
// chai()   // output is undefined

// const chai =  () => {
//     let username = "Ashraf"
//     console.log(this);
// }

// chai()  // output prints {} empty prenthesis

// const addTwo = (num1, num2) => {   // basic arrow function with explicit return 
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  // implicit return arrow function, if there is only one line of code
// console.log(addTwo(3, 4))   // prints 7

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {username: "Ashraf"} //prints undefined
const addTwo = (num1, num2) => ({username: "Ashraf"}) // to return an object needs prenthesis, will print {username: 'Ashraf'}

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()