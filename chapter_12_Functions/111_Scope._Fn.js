//Scope in Functions

let env = "staging"; //global Scope

function setupConfig() {
    let timeout = 3000; //local scope
    console.log(env); //✅ can access global
    console.log(timeout); //✅ can access local
    //return "config done"   // now returns something meaningful
}

//setupConfig(); //nothing prints
console.log(setupConfig()); //staging
// 3000
// undefined

//but if we uncomment return instead of undefined it will print config done

