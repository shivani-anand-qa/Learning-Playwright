function calculate(a, b, operation) {
    console.log("Checking values " + a, b);
    return operation(a, b);
}


let sum = calculate(10, 5, function (x, y) {
    return x + y;
})
console.log(sum);
/*
Checking values10 5
15
*/


