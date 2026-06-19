/*Print
*
**
***
*/

let n = "*";
/* 1 way
for(let i=0; i<3; i++){
  for(let j=0; j<=i;j++ ){
    process.stdout.write(n);
  }
  console.log();
}
*/
//Or
for (let i = 0; i < 3; i++) {
    let row = " "; //This ensures the row starts empty but avoids printing "undefined" or "null" if you accidentally concatenate incorrectly.
    for (let j = 0; j <= i; j++) {
        row += n;
    }
    console.log(row.trim());
}
//3rd way
for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
