function print() {
    console.log("Normal function is called");
}


function placeOrder(ClipboardItem, ShivaniCallBack) {
    console.log("Hi, Your order is placed");
    ShivaniCallBack();
}


//FirstWay to call
placeOrder("Pizza", print); //calling another function from function


//Hi, Your order is placed
//Normal function is called


//SecondWay to call
placeOrder("Burger", function () {
    console.log("I am function without name");
})
//Hi, Your order is placed
//I am function without name




//Third Way = Arrow fn
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function without name");
});

//Hi, Your order is placed
//Arrow Fn, I am also a function without name