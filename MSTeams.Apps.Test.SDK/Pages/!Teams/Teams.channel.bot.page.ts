import { BasePage } from "../base.page";
import { ElementFinder, element, by, $, $$, browser, Key } from "protractor";

export class TeamsChannelPage extends BasePage {

    channelInATeam: ElementFinder;
    composeBoxInputField: ElementFinder;

    constructor() {
        super();
        this.channelInATeam = element(by.xpath("//span[contains(text(),'PollyAutoTest')]"));
        this.composeBoxInputField = $("div[aria-label='Start a new conversation. Type @ to mention someone.']");
    }

    async ClickToSelectTheChannel() {
        await browser.wait(this.until.elementToBeClickable(this.channelInATeam), 5000, 'Element taking too long to appear in the DOM');
        await this.channelInATeam.click();
    }

    async InvokeAppUnderTestInComposeBox() {
        await browser.wait(this.until.elementToBeClickable(this.composeBoxInputField), 5000, 'Element taking too long to appear in the DOM');
        browser.actions().mouseDown(this.composeBoxInputField)
            .click()
            .mouseUp()
            .sendKeys("@Polly")
            .perform();
    }

    async EnterTheCommandInComposeBoxToSend() {
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys(Key.ENTER);
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys(Key.SPACE);
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys("Hi");
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys(Key.ENTER)
    }
}