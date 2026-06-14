// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2); //for decimal 
}
console.log(calculatePassRate(10, 7));

// ❌ Impure — depends on external state

function isPassing(score) {
    return score >= threshold; //depends on external variable
}

let threshold = 80;
console.log(isPassing(threshold));
console.log(isPassing(70));
