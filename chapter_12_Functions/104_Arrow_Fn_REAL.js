//if (ourStatusCode >= 200 && ourStatusCode < 300)

//1 Normal function
function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine!");

    }
}
validateStatusCode(200);

//2. Function as an expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
}
validateStatusCode_Exp(250);

//3. Arrow Function
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine");

    }
}
validateStatusCode_Arrow(270);