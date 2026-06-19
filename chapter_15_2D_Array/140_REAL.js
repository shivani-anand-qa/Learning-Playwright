let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

//How many test cases have we executed?
//How many test cases are passed?
//What is the status code that you got for the fail?

//1st way
for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j])
    }
    console.log();
}

//2nd way
//cell is columns of row
for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log();
}

//3rd way by foreach - rarely used - Most of times AI use foreach code
//for each loop always works with arrow function only


testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log()
})

