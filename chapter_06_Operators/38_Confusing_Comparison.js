// ============================================================
// 38 - Confusing Comparisons: == vs ===
// == (loose / abstract equality)  → coerces types before comparing
// === (strict equality)           → checks value AND type, no coercion
// ============================================================

// --- 1. Number vs String ---
console.log("--- Number vs String ---");
console.log(42 == "42");    // true  (string "42" coerced to number 42)
console.log(42 === "42");   // false (number !== string)
console.log(0 == "0");      // true  ("0" coerced to 0)
console.log(0 === "0");     // false

// --- 2. Boolean coercion ---
console.log("\n--- Boolean vs Number/String ---");
console.log(true == 1);     // true  (true → 1)
console.log(true === 1);    // false
console.log(false == 0);    // true  (false → 0)
console.log(false === 0);   // false
console.log(true == "1");   // true  (true → 1, "1" → 1)
console.log(true == 2);     // false (true → 1, not 2)

// --- 3. Empty string & zero (the famous broken transitivity) ---
console.log("\n--- Empty string & zero ---");
console.log(0 == "");       // true  ("" coerced to 0)
console.log(0 == "0");      // true  ("0" coerced to 0)
console.log("" == "0");     // false (both strings, no coercion — values differ)
// If == were transitive: (0=="") && (0=="0") should mean ""=="0" — but it doesn't! 🤯

// --- 4. null & undefined ---
console.log("\n--- null & undefined ---");
console.log(null == undefined);  // true  (special rule: only equal to each other)
console.log(null === undefined); // false (different types)
console.log(null == 0);          // false (null only loosely equals undefined)
console.log(null == false);      // false
console.log(null == "");         // false
console.log(undefined == 0);    // false
console.log(undefined == false); // false

// --- 5. NaN ---
console.log("\n--- NaN ---");
console.log(NaN == NaN);    // false (NaN is never equal to anything, including itself)
console.log(NaN === NaN);   // false
console.log(Number.isNaN(NaN)); // true (correct way to check for NaN)

// --- 6. Objects / Arrays (reference equality) ---
console.log("\n--- Objects & Arrays ---");
console.log([] == []);       // false (different references)
console.log([] === []);      // false
console.log({} == {});       // false
console.log({} === {});      // false

console.log([] == false);    // true  ([] → "" → 0, false → 0)
console.log([] == 0);        // true  ([] → "" → 0)
console.log([] == "");       // true  ([] → "")
console.log([] === false);   // false

console.log(!![] == true);   // true  ([] is truthy, !![] is true)

// --- 7. != vs !== ---
console.log("\n--- != vs !== ---");
console.log(5 != "5");       // false (loosely equal, so NOT not-equal)
console.log(5 !== "5");      // true  (different types → strictly not equal)

// ============================================================
// RULE OF THUMB:
//   Always use === and !==
//   Use == only when you explicitly want type coercion
//   (e.g., checking null == undefined to catch both at once)
// ============================================================
