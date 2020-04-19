import { Given, When, Then } from "cucumber";
import { browser, $, element, protractor, by, Key } from "protractor";
import { TeamsLoginPage } from "../../Pages/!Teams/Teams.login.page";
import { TeamsChannelPage } from "../../Pages/!Teams/Teams.channel.bot.page";
import { DataProvider } from "../../Support/data.provider.util";

let teamsLoginPage = new TeamsLoginPage();
let teamsChannelPage = new TeamsChannelPage();
let TestData:any = DataProvider.GetTestDataFromJson("./Resources/teams.test.data.json");

Given('Login to teams with provided credentials', async () => {
    await teamsLoginPage.OpenBrowser(TestData.URL);
    await teamsLoginPage.EnterEmailId(TestData.EmailID);
    await teamsLoginPage.ClickOnNext();
    await teamsLoginPage.EnterPassword(TestData.Password);
    await teamsLoginPage.ClickOnSignIn();
    await teamsLoginPage.ClickOnYes();
    await teamsLoginPage.ClickUseWebLinkInstead();
});

Given('Go to any channel where app under test is configured', async () => {
    await teamsChannelPage.ClickToSelectTheChannel(TestData.ChannelName);
});

Given('Navigate to channel compose box and invoke the app', async () => {
    await teamsChannelPage.InvokeAppUnderTestInComposeBox(TestData.AppName);
});

When('Send help command in compose box', async () => {
    await teamsChannelPage.EnterTheCommandInComposeBoxToSend(TestData.HiCommand);
});

Then('You should get the respose from the bot', async () => {
    await browser.sleep(5000);
});