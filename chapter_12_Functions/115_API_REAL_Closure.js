function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }
    return tryAgain;
}

let retry = makeRetryTracker(3); //print nothing
//tryAgain("Login"); // This will give error as its not defined
console.log(retry("Login")); //Attempt 1/3 for Login