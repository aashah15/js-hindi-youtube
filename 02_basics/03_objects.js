// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ashraf",
    "full name": "Ashraf Shah",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age: 18,
    location: "Calgary",
    email: "ashraf@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])
// console.log(typeof mySym)

JsUser.email = "ashraf@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ashraf@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());