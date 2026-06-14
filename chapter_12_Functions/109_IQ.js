// 1. Returns a value

/*function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

console.log(getStatus(200));
getStatus(404);
getStatus(500);
*/

/* 2. No return
function logTest(name) {
    console.log(`Running: ${name}`);
    //no return statement

}
let result = logTest("Login");
console.log(result);
*/

//3. Example
/*
greet("Alice"); //prints nothing

console.log(greet("Alice")); //

function greet(name) {
    return `Hello, ${name}!`;
}
*/

/*Example 4
//sayHi("Bob");
const sayHi = function (name) {
    return `Hi, ${name}!`;
}

// When we execute just above, Error cannot access Hi before initialization, if i ll add 
//in next line, it would run, i ll comment above one
sayHi("Bob"); //nothing prints
console.log(sayHi("Bob")); //Hi, Bob! prints
*/