export { };

class BaseTest {
    setup(): void {
        console.log("[BASE] Open browser");
    }
    teardown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {
    override setup(): void {
        console.log("[LoginTest] Open Browser");
        console.log("[LoginTest] Maximize");
    }
}
class APITest extends BaseTest {

    override setup(): void {
        console.log("[APITest] No Browser!");

    }
}

let apitest = new APITest();
apitest.setup();

let test = new LoginTest();
test.setup();
// [APITest] No Browser!
// [LoginTest] Open Browser
// [LoginTest] Maximize