function makeCounter() {
    let count = 0;          // <-- this is the "backpack"

    return function () {
        count++;              // inner fn reaches into the backpack
        console.log(count);
    };
}

const counter = makeCounter();  // outer fn is DONE now
counter();  // 1  ← still remembers count!


function outer() {
    let message = "hello";
    console.log("Outer Called!");
    function inner() {
        console.log(message);
    }
    return inner;
}

let fn_inner = outer();
fn_inner();