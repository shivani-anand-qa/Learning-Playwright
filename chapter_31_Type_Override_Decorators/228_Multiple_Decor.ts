function beforeSomething(method: any) {
    return function () {
        console.log("EAT");
        return method();
    };
}

function BeforeSomething(method: any) {
    return function () {
        console.log("SLEEP");
        return method();
    };
}

class Dog {
    @beforeSomething
    @BeforeSomething
    bark() {
        return "woof";
    }
}

let r = new Dog().bark();
console.log(r);
