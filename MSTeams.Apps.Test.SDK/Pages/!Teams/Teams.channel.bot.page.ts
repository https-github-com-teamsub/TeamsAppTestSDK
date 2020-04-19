import { BasePage } from "../base.page";
import { ElementFinder, element, by, $, $$, browser, Key } from "protractor";

export class TeamsChannelPage extends BasePage {

    composeBoxInputField: ElementFinder;

    constructor() {
        super();
        this.composeBoxInputField = $("div[aria-label='Start a new conversation. Type @ to mention someone.']");
    }

    async ClickToSelectTheChannel(channelName: string) {
        let channelInATeam = element(by.xpath("//span[contains(text(),'" + channelName + "')]"));
        await browser.wait(this.until.elementToBeClickable(channelInATeam), 5000, 'Element taking too long to appear in the DOM');
        await channelInATeam.click();
    }

    async InvokeAppUnderTestInComposeBox(appName: string) {
        await browser.wait(this.until.elementToBeClickable(this.composeBoxInputField), 5000, 'Element taking too long to appear in the DOM');
        browser.actions().mouseDown(this.composeBoxInputField)
            .click()
            .mouseUp()
            .sendKeys(appName)
            .perform();
    }

    async EnterTheCommandInComposeBoxToSend(command:string) {
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys(Key.ENTER);
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys(Key.SPACE);
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys(command);
        await browser.sleep(3000);
        await this.composeBoxInputField.sendKeys(Key.ENTER)
    }
}