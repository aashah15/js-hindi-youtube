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

// console.log(loginUserMessage("Ashraf"))
// console.log(loginUserMessage())

// function calculateCartPrice(num1){
//     return num1
// }

// function calculateCartPrice(...num1){ // using spread / rest operator any number of values, this will return an array of values [200, 400, 500, 2000]
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){ // first two values will go to val1 and val2 and the rest will go to an array
    return num1
}

// console.log(calculateCartPrice(200))
// console.log(calculateCartPrice(200, 400, 500, 2000)) 

const user = {
    username: "Ashraf",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));