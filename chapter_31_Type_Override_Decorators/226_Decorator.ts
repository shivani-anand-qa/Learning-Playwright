function Log(original: any, context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: any[]) {
        console.log(`Called ${String(context.name)} with args`, args);
        return original.apply(this, args);
    };
}

class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3);  