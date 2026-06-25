//DNC Copy Paste for IQ
//1.
// let p = new Promise(function (resolve, reject) {
//     resolve(42);
// });
// p.then(function (value) {
//     console.log("Answer:", value);
// });
//Answer: 42


//2.
// let p = new Promise(function (resolve, reject) {
//     reject("Something broke");
// });


// p.catch(function (err) {
//     console.log("Caught:", err);
// });
//Caught: Something broke


//3.
// let p = Promise.resolve(5);


// p.then(function (val) {
//     return val * 10;
// }).then(function (val) {
//     console.log("Result:", val);
// });
//Result: 50


// //4.
// Promise.resolve(1)
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//     })
//     .then(function (val) {
//         console.log(val);
//         return val + 1;
//  })
//     .then(function (val) {
//         console.log(val);
//     });
// Op
// 1
// 2
// 3


//5.
// Promise.resolve("start")
//     .then(function (val) {
//         console.log(val);
//         throw new Error("Broke at step 2");
//     })
//     .then(function () {
//         console.log("This will NOT run");
//     })
//     .catch(function (err) {
//         console.log("Caught:", err.message);
//     });


// start
// Caught: Broke at step 2


//6.
// Promise.reject("Test failed")
//     .then(function (data) {
//         console.log("Data:", data);
//     })
//     .catch(function (err) {
//         console.log("Error:", err);
//     })
//     .finally(function () {
//         console.log("Cleanup done");
//     });


// Error: Test failed
// Cleanup done




//7.
// Promise.resolve("Quick win").then(function (msg) {
//     console.log(msg);
// });


// Promise.reject("Quick loss").catch(function (msg) {
//     console.log(msg);
// });
// Quick win
// Quick loss




//8.
// let t1 = Promise.resolve("Login: PASS");
// let t2 = Promise.resolve("Search: PASS");
// let t3 = Promise.resolve("Logout: PASS");


// Promise.all([t1, t2, t3]).then(function (results) {
//     console.log(results);
// });
//[ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]


//9.
// let t1 = Promise.resolve("PASS");
// let t2 = Promise.reject("FAIL");
// let t3 = Promise.resolve("PASS");


// Promise.all([t1, t2, t3])
//     .then(function (r) { console.log("All:", r); })
//     .catch(function (err) { console.log("Stopped:", err); });
//Stopped: FAIL


//10.
// Promise.allSettled([
//     Promise.resolve("API 200"),
//     Promise.reject("API 500"),
//     Promise.resolve("API 201")
// ]).then(function (results) {
//     results.forEach(function (r) {
//         console.log(r);
//     });
// });


//O/P
// { status: 'fulfilled', value: 'API 200' }
// { status: 'rejected', reason: 'API 500' }
// { status: 'fulfilled', value: 'API 201' }
