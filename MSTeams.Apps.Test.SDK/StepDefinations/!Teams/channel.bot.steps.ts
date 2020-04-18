import { Given, When, Then } from "cucumber";
import { browser, $, element, protractor, by, Key } from "protractor";
import { TeamsLoginPage } from "../../Pages/!Teams/Teams.login.page";
import { TeamsChannelPage } from "../../Pages/!Teams/Teams.channel.bot.page";

let until = protractor.ExpectedConditions;
let teamsLoginPage = new TeamsLoginPage();
let teamsChannelPage = new TeamsChannelPage();

Given('Login to teams with provided credentials', async () => {
    browser.waitForAngularEnabled(true);
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(100000);
    browser.manage().window().maximize();
    await browser.get('https://teams.microsoft.com');
    await teamsLoginPage.emailInputTextField.sendKeys("admin@M365x218086.onmicrosoft.com");
    await teamsLoginPage.nextButton.click();
    await browser.wait(until.visibilityOf(teamsLoginPage.passwordInputTextField), 5000, 'Element taking too long to appear in the DOM');
    await teamsLoginPage.passwordInputTextField.sendKeys("bxK7kf8u5D");
    await browser.sleep(5000);
    await browser.actions().mouseMove(teamsLoginPage.signInButton).click().perform()
    await browser.wait(until.elementToBeClickable(teamsLoginPage.yesStaySignInButton), 5000, 'Element taking too long to appear in the DOM');
    await browser.actions().mouseMove(teamsLoginPage.yesStaySignInButton).click().perform()
    await browser.wait(until.elementToBeClickable(teamsLoginPage.useWebAppLink), 5000, 'Element taking too long to appear in the DOM');
    await teamsLoginPage.useWebAppLink.click();
});
Given('Go to any channel where app under test is configured', async () => {
    await browser.wait(until.elementToBeClickable(teamsChannelPage.selectTeamsChannelOption), 5000, 'Element taking too long to appear in the DOM');
    await teamsChannelPage.selectTeamsChannelOption.click();
});
Given('Navigate to channel compose box and invoke the app', async () => {
    await browser.wait(until.elementToBeClickable(teamsChannelPage.composeBoxInputField), 5000, 'Element taking too long to appear in the DOM');
    browser.actions().mouseDown(teamsChannelPage.composeBoxInputField)
        .click()
        .mouseUp()
        .sendKeys("@Polly")
        .perform();
});

When('Send help command in compose box', async () => {
    await browser.sleep(3000);
    await teamsChannelPage.composeBoxInputField.sendKeys(Key.ENTER);
    await browser.sleep(3000);
    await teamsChannelPage.composeBoxInputField.sendKeys(Key.SPACE);
    await browser.sleep(3000);
    await teamsChannelPage.composeBoxInputField.sendKeys("Hi");
    await browser.sleep(3000);
    await teamsChannelPage.composeBoxInputField.sendKeys(Key.ENTER)
});

Then('You should get the respose from the bot', async () => {
    await browser.sleep(5000);
});
