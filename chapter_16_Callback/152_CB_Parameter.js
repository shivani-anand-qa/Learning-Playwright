function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}


greetTester("Troy", function () {
    console.log("Let's start testing!");
});


greetTester("Brenda", () => {
    console.log("Lets start testing!")
})


/* O/P
Welcome, Troy
Let's start testing!
Welcome, Brenda
Lets start testing!
*/

//Callback with parameters


//DNC- IQ
function runTest(testName, callback) {
    let status = "Pass";
    callback(testName, status);
}
runTest("Login Test", function (name, result) {
    console.log(name + "->" + result);
});
//Login Test->Pass




//Synch CallBack-forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];


bugs.forEach(function (bug, i) {
    console.log("Bug#" + (i + 1) + ":" + bug);
});


console.log("Total Bugs: " + bugs.length);
/*O/P
Bug#1:UI glitch
Bug#2:API timeout
Bug#3:Wrong redirect
Total Bugs: 3
*/
