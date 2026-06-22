//Real QA Scenario: End-to-End Login for the App.vwo.com
// openbrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()

function openBrowser(callback) {
    console.log("Step 1: opening the chrome Browser");
    setTimeout(function () {
        callback();
    }, 1000);
}

//We can directly callback, but we added a timer and we call the function after 1sec = 1000ms
function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login Page Loaded");
        callback();
    }, 2000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Enter the Credentials");
        callback();
    }, 1000);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Click Login button");
        callback();
    }, 1000);
}

//// THIS IS CALLBACK HELL 👇 - Never use
openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test Complete!")
            })
        })
    })
})


/*
Step 1: opening the chrome Browser
Step 2: Login Page Loaded
Step 3: Enter the Credentials
Step 4: Click Login button
Test Complete!
*/
