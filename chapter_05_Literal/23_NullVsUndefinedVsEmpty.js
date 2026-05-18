// ============================================================
// null vs undefined vs empty in JavaScript
// ============================================================

// -------------------------------------------------------
// 1. UNDEFINED
// -------------------------------------------------------
// A variable that has been declared but NOT assigned a value.
// JavaScript sets it automatically.

let a;
console.log(a);           // undefined
console.log(typeof a);    // "undefined"

function greet(name) {
    console.log(name);    // undefined if no argument is passed
}
greet();

// -------------------------------------------------------
// 2. NULL
// -------------------------------------------------------
// A variable intentionally assigned "no value".
// The developer explicitly sets it to null.

let b = null;
console.log(b);           // null
console.log(typeof b);    // "object"  <-- quirk in JS (historical bug)

// -------------------------------------------------------
// 3. EMPTY STRING ""
// -------------------------------------------------------
// A variable that has a value, but the value is an empty string.
// It is NOT the same as null or undefined — it IS a value.

let c = "";
console.log(c);           // ""  (nothing printed, but type is string)
console.log(typeof c);    // "string"
console.log(c.length);    // 0

// -------------------------------------------------------
// COMPARISON TABLE
// -------------------------------------------------------
//
//  Feature            | undefined        | null             | empty ""
//  -------------------|------------------|------------------|------------------
//  Set by             | JS automatically | Developer        | Developer
//  Meaning            | Not yet assigned | Intentionally    | Assigned, but
//                     |                  | no value         | has no content
//  typeof             | "undefined"      | "object"         | "string"
//  == null (loose)    | true             | true             | false
//  === null (strict)  | false            | true             | false
//  Boolean (falsy?)   | false (falsy)    | false (falsy)    | false (falsy)
//  Has a type?        | No               | No (technically) | Yes — string
//

// -------------------------------------------------------
// EQUALITY CHECKS
// -------------------------------------------------------

console.log(undefined == null);    // true  (loose equality treats them equal)
console.log(undefined === null);   // false (strict equality — different types)
console.log("" == null);           // false
console.log("" == undefined);      // false
console.log("" === undefined);     // false

// -------------------------------------------------------
// PRACTICAL EXAMPLE
// -------------------------------------------------------

let username;                   // undefined — not assigned yet
let password = null;            // null — intentionally cleared / not set
let nickname = "";              // empty — user left the field blank

if (username === undefined) {
    console.log("username: variable declared but no value given");
}

if (password === null) {
    console.log("password: explicitly set to no value");
}

if (nickname === "") {
    console.log("nickname: value exists but is an empty string");
}

// -------------------------------------------------------
// KEY TAKEAWAY
// -------------------------------------------------------
// undefined → "I forgot to give this a value" (JS auto-assigns)
// null      → "I deliberately have no value here" (developer choice)
// ""        → "I have a value, but it is an empty string"
