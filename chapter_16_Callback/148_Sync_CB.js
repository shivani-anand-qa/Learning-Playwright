let testResults = ["pass", "fail", "Skip"];


testResults.forEach(function (result, index) {
    console.log("Test" + index + " => " + result);
})


// This is a perfect example of a synchronous callback where
//  the anonymous function will take the item 1 by 1,
//  it will take the index 1 by 1, it will take
//  the result 1 by 1, and print the value 1 by 1.
/*
Test0 => pass
Test1 => fail
Test2 => Skip
*/
