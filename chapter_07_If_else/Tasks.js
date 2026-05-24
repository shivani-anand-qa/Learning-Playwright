
//Question 1 — HTTP Status Code Categorizer
/*Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid

Sample Input/Output:
Input: 404
Output: Client Error
Input: 200
Output: Success
*/
/*Solution1: 
let status = 404;
let output = (status >= 200 && status <= 299) ? "Success" :
    (status >= 300 && status <= 399) ? "Redirection" :
        (status >= 400 && status <= 499) ? "Client Error" :
            (status >= 500 && status <= 599) ? "Server Error" : "Invalid";
console.log(output);
*/
// or Solution 2
let status = 200;
if (status >= 200 && status <= 299) {
    console.log("Success");
}
else if (status >= 300 && status <= 399) {
    console.log("Redirection");
}
else if (status >= 400 && status <= 499) {
    console.log("Client Error");
}
else if (status >= 500 && status <= 599) {
    console.log("Server Error");
}
else {
    console.log("Invalid");
}


//Question 2 — Test Case Pass/Fail Verdict
/*Problem: Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials

*/
/*Solution 1
let actualresult = "Login Successful";
let expectedresult = "Login Successful";
let result = (expectedresult === actualresult ? "✅ Test Passed" : "❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials")
console.log(result);
*/

//or solution 2
let actualresult = "Login Successful";
let expectedresult = "Invalid Credentials";
if (expectedresult === actualresult) {
    console.log("✅ Test Passed");
}
else

    console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");


//Question 3 — Bug Severity Classifier
/*Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:
Input: 9
Output: Severity: Critical — Block release
Input: 5
Output: Severity: Medium
*/

/*Solution 1:
let bis = 9;
let severity = (bis >= 9 && bis <= 10) ? "Critical (block release)" :
    (bis >= 7 && bis <= 8) ? "High" :
        (bis >= 4 && bis <= 6) ? "Medium" :
            (bis >= 1 && bis <= 3) ? "Low" : "Invalid Score";
console.log(severity);
*/

//or Solution 2:
let bis = 5;
if (bis >= 9 && bis <= 10)
    console.log("Critical (block release)");
else if (bis >= 7 && bis <= 8)
    console.log("High");
else if (bis >= 4 && bis <= 6)
    console.log("Medium");
else if (bis >= 1 && bis <= 3)
    console.log("Low");
else
    console.log("Invalid Score");


//Question 4 — Build Health Reporter
/*Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures
Input: 65
Output: 🔴 Broken Build — Block deployment
*/
/*Solution1: 
let testCasePassed = 95;
let buildStatus = (testCasePassed === 100) ? " Green Build" :
    (testCasePassed >= 90 && testCasePassed <= 99) ? " 🟡 Stable — Investigate failures" :
        (testCasePassed >= 70 && testCasePassed <= 89) ? " Unstable" :
            (testCasePassed < 70) ? "🔴 Broken Build — Block deployment" : "Invalid input";
console.log(buildStatus);
*/
//or Solution 2
let testCasePassed = 65;
if (testCasePassed === 100)
    console.log("Green Build");
else if (testCasePassed >= 90 && testCasePassed <= 99)
    console.log("🟡 Stable — Investigate failures");
else if (testCasePassed >= 70 && testCasePassed <= 89)
    console.log("Unstable");
else if (testCasePassed < 70)
    console.log("🔴 Broken Build — Block deployment")
else
    console.log("Invalid input");

//Question 5 — Login Lockout After Failed Attempts
/*
Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful
*/

/*Solution 1:
let loginattempt = 2;
let loginStatus = (loginattempt == 0) ? "Login successful" :
    (loginattempt == 2) ? "1 attempt left before lockout" :
        (loginattempt == 3) ? "🔒 Account Locked — Contact support" : "Try after sometime";
console.log(loginStatus);
*/

//or Solution 2:
let loginattempt = 0;
if (loginattempt == 0)
    console.log("Login successful");
else if (loginattempt == 2)
    console.log("1 attempt left before lockout");
else if (loginattempt == 3)
    console.log("🔒 Account Locked — Contact support");
else
    console.log("Try after sometime");
