// Immediately Invoked Function Expressions (IIFE)
//Why iifi? sometime global scope varibles make problems in our codes, os we write iifi code to remove global scope variable pollution.

//simple function
// function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// }
// chai()

// iifi function
// ()() first prenthesis is for function defintion and second one for execution
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();// semi colon is important to end the first iifi

// arrow function iifi
// ( () => {
//         console.log(`DB CONNECTED`);
//     } )()

//simple iifi
( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    } )('Ashraf')