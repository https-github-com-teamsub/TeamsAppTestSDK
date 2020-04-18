import { Given, When, Then } from "cucumber";
import { browser, $, element, protractor, by, Key } from "protractor";

let until = protractor.ExpectedConditions;

let elem = element(by.css("div[aria-label='Start a new conversation. Type @ to mention someone.']"));

Given('You login to {string} using ID {string} and Password {string}', async (teamsUrl, id, password) => {
    browser.waitForAngularEnabled(true);
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(100000);
    browser.manage().window().maximize();
    await browser.get('https://teams.microsoft.com');
    await $("input[type='email']").sendKeys("admin@M365x218086.onmicrosoft.com");
    await $("input[value='Next']").click();

    await browser.wait(until.visibilityOf($("input[type='password']")), 5000, 'Element taking too long to appear in the DOM');
    await $("input[type='password']").sendKeys("bxK7kf8u5D");
    await browser.sleep(5000);
    // await browser.wait(until.elementToBeClickable(element(by.id("idSIButton9"))), 5000, 'Element taking too long to appear in the DOM');
    await browser.actions().mouseMove(element(by.id("idSIButton9"))).click().perform()
    await browser.wait(until.elementToBeClickable($("input[value='Yes']")), 5000, 'Element taking too long to appear in the DOM');
    await browser.actions().mouseMove($("input[value='Yes']")).click().perform()
  // browser.ignoreSynchronization = false;
    //await browser.sleep(3000);
    let elem2 = element(by.css(".use-app-lnk"));
    await browser.wait(until.elementToBeClickable(elem2), 5000, 'Element taking too long to appear in the DOM');
    await elem2.click();
  //  await browser.sleep(8000);
});
Given('You go to {string} Team channel', async (string) => {
   // await browser.sleep(100000);
    let elem = element(by.xpath("//span[contains(text(),'PollyAutoTest')]"));
    await browser.wait(until.elementToBeClickable(elem), 5000, 'Element taking too long to appear in the DOM');
    await elem.click();
});
Given('Navigate to channel compose box and you type {string}', async (appName) => {
    await browser.wait(until.elementToBeClickable(elem), 5000, 'Element taking too long to appear in the DOM');
    browser.actions().mouseDown(elem)
        .click()
        .mouseUp()
        .sendKeys(appName)
        .perform();
});

When('Say {string} to polly bot', async (command) => {
    await browser.sleep(3000);
    await elem.sendKeys(Key.ENTER);
    await browser.sleep(3000);
    await elem.sendKeys(Key.SPACE);
    await browser.sleep(3000);
    await elem.sendKeys(command);
    await browser.sleep(3000);
    await elem.sendKeys(Key.ENTER)
});
Then('You should be able to send the command with out issues', async () => {
    browser.quit();
});
Then('You should get a respose from Polly bot', async () => {
    await browser.sleep(5000);
    expect(true).toBe(false);
    console.log("Test Passed");
});