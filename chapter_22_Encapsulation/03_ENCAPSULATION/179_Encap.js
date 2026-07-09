class BankAccount {
    #balance = 0; //private field - hidden from outside, in Java its private balance =0;
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; //this.#balance = this.#balance+ amount, written with composite operator
        }
    }
    getBalance() {
        return this.#balance; //controlled access
    }
}
const account = new BankAccount();
account.deposit(100);
//account.#balance()//we cant access it
console.log(account.getBalance()); //100
