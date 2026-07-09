//1st way
/*
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    static c;
    static d;
    static e;
    static f;
    sub(a, b) {
        Calculator.c = a - b;
        return Calculator.c;
    }
    mod(a, b) {
        d = a % b;
    }
    div(a, b) {
        e = a / b;
    }
    mul(a, b) {
        f = a * b;
    }
}
const obj1 = new Calculator(10, 2);
//console.log(obj1.c);// undefined
//console.log(Calculator.c); //undefined without Calculator.c in method
//console.log(obj1.sub()); //NaN
obj1.sub(10, 2);
console.log(Calculator.c);
*/
//2nd way
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sub() {
        return this.a - this.b;
    }
    mod() {
        return this.a % this.b;
    }
    div() {
        return this.a / this.b;
    }
    mul() {
        return this.a * this.b;
    }
}
const obj1 = new Calculator(10, 2);
console.log(obj1.sub());
console.log(obj1.mod());
console.log(obj1.div());
console.log(obj1.mul());
