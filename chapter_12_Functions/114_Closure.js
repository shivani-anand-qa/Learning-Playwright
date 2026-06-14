function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter(0); //prints nothing
counter.increment(); //prints nothing
counter.increment();//prints nothing
counter.increment();//prints nothing
console.log(counter.get()); //3
counter.decrement(); //prints nothing
console.log(counter.get()); //2


