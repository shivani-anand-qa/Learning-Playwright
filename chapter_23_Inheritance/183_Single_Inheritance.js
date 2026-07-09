class BasePage {
    constructor(pageName) {


    }
    open() {
        console.log("Opening the page");
    }


    close() {
        console.log("Closing the page");
    }
}
class LoginPage extends BasePage {


}
const page = new LoginPage();
page.open(); //Opening the page
page.close(); //Closing the page
