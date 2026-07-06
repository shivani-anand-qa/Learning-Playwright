//Private fields (#) - Hidden Data
//Public Fields

class Credentials {
    #apiKey; // Private variables are not allowed to be used outside
    user;


    constructor(user, key) {
        this.user = user; //public
        this.#apiKey = key;
    }
    //Customemade function by us
    shivanigetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.user);
console.log(cred.api); //undefined as its private
//console.log(cred.#apiKey);//error

const token = cred.shivanigetAuthHeader();
console.log(token); //Bearer secret_key_1234