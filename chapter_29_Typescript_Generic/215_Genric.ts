function getString(name: string): string {
    return "Jack";
}


getString("Shivani");
//getString(123); //Doesnt work as we have declared accepted type -string
//console.log(getString("Shivani")); //Jack

function getFirstResult<T>(results: T[]) {
    return results[0]!; //The ! - non-null assertion operator
    // ← "trust me, not null/undefined"

}
// !tells the compiler: "this value is NOT null or undefined — stop warning me." Compile - time only.Zero runtime effect(strips out in compiled JS).


let firstCode = getFirstResult<number>([200, 400, 500]);
let firstTest = getFirstResult<string>(["Login", "Signup", "Cart"]);


console.log("First code: ", firstCode);
console.log("First Test: ", firstTest);

// First code:  200
// First Test:  Login
