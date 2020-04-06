"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let until = protractor_1.protractor.ExpectedConditions;
protractor_1.browser.waitForAngularEnabled(true);
protractor_1.browser.ignoreSynchronization = true;
protractor_1.browser.manage().timeouts().implicitlyWait(10000);
let elem = protractor_1.element(protractor_1.by.css("div[aria-label='Start a new conversation. Type @ to mention someone.']"));
cucumber_1.Given('You login to {string} using ID {string} and Password {string}', (teamsUrl, id, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://teams.microsoft.com');
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.$("input[type='email']").sendKeys("admin@M365x218086.onmicrosoft.com");
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.$("input[value='Next']").click();
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.$("input[type='password']").sendKeys("bxK7kf8u5D");
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.id("idSIButton9"))).click().perform();
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.actions().mouseMove(protractor_1.$("input[value='Yes']")).click().perform();
    yield protractor_1.browser.sleep(3000);
    let elem = protractor_1.element(protractor_1.by.css(".use-app-lnk"));
    yield protractor_1.browser.wait(until.elementToBeClickable(elem), 5000, 'Element taking too long to appear in the DOM');
    yield elem.click();
    yield protractor_1.browser.sleep(8000);
}));
cucumber_1.Given('You go to {string} Team channel', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let elem = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'PollyAutoTest')]"));
    yield protractor_1.browser.wait(until.elementToBeClickable(elem), 5000, 'Element taking too long to appear in the DOM');
    yield elem.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Given('Navigate to channel compose box and you type {string}', (appName) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(10000);
    yield protractor_1.browser.wait(until.elementToBeClickable(elem), 5000, 'Element taking too long to appear in the DOM');
    protractor_1.browser.actions().mouseDown(elem)
        .click()
        .mouseUp()
        .sendKeys(appName)
        .perform();
}));
cucumber_1.When('Say {string} to polly bot', (command) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield elem.sendKeys(protractor_1.Key.ENTER);
    yield protractor_1.browser.sleep(3000);
    yield elem.sendKeys(protractor_1.Key.SPACE);
    yield protractor_1.browser.sleep(3000);
    yield elem.sendKeys(command);
    yield protractor_1.browser.sleep(3000);
    yield elem.sendKeys(protractor_1.Key.ENTER);
}));
cucumber_1.Then('You should be able to send the command with out issues', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('You should get a respose from Polly bot', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    expect(true).toBe(false);
    console.log("Test Passed");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9sbHlTdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbmF0aW9ucy9Qb2xseVN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFzRTtBQUV0RSxJQUFJLEtBQUssR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQzFDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7QUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEQsSUFBSSxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdFQUF3RSxDQUFDLENBQUMsQ0FBQztBQUVyRyxnQkFBSyxDQUFDLCtEQUErRCxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUNwRyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDakQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxjQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sY0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xGLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzVFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsSUFBSSxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLDhDQUE4QyxDQUFDLENBQUM7SUFDM0csTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3RELElBQUksSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLDhDQUE4QyxDQUFDLENBQUM7SUFDM0csTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUssQ0FBQyx1REFBdUQsRUFBRSxDQUFPLE9BQU8sRUFBRSxFQUFFO0lBQzdFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLDhDQUE4QyxDQUFDLENBQUM7SUFDM0csb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzVCLEtBQUssRUFBRTtTQUNQLE9BQU8sRUFBRTtTQUNULFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDakIsT0FBTyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFPLE9BQU8sRUFBRSxFQUFFO0lBQ2hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsd0RBQXdELEVBQUUsR0FBUyxFQUFFO0lBQ3RFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxHQUFTLEVBQUU7SUFDdkQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9