//Question 1 Print reverse
// *****
// ****
// ***
// **
// *

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 5; j > i; j--) {
        row += "*"
    }
    console.log(row);
}
//Question 2 - Pyramid
// *
// ***
// *****

/* 1 way
for (let i = 0; i < 3; i++) {
    let row = "";


    //add spaces
    for (let s = 0; s < 2 - i; s++) {
        row += " ";
    }
    //add stars
    for (let j = 0; j < 2 * i + 1; j++) {
        row += "*";
    }
    console.log(row);
}
    */
//Or
let n = 6;
for (let i = 1; i < n; i++) {
    let row = "";

    //Print spaces
    for (let j = 1; j < n - i; j++) {
        row += " ";
    }
    //Print stars
    for (let k = 2 * i - 1; k >= 1; k--) {
        row += "*"

    }
    console.log(row);
}

