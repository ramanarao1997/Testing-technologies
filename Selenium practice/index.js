const {
    Builder,
    By,
    Key,
    util
} = require('selenium-webdriver');

// using async await
async function searchInGoogle() {
    const driver = await new Builder().forBrowser("firefox").build();
    await driver.get('https://www.google.com');
    await driver.findElement(By.name("q")).sendKeys("Selenium tutorials in javascript", Key.RETURN);
}

searchInGoogle();

// using promises
function example() {
    var driver = new Builder().forBrowser("chrome").build();

    driver.get("https://www.lambdatest.com").then(function () {
        driver.findElement(By.linkText("Log in")).click().then(function () {
            driver.getTitle().then(function (title) {

                setTimeout(function () {
                    console.log(title);
                    driver.quit();
                }, 5000);
            }).catch(function () {
                console.log("Could not retrieve title!");
            });
        }).catch(function () {
            console.log("No login link found!");
        });
    });
}

example();