import { ElementFinder, element, by, $, $$, browser } from "protractor";
import { BasePage } from "../base.page";

export class TeamsLoginPage extends BasePage {
    emailInputTextField: ElementFinder;
    nextButton: ElementFinder;
    passwordInputTextField: ElementFinder;
    signInButton: ElementFinder;
    yesStaySignInButton: ElementFinder;
    useWebAppLink: ElementFinder;

    constructor() {
        super();
        this.emailInputTextField = $("input[type='email']");
        this.nextButton = $("input[value='Next']");
        this.passwordInputTextField = $("input[type='password']");
        this.signInButton = element(by.id("idSIButton9"));
        this.yesStaySignInButton = $("input[value='Yes']");
        this.useWebAppLink = element(by.css(".use-app-lnk"));
    }

    async EnterEmailId(emailId: string) {
        await this.emailInputTextField.sendKeys(emailId);
    }

    async ClickOnNext() {
        await this.nextButton.click();
    }

    async EnterPassword(password: string) {
        await browser.wait(this.until.visibilityOf(this.passwordInputTextField), 5000, 'Element taking too long to appear in the DOM');
        await this.passwordInputTextField.sendKeys(password);
    }

    async ClickOnSignIn() {
        await browser.sleep(5000);
        await browser.actions().mouseMove(this.signInButton).click().perform();
    }

    async ClickOnYes() {
        await browser.wait(this.until.elementToBeClickable(this.yesStaySignInButton), 5000, 'Element taking too long to appear in the DOM');
        await browser.actions().mouseMove(this.yesStaySignInButton).click().perform()
    }

    async ClickUseWebLinkInstead() {
        await browser.wait(this.until.elementToBeClickable(this.useWebAppLink), 5000, 'Element taking too long to appear in the DOM');
        await this.useWebAppLink.click();
    }
}