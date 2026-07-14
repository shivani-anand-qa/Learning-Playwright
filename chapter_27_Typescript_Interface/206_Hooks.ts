export { }
interface TestHook {
    (testName: string): void;
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[Before] Setting up: " + testName);
    //for db code for make connection to library
    //mysql connector npm
}
let afterEachHook: TestHook = function (testName: string): void {
    console.log("[After] Tearing down: " + testName);

};

interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

beforeEachHook("Login Test");

let hookTest1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-" + hookTest1.id + ": " + hookTest1.name + "->" + hookTest1.status);
afterEachHook("Login Test");
