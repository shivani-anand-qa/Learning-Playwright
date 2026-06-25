let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Food is ready to deliver");
    }
    else {
        reject("Order cancelled due to rain");
    }
});
console.log(order);