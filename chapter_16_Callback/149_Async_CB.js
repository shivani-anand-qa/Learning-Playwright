console.log("Test1: started");


setTimeout(function () {
    console.log("Test 2: API response received");
}, 2000);


console.log("Test 3: moving to next test");


/*
Test1: started
Test 3: moving to next test
Test 2: API response received
*/
