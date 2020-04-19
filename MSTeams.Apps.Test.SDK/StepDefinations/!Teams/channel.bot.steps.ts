import { Given, When, Then } from "cucumber";
import { browser, $, element, protractor, by, Key } from "protractor";
import { TeamsLoginPage } from "../../Pages/!Teams/Teams.login.page";
import { TeamsChannelPage } from "../../Pages/!Teams/Teams.channel.bot.page";
import { newFunction } from "./newFunction";

let until = protractor.ExpectedConditions;
export let teamsLoginPage = new TeamsLoginPage();
let teamsChannelPage = new TeamsChannelPage();

Given('Login to teams with provided credentials', async () => {
    await teamsLoginPage.OpenBrowser("https://teams.microsoft.com");
    await teamsLoginPage.EnterEmailId("admin@M365x218086.onmicrosoft.com");
    await teamsLoginPage.ClickOnNext();
    await teamsLoginPage.EnterPassword("bxK7kf8u5D");
    await teamsLoginPage.ClickOnSignIn();
    await teamsLoginPage.ClickOnYes();
    await teamsLoginPage.ClickUseWebLinkInstead();
});

Given('Go to any channel where app under test is configured', async () => {
    await teamsChannelPage.ClickToSelectTheChannel();
});

Given('Navigate to channel compose box and invoke the app', async () => {
    await teamsChannelPage.InvokeAppUnderTestInComposeBox();
});

When('Send help command in compose box', async () => {
    await teamsChannelPage.EnterTheCommandInComposeBoxToSend();
});

Then('You should get the respose from the bot', async () => {
    await browser.sleep(5000);
});