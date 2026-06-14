//Arrow Function(ES6)
//1. Normal Function
const greet = function (name1) {
    return "Hi " + name1;
}

let r = greet("Shivani");
console.log(r);

//1. Arrow Function
//If you want to make a normal function to arrow function, 
// remove the keyword function
//remove the keyword return
//remove the curly braces and use =>
const greet1 = (name1) => "Hi " + name1;
let r1 = greet1("Jack");
console.log(r1);

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Anand");

//2. Normal function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

//2. Arrow function
const add2 = (a, b) => a + b;
console.log(add(2, 3));

//3. Normal function 
function say() {
    console.log("Hi");

}
console.log(say());

//3. Arrow function
const say1 = () => console.log("Hi");
say1;
const say2 = () => 'Hello';
console.log(say2());

const greet3 = (name) => {
    const message = "Hi " + name;
    return message;
}
console.log(greet3("Anand"));

