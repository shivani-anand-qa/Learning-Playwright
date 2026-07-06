class TestCase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() { //Method
        console.log(this.name + "->" + this.status + "->" + this.priority);
    }
}
let loginTC = new TestCase("Login Test", "Pass", "P0");
let signupTC = new TestCase("Signup TC", "Fail", "P1");

loginTC.display();

//Function
function f1() {

}

// Function vs Method
// method is function but inside the class :)