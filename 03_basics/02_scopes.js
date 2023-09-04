let a = 300 // Global scope
// const b = 20   // Global scope
// var c = 30   // Global scope
// var c = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // c = 30
    // console.log("INNER: ", a);  // block scope
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Ashraf"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
}
// one()

if (true) {
    const username = "Ashraf"
    if (username === "Ashraf") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}

// console.log(addone(5))

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // can access before function declaration, it is called hoisting

function addone(num){
    return num + 1
}

console.log(addTwo(5))    // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(5))