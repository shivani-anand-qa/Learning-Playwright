//Checking Arrays

//Check if osmething IS an array

let result = Array.isArray([1, 2, 3]);
console.log(result); //true

let result1 = Array.isArray("a"); //[]
console.log(result1); //false


//every & some
[80, 90, 85].every(s => s >= 70); //true
[80, 60, 85].every(s => s >= 70);//false

//Playwriht API
[200, 201, 203].every(statuscode => statuscode > 200);


//some-AT LEAST ONE must pass
[80, 90, 85].some(s => s >= 70); //true
[80, 60, 85].some(s => s >= 70);//true

//arrow : s => s>=70