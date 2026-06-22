function cafe(item, callWhenTableisReady) {
    console.log("Finding....1");
    console.log("Finding....2");
    console.log("Finding....3");
    console.log(item);
    callWhenTableisReady();
}
function callWhenTableisReady() {
    console.log("calling 9984542130")
}


cafe("Burger", callWhenTableisReady);


/*
Finding....1
Finding....2
Finding....3
Burger
calling 9984542130
*/
cafe("Pizza", function () {
    console.log("calling 9984542130");
})


/*
Finding....1
Finding....2
Finding....3
Pizza
calling 9984542130
*/


cafe("Momos", () => {
    console.log("calling 4567891230");
});
/*
Finding....1
Finding....2
Finding....3
Momos
calling 4567891230
*/
