class BasePage {
    verify() {
        console.log("Verify base page");
    }
}


class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button exists");
    }
}


class Dashboard {
    verify() {
        console.log("Verify: Welcome message Shown");
        console.log("Sidebar menu is loaded");
    }
}


class CartPage {
    verify() {
        console.log("Verify cart items are displayed");
        console.log("Verify total price is correct");
    }
}
let pages = [new LoginPage(), new Dashboard(), new CartPage()];


pages.forEach(function (page) {
    page.verify();
    console.log("---")
});


//O/p
/*
Verify: username field exists
Verify: password field exists
Verify: login button exists
---
Verify: Welcome message Shown
Sidebar menu is loaded
---
Verify cart items are displayed
Verify total price is correct
---


*/
