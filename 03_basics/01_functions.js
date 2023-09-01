function sayMyName(){
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("A");
    console.log("F");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers() // NaN
// addTwoNumbers(3,4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// function loginUserMessage(username){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ashraf"))
console.log(loginUserMessage())