//We use Promise to validate if all the checks are working
let checkAuth = Promise.resolve("Auth Ok");
let checkDB = Promise.resolve("DB Ok");
let checkCache = Promise.resolve("Cache OK");


/*Promise.all([checkAuth, checkDB, checkCache]).then(function( results) {
console.log("All the checks are fine");
});
//All the checks are fine


/*
Promise.all([
  Promise.resolve("OK"),
  Promise.reject("DB DOWN"),
  Promise.resolve("OK")
]).then(function(r){
  console.log(r);
}).catch(function(error){
  console.log("Failed: ", error);
})
*/
// O/P Failed: DB DOWN




Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Passed!"),
    Promise.resolve("Test A Passed!"),
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test" + (i + 1) + ":", r.status, "-", r.value || r.reason);
    })
})
