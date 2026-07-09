class Person {
    //Hide your children


    #child1;
    #child2;




    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }


    getChild1() {
        return this.#child1;
    }


    setChild1(changed_name) {
        this.#child1 = changed_name;
    }


}
let p = new Person("Shivani", "Bella", "Junior");
console.log(p.name); //Shivani
//console.log(p.#child1); //Property '#child1' is not accessible outside class 'Person' because it has a private identifier.
console.log(p.getChild1()); //Bella
