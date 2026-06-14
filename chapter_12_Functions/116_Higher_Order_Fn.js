//High-Order functions
// A function that takes a function as argument or returns a function.

function runWithLogin(testFn, testName) {
    let result = testFn();
    console.log(testName);
    return result;
}

function loginTest() {
    return "pass";

}
function loginTestFailed() {
    return "fail";
}

runWithLogin(loginTest, "Login Test");// prints Login Test
console.log(runWithLogin(loginTest, "Login Test"));// prints Login Test and in next line Pass
console.log(runWithLogin(loginTestFailed, "Login Test Failed"));//prints Login Test Failed  and in next line Fail
