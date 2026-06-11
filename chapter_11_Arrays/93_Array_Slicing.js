let arr = [10, 20, 30, 40, 50];
let s = arr.slice(1, 4);   // [20, 30, 40]
console.log(arr);          // [10, 20, 30, 40, 50]  ← unchanged
console.log(s);

//Slicing & Combining
//Slice(start, end) - returns new array, does not mutate
//actual --> (start, end-1)
//Dont give the end, it will automatically take from start to end

console.log(arr.slice(1, 3));

console.log(arr.slice(2, 5));

console.log(arr.slice(2, 6)); //No array out of bound index

console.log(arr.slice(2));

console.log(arr.slice(-5)); //Start from -1

console.log(arr.slice(0));

console.log(arr); //[ 10, 20, 30, 40, 50 ]
let removed = arr.splice(1, 2) //remove 2 from index 1
console.log(arr); //[ 10, 40, 50 ]
console.log(removed); //[ 20, 30 ]

const arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
arr.splice(1, 2);        // returns [2, 3], arr is now [1, 4, 5]

// Insert without removing
arr.splice(1, 0, 9, 8);  // returns [], arr is now [1, 9, 8, 4, 5]

// Replace element at index 2
arr.splice(2, 1, 99);    // returns [8], arr is now [1, 9, 99, 4, 5]

// ─── slice vs splice ───────────────────────────────────────────────
// Feature          | slice                        | splice
// -----------------|------------------------------|-----------------------------
// Mutates original?| No                           | Yes
// Returns          | New array (extracted elems)  | Array of removed elements
// Purpose          | Extract a portion            | Add / remove / replace
// Parameters       | (start, end)                 | (start, deleteCount, ...add)
// end index incl.? | No (exclusive)               | N/A
// Adds elements?   | No                           | Yes
// Memory trick     | "c" for copy — no change     | "p" for permanent change
//
// One-line rule: slice = read-only copy | splice = in-place surgery