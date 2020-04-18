import { ElementFinder, element, by, $, $$ } from "protractor";
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
}