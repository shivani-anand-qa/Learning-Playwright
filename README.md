# Learning-Playwright

A structured learning repository covering JavaScript fundamentals, TypeScript, and Playwright test automation.

## Repository Structure

```
├── chapter_01_Basics/
│   ├── 01_Basics.js                    - Hello World and variables
│   ├── 02JS.js                         - JavaScript basics
│   └── 03_JS_Commands.js               - Node.js process commands (platform, arch, version)
│
├── chapter_02_Javascript_Concepts/
│   └── 05_JS_Basics.js                 - var/let/const and JavaScript reserved keywords
│
├── chapter_03_Indentifier_Literals/
│   ├── 06_Identifier_Rules.js          - Identifier rules and naming conventions
│   ├── 07_Identifier_Part2.js          - Identifiers continued
│   ├── 08_Comments.js                  - Single-line and multi-line comments
│   ├── VS_Code_keyboardshort_mac.md    - VS Code shortcuts for Mac
│   └── VS_Code_keyboardshort_win.md    - VS Code shortcuts for Windows
│
├── chapter_04_Javascript_Concepts/
│   ├── 09_var_let_const.js             - var, let, const comparison
│   ├── 10_functions.js                 - Function basics
│   ├── 11_var_explained.js             - var scope and quirks
│   ├── 12_let_people_love.js           - Why developers prefer let
│   ├── 13_const_explained.js           - const rules and usage
│   ├── 14_var_functionsscope.js        - var and function scope
│   ├── 15_let_functionscope.js         - let and block scope
│   ├── 16_Hoisting.js                  - Variable hoisting with var
│   ├── 17_hoisting_fn.js               - Function hoisting
│   ├── 18_let_hoisting.js              - let hoisting and TDZ
│   ├── 19_let_hoisting_block.js        - Block-level hoisting with let
│   ├── 20_let_const.js                 - let vs const differences
│   └── 21_Jr_QA.js                     - Junior QA interview questions
│
├── chapter_05_Literal/
│   ├── 22_Literal.js                   - Literal types in JS
│   ├── 23_NullVsUndefinedVsEmpty.js    - null vs undefined vs empty string
│   ├── 24_null.js                      - null in depth
│   ├── 25_Literal_All.js               - All literal types overview
│   ├── 26Literal_number_all.js         - Number literals (int, float, hex, binary, octal)
│   ├── 27_String.js                    - String literals
│   ├── 28_Template_Literal.js          - Template literals and expressions
│   └── 29_backtick_single_double.js    - Backtick vs single vs double quotes
│
├── chapter_06_Operators/
│   ├── 30_Operators.js                 - Operators overview
│   ├── 31_Arithmetic_Op.js             - Arithmetic operators (+, -, *, /)
│   ├── 32_Modulus.Op.js                - Modulus operator (%)
│   ├── 33_Exponential_Op.js            - Exponentiation operator (**)
│   ├── 34_IQ.js                        - Operator interview questions
│   ├── 35_Comparison_Op.js             - Comparison operators
│   ├── 35_Comparison_strict_loose.js   - Strict (===) vs loose (==) equality
│   ├── 37_IQ_loose_vs_strict.js        - IQ: loose vs strict comparison
│   ├── 38_Confusing_Comparison.js      - Confusing JS comparisons (null, NaN, etc.)
│   ├── 39_Logical_Op.js                - Logical operators (&&, ||, !)
│   ├── 40_String_Con_Op.js             - String concatenation operator
│   ├── 41_Ternary_Op.js                - Ternary operator (? :)
│   ├── 42_Type_Op.js                   - typeof and instanceof operators
│   ├── 43_Incre_Decre_Op.js            - Increment (++) and decrement (--) operators
│   ├── 44_Null_Op.js                   - Nullish coalescing (??) and null comparisons
│   ├── 45_Post_Increment.js            - Post-increment behaviour
│   ├── 46_IQ_Increment.js              - Increment IQ question
│   └── 47_Advance_IQ.js                - Advanced increment IQ (prefix vs postfix)
│
├── chapter_07_If_else/
│   ├── 48_IF_ELSE.js                   - Basic if/else syntax
│   ├── 49_if_elseif_else.js            - if / else if / else chains
│   ├── 50_Real_if_else.js              - Real-world if/else examples
│   ├── 51_API_if_else.js               - if/else in API response validation
│   ├── 52_IQ_if_else.js                - Truthy/falsy IQ questions
│   ├── 53_if_else_real.js              - Real-world scenario exercises
│   ├── 54_IQ.js                        - if/else interview questions
│   ├── 55_IE.js                        - if/else edge cases
│   ├── 56_IQ_even_Odd.js               - Even/odd check with if/else
│   ├── 57_Grade_Calc.js                - Grade calculator using if/else
│   └── 58_leap_year.js                 - Leap year checker
│
├── chapter_08_Switch_Statement/
│   ├── 59_switch.js                    - Basic switch statement
│   ├── 60_No_Break.js                  - Fall-through without break
│   ├── 61_Default.js                   - Default case in switch
│   ├── 62_REAL_TIME_EXAMPLE.js         - API response code handling with switch
│   ├── 63_Switch_Group.js              - Grouping cases in switch
│   ├── 64_IQ.js                        - Switch interview questions
│   ├── 65_IQ2.js                       - Switch IQ part 2
│   ├── 66_IQ3.js                       - Switch IQ part 3
│   └── 67_IQ4.js                       - Switch IQ part 4
│
├── chapter_09_Userinput/
│   ├── 68_User_input.js                - Basic user input with prompt
│   ├── 69_Node_readLine.js             - Node.js readline module
│   └── 70_prompt_sync.js               - prompt-sync package for synchronous input
│
├── chapter_10_Loops/
│   ├── 71_for_loop.js                  - Introduction to for loops
│   ├── 72_For_loop.js                  - for loop with counter
│   ├── 73_for_loop2.js                 - for loop variations
│   ├── 74_IQ.js                        - Loop interview questions
│   ├── 75_Advanced_for_Loop            - Advanced for loop patterns (arrays preview)
│   ├── 76_While.js                     - while loop
│   ├── 77_Do_While.js                  - do...while loop
│   ├── 78_Do_While.js                  - do...while continued
│   ├── 79_IQ.js                        - while loop IQ questions
│   ├── 80_IQ.js                        - Loop IQ part 2
│   ├── 81_IQ.js                        - Loop IQ part 3
│   └── 82_IQ.js                        - Loop IQ part 4
│
├── chapter_11_Arrays/
│   ├── 83_Arrays.js                    - Array introduction and empty arrays
│   ├── 84_Arrays.js                    - Creating arrays (array literal)
│   ├── 85_Access_Arrays.js             - Accessing and modifying array elements
│   ├── 86_Arrays_Adding_Removing.js    - push / pop / shift / unshift basics
│   ├── 87_Adding_Removing2.js          - Adding and removing elements continued
│   ├── 88_Real_Examples.js             - Real-world array examples (browser list)
│   ├── 89_Searching.js                 - indexOf, find, includes — searching arrays
│   ├── 90_Iterate.js                   - Iterating arrays with for loop and forEach
│   ├── 91_Transform.js                 - map, filter, reduce transforms
│   ├── 92_Arrays.js                    - Sorting arrays
│   ├── 93_Array_Slicing.js             - slice vs splice
│   ├── 94_Concat_Array.js              - Concatenating arrays
│   └── 95_Array_Checking.js            - Array.isArray, every, some
│
├── chapter_12_Functions/
│   ├── 96_Functions.js                 - Function basics: define and call
│   ├── 97_Type1_Basic_Fn.js            - Type 1: no parameter, no return
│   ├── 98_Type2_Fn_With_Param_No_Return.js  - Type 2: with parameter, no return
│   ├── 99_Type3_Fn_without_Param_Return_Type.js - Type 3: no parameter, with return
│   ├── 100_Type4_Fn_With_Param_With_Return.js   - Type 4: with parameter, with return
│   ├── 101_Template_literal.js         - Template literals inside functions
│   ├── 103_Arrow_Fn.js                 - Arrow functions (ES6): converting regular functions to arrow syntax
│   ├── 104_Arrow_Fn_REAL.js            - Real-world arrow function example: HTTP status code validator
│   ├── 105_IIFE.js                     - IIFE (Immediately Invoked Function Expressions)
│   ├── 106_Default_Param_Fn.js         - Default parameters in functions
│   ├── 107_IQ.js                       - IQ: return values, function expressions vs declarations
│   ├── 108_Rest_Param_Fn.js            - Rest parameters (...params)
│   ├── 109_IQ.js                       - IQ: spread vs rest, error checking with spread
│   ├── 110_Spread_IQ.js                - Spread operator IQ questions
│   ├── 111_Scope._Fn.js                - Scope in functions: global vs local scope
│   ├── 112_IQ.js                       - IQ: nested scope and block scope (ReferenceError demo)
│   ├── 113_Closure.js                  - Closures: makeCounter and basic closure pattern
│   ├── 114_Closure.js                  - Closures continued: counter object with increment/decrement/get
│   ├── 115_API_REAL_Closure.js         - Real-world closure: retry tracker for test automation
│   ├── 116_Higher_Order_Fn.js          - Higher-order functions (functions as arguments)
│   └── 117_Pure_Fn.js                  - Pure vs impure functions
│
├── chapter_13_Strings.js/
│   ├── 118_Strings.js                  - String creation: single quotes, double quotes, backticks
│   ├── 119_String_Properties.js        - String properties: length, typeof, character access
│   ├── 120_Search_Check_Str.js         - Searching & checking: includes, startsWith, endsWith, indexOf
│   ├── 121_Substring.js                - Extracting substrings: slice, substring
│   ├── 122_Transform_Str.js            - Transforming strings: toUpperCase, toLowerCase, trim, replace
│   ├── 123_SC.js                       - Type conversion: toString, Number, parseInt, parseFloat
│   └── June 3 task.js                  - Practice tasks: palindrome checker and anagram detector
│
├── chapter_14_Objects/
│   ├── 124_Objects.js                  - Object introduction: creating objects with key-value pairs
│   ├── 125_Objects2.js                 - Objects with multiple properties
│   ├── 126_Objects_Creation.js         - Object creation and reference equality (=== on objects)
│   ├── 127_Objects_REAL.js             - Real-world object usage: building a config object dynamically
│   ├── 128_Primitive_Ref.js            - Primitive vs reference types (call by value vs call by reference)
│   ├── 129_Ob_Examples.js              - JSON vs object distinction
│   ├── 130_IQ.js                       - IQ: dot notation and bracket notation access
│   ├── 131_Object_Fn.js                - Methods inside objects (object functions)
│   ├── 132_Obj_Decon.js                - Object destructuring and variable renaming
│   ├── 133_Spread.js                   - Spread operator with objects: copy and merge
│   ├── 134_Objects_GET_SET_Methods.js  - Getter and setter methods in objects
│   ├── 135_IQ.js                       - Object.keys, Object.values, Object.entries, for...in loop
│   ├── 136_Obj_REAL.js                 - Real-world objects in test automation (config, expected response)
│   └── 137_Let_const_obj.js            - let vs const with objects: mutating properties vs reassignment
│
├── chapter_15_2D_Array/
│   ├── 138_2D_Array.js                 - 2D array introduction: grid creation and nested for loops
│   ├── 139_2d.js                       - 2D arrays: rows, columns, grid indexing and length
│   ├── 140_REAL.js                     - Real-world 2D array: test matrix with for-of, forEach
│   ├── 141_2d_Array_Fn.js              - 2D array with map/reduce: row sums and filtering failed tests
│   ├── 142_IQ_Right_Pattern_Py.js      - Pattern printing: right triangle and pyramid with nested loops
│   ├── June 8 Task.js                  - Practice tasks: reverse triangle and pyramid patterns
│   └── testdata.csv                    - Sample CSV test data
│
├── chapter_16_Callback/
│   ├── 143_Callback.js                 - Callback introduction: passing a function as an argument
│   ├── 144_CB.js                       - Callback concept: DNR demo (function not yet created)
│   ├── 145_CB_Fn.js                    - Callback analogy: café table-ready scenario
│   ├── 146_PW_CB.js                    - Playwright-style callback: test(name, callback) pattern
│   ├── 147_JS_CB.js                    - JavaScript async callback: non-blocking execution order
│   ├── 148_Sync_CB.js                  - Synchronous callbacks: forEach over test results array
│   ├── 149_Async_CB.js                 - Asynchronous callbacks: setTimeout and execution order
│   ├── 150_CB_Hell.js                  - Callback hell: 4-step nested login flow (app.vwo.com)
│   ├── 151_CB_Hell.js                  - Callback hell: 27-step nested E2E purchase flow (app.shop.com)
│   ├── 152_CB_Parameter.js             - Callbacks with parameters: passing data into callback functions
│   └── 153_CB_Return.js                - Callbacks with return values: using callback result in caller
│
├── chapter_17_Promise/
│   ├── 154_Promise.js                  - Promise introduction: resolve and reject with food delivery analogy
│   ├── 155_Promise_REAL_API.js         - Real API call simulation: Promise resolving with status 200 and body
│   ├── 156_Promise_REAL_API_PART2.js   - Promise rejection: handling errors with .catch and chaining .then
│   ├── 157_Finally.js                  - .finally() block: cleanup code that runs after resolve or reject
│   ├── 158_Call_Py_Problem.js          - Callback pyramid refactored with Promises: multi-step browser flow
│   ├── 159_Promise_ALL.js              - Promise.all: running multiple checks in parallel and awaiting all
│   └── 160_Promise_IQ.js               - Promise IQ questions: chaining, execution order, async behaviour
│
├── chapter_18_Async_Await/
│   ├── 161_Async.js                    - async/await with try/catch: handling rejected Promises
│   ├── 162_Async.js                    - await with chained async calls: token fetch and API usage
│   ├── 163_PyODom.js                   - Refactoring callback hell into async/await: multi-step browser flow
│   ├── 164_Async_Ex.js                 - Basic async/await: returning values and awaiting results
│   ├── 165_AA_Parallel.js              - Parallel async execution: running independent tasks concurrently
│   ├── 165_AA_Seq.js                   - Sequential async execution: awaiting dependent steps in order
│   ├── 166_IQ.js                       - Async/await IQ: identifying async vs normal functions and parallel vs sequential
│   └── 167_ACLogin.js                  - Real Playwright test: async login flow with page interactions and assertions
│
├── chapter_19_Playwright_Basics/
│   ├── playwright.config.ts            - Playwright config: HTML reporter, 30s timeout, retries, multi-browser projects
│   ├── package.json                    - Project dependencies (@playwright/test, TypeScript)
│   └── tests/
│       ├── example.spec.ts             - First test: navigate to TTA Cart and verify page title
│       └── codegen-tta-cart.spec.ts    - Codegen test: invalid login error, valid login, product page, logout flow
│
├── chapter_20_Oops_Basics/
│   └── 01_EXPORT_IMPORT/
│       ├── ExplainDefaultVsNamed.md    - Reference: named vs default exports comparison table
│       ├── testutils.js                - Named exports: BASE_URL constant and formatUpperCaseString function
│       ├── utils.js                    - Named export: BASE_URL constant (separate module)
│       ├── logger.js                   - Default export: log function; named export: log2 function
│       ├── 168_EXPORT_IMPORT.js        - Importing named exports with alias (as) from testutils.js
│       ├── 169_Utils.js                - Importing named exports from two separate modules
│       └── 170_Logger.js               - Importing a default export from logger.js
│
├── chapter_21_Classes_and_Objects/
│   └── 02_CLASS_OBJECT/
│       ├── 171_Class_Object.js         - Class introduction: constructor, instance properties, methods
│       ├── 172_Class_Object2.js        - Class continued: multiple instances and property access
│       ├── 173_Car.js                  - Car class: real-world example with constructor and methods
│       ├── 174_REAL_Browser.js         - Browser class: real-world Playwright-style class usage
│       ├── 175_IQ.js                   - Class IQ questions
│       ├── 176_Private_Public.js       - Private (#) vs public class fields
│       ├── 177_Static.js               - Static properties and methods: class-level vs instance-level
│       ├── 178_Static.js               - Static methods continued
│       ├── Jun22_Task1_Calc.js         - Task: Calculator class with static properties and instance methods
│       ├── Jun22_Task2_StaticVsNS.js   - Task: static vs non-static methods on a Student class
│       └── Jun22_Task2.js              - Task: PlaywrightBatch class combining static and non-static methods; 10 student objects
│
├── chapter_22_Encapsulation/
│   └── 03_ENCAPSULATION/
│       ├── 179_Encap.js                - Encapsulation intro: BankAccount with private #balance, controlled access via deposit/getBalance
│       ├── 180_REAL_EXAMPLE.js         - Encapsulation real example: Person class hiding private child fields
│       ├── 181_Encap_Car.js            - Encapsulation: Car class with private #engine and public interface
│       └── 182_Encap_Bank.js           - Encapsulation: CIBC bank class with private #balance and public deposit/withdraw methods
│
├── chapter_23_Inheritance/
│   ├── 183_Single_Inheritance.js       - Single inheritance: BasePage → child page using extends
│   ├── 184_SI_Example.js               - Single inheritance example: Animal base class with eat/speak methods
│   ├── 185_Single_Inheritence_Contrv.js - Method overriding in child: APITest overrides BaseTest.setup()
│   ├── 186_IQ.js                       - IQ: UITest extends BaseTest, overriding setup while inheriting teardown
│   ├── 187_IQ2.js                      - IQ: TestCase → UnitTest chain, overriding execute method
│   ├── 188_REAL_POM.js                 - Real POM pattern: BasePage → LoginPage → ProductPage with verify overrides
│   ├── 189_Multiple_Inheritance.js     - Multiple inheritance: JS workaround using mixins (no native multiple extends)
│   ├── 190_Multiple_Level_Inheritance.js - Multi-level inheritance: BasePage → AuthPage → AdminPage chain
│   └── 191_Hierarchical_Inheritance.js - Hierarchical inheritance: one Father class → multiple Son subclasses
│
├── chapter_24_Polymorphism/
│   └── 192_Method_Overriding.js        - Polymorphism via method overriding: BaseTest → APIPage/UIPage with different setup()
│
└── chapter_25_OOPS_Interview_Questions/
    ├── EX1.js                          - Bug class: constructor with title/severity, display method
    ├── EX2.js                          - Environment class: default parameter values, dynamic getURL method
    ├── EX3.js                          - User class: understanding `this` referencing the current object instance
    ├── EX4.js                          - Counter class: method chaining by returning `this` from increment/decrement
    └── EX5.js                          - Token class: private #value field with getter — encapsulation exercise
```

## Topics Covered

### Chapter 1 — Basics
- Running JavaScript with Node.js
- `console.log` output
- Variables with `let`
- Node.js `process` object: `platform`, `arch`, `version`

### Chapter 2 — JavaScript Concepts
- Variable declarations: `var`, `let`, `const`
- JavaScript reserved keywords (declaration, control flow, error handling, modules)

### Chapter 3 — Identifiers & Literals
- Identifier naming rules (valid/invalid examples)
- Naming conventions: camelCase, PascalCase, UPPER_CASE, `_underscore`
- Single-line (`//`) and multi-line (`/* */`) comments
- VS Code keyboard shortcuts for Mac and Windows

### Chapter 4 — Scope, Hoisting & Variables
- Detailed comparison of `var`, `let`, and `const`
- Function scope vs block scope
- Variable hoisting and the Temporal Dead Zone (TDZ)
- Function hoisting
- Junior QA interview prep questions

### Chapter 5 — Literals
- All JS literal types: string, number, boolean, null, undefined, object, array
- `null` vs `undefined` vs empty string
- Number literals: integers, floats, hex (`0x`), binary (`0b`), octal (`0o`)
- String literals: single quotes, double quotes, backticks
- Template literals and embedded expressions

### Chapter 6 — Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Loose vs strict equality pitfalls
- Logical operators: `&&`, `||`, `!`
- String concatenation with `+`
- Ternary operator `? :`
- Type operators: `typeof`, `instanceof`
- Increment (`++`) and decrement (`--`): prefix vs postfix
- Nullish coalescing (`??`) and null comparison quirks
- Confusing comparisons: `null`, `NaN`, `undefined`

### Chapter 7 — If / Else
- `if`, `else if`, `else` syntax and chaining
- Truthy and falsy values
- Real-world examples: login validation, API checks
- Practical exercises: even/odd checker, grade calculator, leap year checker

### Chapter 8 — Switch Statement
- Basic `switch` / `case` / `break` syntax
- Fall-through behaviour without `break`
- `default` case
- Grouping multiple cases
- Real-world example: HTTP response code handler
- Interview questions

### Chapter 9 — User Input
- `prompt()` for browser-based input
- Node.js `readline` module for terminal input
- `prompt-sync` package for synchronous terminal input

### Chapter 10 — Loops
- `for` loop: syntax, counter, variations
- `while` loop: init / condition / update pattern
- `do...while` loop: guarantees at least one execution
- Advanced for-loop patterns (arrays preview)
- Loop-based interview questions and exercises

### Chapter 11 — Arrays
- Array creation: literal syntax, empty arrays
- Accessing and modifying elements by index
- Adding/removing: `push`, `pop`, `shift`, `unshift`
- Searching: `indexOf`, `find`, `includes`
- Iterating: `for` loop, `forEach`
- Transforming: `map`, `filter`, `reduce`
- Sorting arrays
- `slice` vs `splice`
- Concatenating arrays with `concat` and spread
- Checking: `Array.isArray`, `every`, `some`

### Chapter 12 — Functions
- Function structure: define (declare) vs call (invoke)
- Type 1: no parameter, no return value
- Type 2: with parameter, no return value
- Type 3: no parameter, with return value
- Type 4: with parameter, with return value
- Parameters vs arguments distinction
- Template literals inside functions
- Arrow functions (ES6): concise syntax, implicit return, single-param shorthand
- Real-world arrow function: HTTP status code validator (normal → expression → arrow)
- IIFE (Immediately Invoked Function Expressions): self-executing functions
- Default parameters: fallback values when arguments are omitted
- Rest parameters (`...params`): collect variable arguments into an array
- Spread operator (`...`): spread array elements as individual arguments
- Scope in functions: global scope vs local (function) scope
- Nested scope and block scope: inner functions can't be accessed from outer scope
- Closures: inner function retaining access to outer function's variables ("backpack")
- Closures in practice: counter with `increment`, `decrement`, `get`
- Real-world closure: retry tracker for test automation
- Higher-order functions: passing functions as arguments
- Pure functions vs impure functions: predictability and side effects

### Chapter 13 — Strings
- String creation: single quotes, double quotes, backticks
- String properties: `length`, `typeof`, accessing characters by index
- Searching & checking: `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`
- Extracting substrings: `slice(start, end)`, `substring(start, end)`
- Transforming strings: `toUpperCase`, `toLowerCase`, `trim`, `trimStart`, `trimEnd`, `replace`, `replaceAll`
- Type conversion: `toString`, `Number()`, `parseInt`, `parseFloat`, `String()`
- Practice tasks: palindrome checker (loop & built-in approaches), anagram detector (sort & compare)

### Chapter 14 — Objects
- Object introduction: key-value pairs, object literals
- Creating objects dynamically by adding properties after declaration
- Reference equality: why `obj1 === obj2` is `false` for two separate objects
- Primitive vs reference types: call by value (primitives) vs call by reference (objects, arrays, functions)
- JSON vs object distinction
- Accessing properties: dot notation and bracket notation
- Methods inside objects: defining functions as object properties
- Object destructuring: extracting properties into variables, renaming on destructure
- Spread operator with objects: shallow copy and merging objects
- Getter and setter methods (`get` / `set`) in objects
- `Object.keys`, `Object.values`, `Object.entries` for iterating object data
- `for...in` loop for iterating object properties
- Real-world objects in test automation: config objects, expected-response objects
- `let` vs `const` with objects: properties can always be mutated; `const` only prevents reassignment

### Chapter 15 — 2D Arrays
- 2D array (matrix) creation: array of arrays
- Indexing with `grid[row][col]`
- `grid.length` (rows) vs `grid[0].length` (columns)
- Iterating with nested `for` loops, `for...of`, and `forEach`
- Real-world test matrix: storing test name, result, and status code in a 2D array
- `map` + `reduce` on 2D arrays: computing row sums
- Filtering failed tests across a 2D suite results matrix
- Pattern printing with nested loops: right triangle, reverse triangle, pyramid

### Chapter 16 — Callbacks
- Callback basics: passing a function as an argument to another function
- Playwright-style `test(name, callback)` pattern mirroring real framework internals
- Café analogy: understanding why callbacks exist (deferred execution)
- Synchronous callbacks: `forEach`, `map`, `filter` — callbacks that run immediately
- Asynchronous callbacks: `setTimeout` — callbacks deferred until an event completes
- Non-blocking execution: why async callbacks don't block the call stack
- Callbacks with parameters: passing data into the callback when invoking it
- Callbacks with return values: using the result returned by a callback
- Callback hell: deeply nested callbacks and why they hurt readability and maintainability
- Real QA scenario (4 steps): login flow demonstrating callback pyramid (app.vwo.com)
- Real QA scenario (27 steps): full E2E purchase flow showing extreme callback nesting (app.shop.com)

### Chapter 17 — Promises
- Promise introduction: the two outcomes — `resolve` (success) and `reject` (failure)
- `.then()` for handling resolved values, `.catch()` for handling rejections
- Chaining `.then()` calls to process data step by step
- `.finally()` block: cleanup code that always runs regardless of outcome
- Real API simulation: Promise resolving with `{ status: 200, body }` and rejecting with error codes
- Refactoring callback hell into a cleaner Promise chain (multi-step browser automation flow)
- `Promise.all`: run multiple independent checks in parallel and wait for all to complete
- Promise IQ: execution order, chaining behaviour, and async gotchas

### Chapter 18 — Async / Await
- `async` functions: automatically return a Promise; `await` pauses execution until a Promise settles
- `try / catch` with async/await: replacing `.catch()` for cleaner error handling
- Awaiting chained async calls: fetching a token then using it in a subsequent request
- Refactoring callback hell and Promise chains into flat, readable async/await code
- Sequential async execution: awaiting steps that depend on previous results
- Parallel async execution: running independent async tasks concurrently with `Promise.all`
- IQ questions: distinguishing async vs normal functions and sequential vs parallel patterns
- Real Playwright test: end-to-end login flow using `async ({ page }) => {}` with `await` actions and `expect` assertions

### Chapter 19 — Playwright Basics
- Setting up a Playwright project: `package.json`, `playwright.config.ts`, TypeScript support
- `playwright.config.ts` options: `testDir`, `reporter`, `timeout`, `retries`, `baseURL`, `projects`
- Multi-browser testing with `projects`: running the same tests in Chromium, Firefox, and Safari
- HTML reporter: generating and viewing test reports with `npx playwright show-report`
- Writing your first test: `page.goto`, `page.waitForTimeout`, `expect(page).toHaveTitle`
- Using Playwright Codegen to record tests automatically
- Locators: `page.locator('[data-test="..."]')` for selecting elements by test ID
- Actions: `.click()`, `.fill()` for interacting with form elements
- Assertions: `expect(locator).toContainText(...)` for verifying page content
- Real test scenario: invalid login error message, valid login, product page verification, logout

### Chapter 20 — Export / Import (ES Modules)
- ES module system: `export` and `import` keywords for sharing code across files
- Named exports: exporting multiple values (`export let`, `export function`) from a single file
- Importing named exports with curly braces `{ name }` and the exact identifier
- Renaming on import with `as`: `import { BASE_URL as bul_util }` to avoid name collisions
- Importing from multiple modules in a single file
- Default export: `export default` — only one allowed per file, used for the primary export
- Importing a default export without curly braces; any local name can be used
- Mixing default and named exports in one file (`logger.js`: `log` default + `log2` named)
- Importing both at once: `import log, { log2 } from './logger.js'`
- Practical utility modules: `testutils.js` (URL + formatter), `utils.js` (URL), `logger.js` (loggers)

### Chapter 21 — Classes & Objects
- `class` syntax: `constructor`, instance properties, and instance methods
- Creating multiple objects (instances) from a single class with `new`
- Static properties (`static`): belong to the class, not instances — accessed via `ClassName.property`
- Static methods: called on the class (`ClassName.method()`), no access to instance `this`
- Non-static (instance) methods: called on objects (`obj.method()`), access instance data via `this`
- Why static methods require explicit parameters for instance data (no implicit `this`)
- Private fields (`#field`): encapsulation — only accessible inside the class
- Real-world class: `PlaywrightBatch` combining static course info with per-student instance data
- Practice tasks: Calculator class, Student enrollment class, batch printer with 10 student objects

### Chapter 22 — Encapsulation
- Encapsulation: bundling data and the methods that operate on it inside a class
- Private fields (`#field`): hide internal state from outside code
- Controlled access: exposing data only through public methods (`deposit`, `getBalance`, `withdraw`)
- Real-world examples: BankAccount, Person, Car, and CIBC bank classes
- Why encapsulation matters: prevents accidental mutation, enforces validation at the boundary

### Chapter 23 — Inheritance
- Single inheritance: child class inherits properties and methods from a parent via `extends`
- `super()`: calling the parent constructor from the child class
- Method overriding: child class redefines a parent method with its own implementation
- Inheriting without overriding: child class reuses parent methods directly
- IQ patterns: which `setup`/`teardown` runs when both parent and child define it
- Multi-level inheritance: chaining three or more classes (BasePage → AuthPage → AdminPage)
- Hierarchical inheritance: multiple child classes extending the same parent
- Multiple inheritance workaround: JS doesn't support `extends` on two classes — use mixins instead
- Real POM pattern: `BasePage → LoginPage → ProductPage` overriding `verify()` at each level

### Chapter 24 — Polymorphism
- Polymorphism: same method name, different behaviour depending on the class
- Method overriding as the primary mechanism for polymorphism in JS
- Runtime dispatch: the correct `setup()` / `teardown()` is called based on the actual object type
- Real QA example: `BaseTest`, `APIPage`, and `UIPage` each with their own `setup()` implementation

### Chapter 25 — OOP Interview Questions
- EX1: Bug class — constructor with `title` and `severity`, formatted `display()` output
- EX2: Environment class — default parameter values (`name = "staging"`, `port = 3000`), `getURL()` builder
- EX3: `this` keyword — understanding that `this` refers to the specific instance the method is called on
- EX4: Method chaining — returning `this` from each method so calls can be chained (`.increment().increment().getCount()`)
- EX5: Private field encapsulation — Token class with `#value`, getter-only access, no direct mutation

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [VS Code](https://code.visualstudio.com/)

## Running the Examples

```bash
# Chapter 1
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/03_JS_Commands.js

# Chapter 4
node chapter_04_Javascript_Concepts/09_var_let_const.js

# Chapter 6
node chapter_06_Operators/41_Ternary_Op.js
node chapter_06_Operators/43_Incre_Decre_Op.js

# Chapter 7
node chapter_07_If_else/57_Grade_Calc.js
node chapter_07_If_else/58_leap_year.js

# Chapter 8
node chapter_08_Switch_Statement/62_REAL_TIME_EXAMPLE.js

# Chapter 10
node chapter_10_Loops/76_While.js
node chapter_10_Loops/77_Do_While.js

# Chapter 11
node chapter_11_Arrays/88_Real_Examples.js
node chapter_11_Arrays/91_Transform.js
node chapter_11_Arrays/95_Array_Checking.js

# Chapter 12
node chapter_12_Functions/96_Functions.js
node chapter_12_Functions/97_Type1_Basic_Fn.js
node chapter_12_Functions/98_Type2_Fn_With_Param_No_Return.js
node chapter_12_Functions/99_Type3_Fn_without_Param_Return_Type.js
node chapter_12_Functions/100_Type4_Fn_With_Param_With_Return.js
node chapter_12_Functions/103_Arrow_Fn.js
node chapter_12_Functions/104_Arrow_Fn_REAL.js
node chapter_12_Functions/105_IIFE.js
node chapter_12_Functions/106_Default_Param_Fn.js
node chapter_12_Functions/108_Rest_Param_Fn.js
node chapter_12_Functions/111_Scope._Fn.js
node chapter_12_Functions/113_Closure.js
node chapter_12_Functions/114_Closure.js
node chapter_12_Functions/115_API_REAL_Closure.js
node chapter_12_Functions/116_Higher_Order_Fn.js
node chapter_12_Functions/117_Pure_Fn.js

# Chapter 13
node "chapter_13_Strings.js/118_Strings.js"
node "chapter_13_Strings.js/119_String_Properties.js"
node "chapter_13_Strings.js/120_Search_Check_Str.js"
node "chapter_13_Strings.js/121_Substring.js"
node "chapter_13_Strings.js/122_Transform_Str.js"
node "chapter_13_Strings.js/123_SC.js"
node "chapter_13_Strings.js/June 3 task.js"

# Chapter 14
node chapter_14_Objects/124_Objects.js
node chapter_14_Objects/125_Objects2.js
node chapter_14_Objects/136_Obj_REAL.js
node chapter_14_Objects/137_Let_const_obj.js

# Chapter 15
node chapter_15_2D_Array/138_2D_Array.js
node chapter_15_2D_Array/139_2d.js
node chapter_15_2D_Array/140_REAL.js
node chapter_15_2D_Array/141_2d_Array_Fn.js
node chapter_15_2D_Array/142_IQ_Right_Pattern_Py.js
node "chapter_15_2D_Array/June 8 Task.js"

# Chapter 16
node chapter_16_Callback/143_Callback.js
node chapter_16_Callback/144_CB.js
node chapter_16_Callback/145_CB_Fn.js
node chapter_16_Callback/146_PW_CB.js
node chapter_16_Callback/147_JS_CB.js
node chapter_16_Callback/148_Sync_CB.js
node chapter_16_Callback/149_Async_CB.js
node chapter_16_Callback/150_CB_Hell.js
node chapter_16_Callback/151_CB_Hell.js
node chapter_16_Callback/152_CB_Parameter.js
node chapter_16_Callback/153_CB_Return.js

# Chapter 17
node chapter_17_Promise/154_Promise.js
node chapter_17_Promise/155_Promise_REAL_API.js
node chapter_17_Promise/156_Promise_REAL_API_PART2.js
node chapter_17_Promise/157_Finally.js
node chapter_17_Promise/158_Call_Py_Problem.js
node chapter_17_Promise/159_Promise_ALL.js
node chapter_17_Promise/160_Promise_IQ.js

# Chapter 18
node chapter_18_Async_Await/161_Async.js
node chapter_18_Async_Await/162_Async.js
node chapter_18_Async_Await/163_PyODom.js
node chapter_18_Async_Await/164_Async_Ex.js
node chapter_18_Async_Await/165_AA_Parallel.js
node chapter_18_Async_Await/165_AA_Seq.js
node chapter_18_Async_Await/166_IQ.js

# Chapter 19 — run from inside the chapter directory
cd chapter_19_Playwright_Basics
npx playwright test                        # run all tests (all browsers)
npx playwright test tests/example.spec.ts  # run a single test file
npx playwright test --headed               # run with browser visible
npx playwright show-report                 # open the HTML report

cd ..

# Chapter 20 — Export/Import
node chapter_20_Oops_Basics/01_EXPORT_IMPORT/168_EXPORT_IMPORT.js
node chapter_20_Oops_Basics/01_EXPORT_IMPORT/169_Utils.js
node chapter_20_Oops_Basics/01_EXPORT_IMPORT/170_Logger.js

# Chapter 21 — Classes & Objects
node chapter_21_Classes_and_Objects/02_CLASS_OBJECT/171_Class_Object.js
node chapter_21_Classes_and_Objects/02_CLASS_OBJECT/177_Static.js
node chapter_21_Classes_and_Objects/02_CLASS_OBJECT/Jun22_Task1_Calc.js
node chapter_21_Classes_and_Objects/02_CLASS_OBJECT/Jun22_Task2_StaticVsNS.js
node chapter_21_Classes_and_Objects/02_CLASS_OBJECT/Jun22_Task2.js

# Chapter 22 — Encapsulation
node chapter_22_Encapsulation/03_ENCAPSULATION/179_Encap.js
node chapter_22_Encapsulation/03_ENCAPSULATION/180_REAL_EXAMPLE.js
node chapter_22_Encapsulation/03_ENCAPSULATION/181_Encap_Car.js
node chapter_22_Encapsulation/03_ENCAPSULATION/182_Encap_Bank.js

# Chapter 23 — Inheritance
node chapter_23_Inheritance/183_Single_Inheritance.js
node chapter_23_Inheritance/184_SI_Example.js
node chapter_23_Inheritance/185_Single_Inheritence_Contrv.js
node chapter_23_Inheritance/186_IQ.js
node chapter_23_Inheritance/187_IQ2.js
node chapter_23_Inheritance/188_REAL_POM.js
node chapter_23_Inheritance/189_Multiple_Inheritance.js
node chapter_23_Inheritance/190_Multiple_Level_Inheritance.js
node chapter_23_Inheritance/191_Hierarchical_Inheritance.js

# Chapter 24 — Polymorphism
node chapter_24_Polymorphism/192_Method_Overriding.js

# Chapter 25 — OOP Interview Questions
node chapter_25_OOPS_Interview_Questions/EX1.js
node chapter_25_OOPS_Interview_Questions/EX2.js
node chapter_25_OOPS_Interview_Questions/EX3.js
node chapter_25_OOPS_Interview_Questions/EX4.js
node chapter_25_OOPS_Interview_Questions/EX5.js
node chapter_14_Objects/125_Objects2.js
node chapter_14_Objects/126_Objects_Creation.js
node chapter_14_Objects/127_Objects_REAL.js
node chapter_14_Objects/128_Primitive_Ref.js
node chapter_14_Objects/129_Ob_Examples.js
node chapter_14_Objects/130_IQ.js
node chapter_14_Objects/131_Object_Fn.js
node chapter_14_Objects/132_Obj_Decon.js
node chapter_14_Objects/133_Spread.js
node chapter_14_Objects/134_Objects_GET_SET_Methods.js
node chapter_14_Objects/135_IQ.js
node chapter_14_Objects/136_Obj_REAL.js
node chapter_14_Objects/137_Let_const_obj.js
```

## Author

**Shivani Anand** — QA Engineer learning Playwright test automation
