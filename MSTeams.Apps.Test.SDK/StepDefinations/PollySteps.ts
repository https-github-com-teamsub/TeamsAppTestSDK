import { Given, When, Then } from "cucumber";
import { browser, $, element, protractor, by, Key } from "protractor";

let until = protractor.ExpectedConditions;
browser.waitForAngularEnabled(true);
browser.ignoreSynchronization = true;
browser.manage().timeouts().implicitlyWait(10000);
let elem = element(by.css("div[aria-label='Start a new conversation. Type @ to mention someone.']"));

Given('You login to {string} using ID {string} and Password {string}', async (teamsUrl, id, password) => {
    await browser.get('https://teams.microsoft.com');
    await browser.sleep(3000);
    await $("input[type='email']").sendKeys("admin@M365x218086.onmicrosoft.com");
    await browser.sleep(3000);
    await $("input[value='Next']").click();
    await browser.sleep(3000);
    await $("input[type='password']").sendKeys("bxK7kf8u5D");
    await browser.sleep(5000);
    await browser.actions().mouseMove(element(by.id("idSIButton9"))).click().perform()
    await browser.sleep(5000);
    await browser.actions().mouseMove($("input[value='Yes']")).click().perform()
    await browser.sleep(3000);
    let elem = element(by.css(".use-app-lnk"));
    await browser.wait(until.elementToBeClickable(elem), 5000, 'Element taking too long to appear in the DOM');
    await elem.click();
    await browser.sleep(8000);
});
Given('You go to {string} Team channel', async (string) => {
    let elem = element(by.xpath("//span[contains(text(),'PollyAutoTest')]"));
    await browser.wait(until.elementToBeClickable(elem), 5000, 'Element taking too long to appear in the DOM');
    await elem.click();
    await browser.sleep(3000);
});
Given('Navigate to channel compose box and you type {string}', async (appName) => {
    await browser.sleep(10000);
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
    await elem.sendKeys(Key.ENTER);
});
Then('You should be able to send the command with out issues', async () => {
    await browser.sleep(5000);
});
Then('You should get a respose from Polly bot', async () => {
    await browser.sleep(5000);
    expect(true).toBe(false);
    console.log("Test Passed");
});