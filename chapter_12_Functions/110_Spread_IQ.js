//Example 1
/*
function add(a, b, c) {
    return a + b + c;
}


console.log(add(1, 2, 3)); //prints 6
let num = [1, 2, 3];
add(...num); //print nothing
console.log(add(...num)); //prints 6
*/

//Example 2
let reponseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
console.log(hasError(reponseCodes));
//console.log(hasError(...reponseCodes));

