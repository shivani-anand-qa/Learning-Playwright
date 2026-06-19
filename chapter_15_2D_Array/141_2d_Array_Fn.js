let scores = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 92]
];


let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums); //[ 253, 175, 275 ]

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"], //Auth Suite
    ["search-pass", "filter-fail", "sort-pass"], //Search Suite
    ["checkout-fail", "payment-fail", "confirm-pass"] //Payment Suite
];

//I want all the test cases which have failed
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}
/*filter-fail
checkout-fail
payment-fail
*/
