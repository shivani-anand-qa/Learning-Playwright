let g_x = 10;

//Nested Scope | blocked Scope

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

    }
    inner();
    console.log(y);
}


//outer() is never called! The function is defined but there's no invocation at the bottom of the file. The buggy code inside never actually runs, so no error is thrown.

//outer()
//On adding outer(); at the end and run it,  ReferenceError: y is not defined is displayed.