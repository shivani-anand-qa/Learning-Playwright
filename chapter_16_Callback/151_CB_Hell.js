// Real QA Scenario: End-to-End E-Commerce Purchase Flow (app.shop.com)
// openBrowser() → goToHomePage() → searchProduct() → selectProduct()
// → addToCart() → goToCart() → proceedToCheckout() → enterShippingAddress()
// → selectShippingMethod() → enterPaymentDetails() → applyCoupon()
// → reviewOrder() → placeOrder() → waitForConfirmation() → verifyOrderId()
// → goToOrderHistory() → verifyOrderInHistory() → logout()
// → verifyLogout() → closeBrowser()

function openBrowser(callback) {
    setTimeout(function () {
        console.log("Step 1: Opening Chrome Browser");
        callback();
    }, 1000);
}

function goToHomePage(callback) {
    setTimeout(function () {
        console.log("Step 2: Navigating to app.shop.com Home Page");
        callback();
    }, 1000);
}

function searchProduct(callback) {
    setTimeout(function () {
        console.log("Step 3: Typing 'Wireless Headphones' in Search Bar");
        callback();
    }, 800);
}

function selectProduct(callback) {
    setTimeout(function () {
        console.log("Step 4: Clicking on the first search result");
        callback();
    }, 700);
}

function verifyProductPage(callback) {
    setTimeout(function () {
        console.log("Step 5: Verifying Product Page Title and Price");
        callback();
    }, 600);
}

function selectVariant(callback) {
    setTimeout(function () {
        console.log("Step 6: Selecting Color - Black, Size - Large");
        callback();
    }, 500);
}

function addToCart(callback) {
    setTimeout(function () {
        console.log("Step 7: Clicking 'Add to Cart' button");
        callback();
    }, 800);
}

function verifyCartBadge(callback) {
    setTimeout(function () {
        console.log("Step 8: Verifying Cart Badge shows count = 1");
        callback();
    }, 500);
}

function goToCart(callback) {
    setTimeout(function () {
        console.log("Step 9: Navigating to Cart Page");
        callback();
    }, 700);
}

function verifyCartItems(callback) {
    setTimeout(function () {
        console.log("Step 10: Verifying cart has 1 item - Wireless Headphones");
        callback();
    }, 600);
}

function proceedToCheckout(callback) {
    setTimeout(function () {
        console.log("Step 11: Clicking 'Proceed to Checkout' button");
        callback();
    }, 800);
}

function enterEmail(callback) {
    setTimeout(function () {
        console.log("Step 12: Entering Email - testuser@shop.com");
        callback();
    }, 500);
}

function enterShippingAddress(callback) {
    setTimeout(function () {
        console.log("Step 13: Filling Shipping Address - 123 Main St, New York, NY 10001");
        callback();
    }, 900);
}

function selectShippingMethod(callback) {
    setTimeout(function () {
        console.log("Step 14: Selecting 'Express Shipping - 2 Business Days'");
        callback();
    }, 600);
}

function enterPaymentDetails(callback) {
    setTimeout(function () {
        console.log("Step 15: Entering Card Details - **** **** **** 4242");
        callback();
    }, 1000);
}

function applyCoupon(callback) {
    setTimeout(function () {
        console.log("Step 16: Applying Coupon Code 'SAVE20' - 20% discount applied");
        callback();
    }, 800);
}

function verifyOrderSummary(callback) {
    setTimeout(function () {
        console.log("Step 17: Verifying Order Summary - Subtotal, Discount, Shipping, Total");
        callback();
    }, 700);
}

function reviewOrder(callback) {
    setTimeout(function () {
        console.log("Step 18: Reviewing full order details before placing");
        callback();
    }, 600);
}

function placeOrder(callback) {
    setTimeout(function () {
        console.log("Step 19: Clicking 'Place Order' button");
        callback();
    }, 1000);
}

function waitForConfirmation(callback) {
    setTimeout(function () {
        console.log("Step 20: Waiting for Order Confirmation Page to load");
        callback();
    }, 1500);
}

function verifyOrderId(callback) {
    setTimeout(function () {
        console.log("Step 21: Verifying Order ID is displayed on Confirmation Page");
        callback();
    }, 600);
}

function verifyConfirmationEmail(callback) {
    setTimeout(function () {
        console.log("Step 22: Verifying Confirmation Email sent to testuser@shop.com");
        callback();
    }, 700);
}

function goToOrderHistory(callback) {
    setTimeout(function () {
        console.log("Step 23: Navigating to My Account > Order History");
        callback();
    }, 800);
}

function verifyOrderInHistory(callback) {
    setTimeout(function () {
        console.log("Step 24: Verifying new order appears in Order History list");
        callback();
    }, 600);
}

function logout(callback) {
    setTimeout(function () {
        console.log("Step 25: Clicking Logout from Account Menu");
        callback();
    }, 700);
}

function verifyLogout(callback) {
    setTimeout(function () {
        console.log("Step 26: Verifying user is redirected to Home Page after Logout");
        callback();
    }, 500);
}

function closeBrowser(callback) {
    setTimeout(function () {
        console.log("Step 27: Closing the Browser");
        callback();
    }, 500);
}

//// THIS IS CALLBACK HELL 👇 - Never use (20+ nested callbacks)
openBrowser(function () {
    goToHomePage(function () {
        searchProduct(function () {
            selectProduct(function () {
                verifyProductPage(function () {
                    selectVariant(function () {
                        addToCart(function () {
                            verifyCartBadge(function () {
                                goToCart(function () {
                                    verifyCartItems(function () {
                                        proceedToCheckout(function () {
                                            enterEmail(function () {
                                                enterShippingAddress(function () {
                                                    selectShippingMethod(function () {
                                                        enterPaymentDetails(function () {
                                                            applyCoupon(function () {
                                                                verifyOrderSummary(function () {
                                                                    reviewOrder(function () {
                                                                        placeOrder(function () {
                                                                            waitForConfirmation(function () {
                                                                                verifyOrderId(function () {
                                                                                    verifyConfirmationEmail(function () {
                                                                                        goToOrderHistory(function () {
                                                                                            verifyOrderInHistory(function () {
                                                                                                logout(function () {
                                                                                                    verifyLogout(function () {
                                                                                                        closeBrowser(function () {
                                                                                                            console.log("✅ Test Complete! E2E Purchase Flow Passed.")
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

/*
Step 1:  Opening Chrome Browser
Step 2:  Navigating to app.shop.com Home Page
Step 3:  Typing 'Wireless Headphones' in Search Bar
Step 4:  Clicking on the first search result
Step 5:  Verifying Product Page Title and Price
Step 6:  Selecting Color - Black, Size - Large
Step 7:  Clicking 'Add to Cart' button
Step 8:  Verifying Cart Badge shows count = 1
Step 9:  Navigating to Cart Page
Step 10: Verifying cart has 1 item - Wireless Headphones
Step 11: Clicking 'Proceed to Checkout' button
Step 12: Entering Email - testuser@shop.com
Step 13: Filling Shipping Address - 123 Main St, New York, NY 10001
Step 14: Selecting 'Express Shipping - 2 Business Days'
Step 15: Entering Card Details - **** **** **** 4242
Step 16: Applying Coupon Code 'SAVE20' - 20% discount applied
Step 17: Verifying Order Summary - Subtotal, Discount, Shipping, Total
Step 18: Reviewing full order details before placing
Step 19: Clicking 'Place Order' button
Step 20: Waiting for Order Confirmation Page to load
Step 21: Verifying Order ID is displayed on Confirmation Page
Step 22: Verifying Confirmation Email sent to testuser@shop.com
Step 23: Navigating to My Account > Order History
Step 24: Verifying new order appears in Order History list
Step 25: Clicking Logout from Account Menu
Step 26: Verifying user is redirected to Home Page after Logout
Step 27: Closing the Browser
✅ Test Complete! E2E Purchase Flow Passed.
*/
