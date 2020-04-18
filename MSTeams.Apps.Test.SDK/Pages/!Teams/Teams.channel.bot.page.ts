import { BasePage } from "../base.page";
import { ElementFinder, element, by, $, $$ } from "protractor";

export class TeamsChannelPage extends BasePage {

    selectTeamsChannelOption: ElementFinder;
    composeBoxInputField: ElementFinder;

    constructor() {
        super();
        this.selectTeamsChannelOption = element(by.xpath("//span[contains(text(),'PollyAutoTest')]"));
        this.composeBoxInputField = $("div[aria-label='Start a new conversation. Type @ to mention someone.']");
    }
}