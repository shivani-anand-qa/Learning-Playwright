class CIBC {
    #balance;


    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }


    getBalance() {
        return this.#balance;
    }


    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not Allowed");
        }
    }
}
let Shivani = new CIBC("Shiwani", 1000);
console.log(Shivani.getBalance()); //1000
Shivani.setBalance(1000000, false); //Not Allowed
console.log(Shivani.getBalance()); //1000


let Shivani_father = new CIBC("Shiwani", 2000);
console.log(Shivani_father.getBalance()); //2000
Shivani_father.setBalance(300000, true);
console.log(Shivani_father.getBalance()); //300000
