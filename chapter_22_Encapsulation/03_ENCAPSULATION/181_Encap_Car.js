class Car {
    #engine;


    constructor(name, engine) {
        this.name = name;
        this.#engine = engine;
    }


    setCar(engine) {
        this.#engine = engine;
    }
    getCar() {
        return this.#engine;
    }
}


const vehicle = new Car("Tesla", "V8");
console.log(vehicle.getCar()); //V8
console.log(vehicle.setCar("Turbo")); //undefined so no need of console
console.log(vehicle.getCar()); //Turbo
