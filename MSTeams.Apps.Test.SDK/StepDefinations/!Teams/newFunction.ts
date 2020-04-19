import { browser } from "protractor";
import { teamsLoginPage } from "./channel.bot.steps";
export async function newFunction() {
    await browser.sleep(5000);
    await browser.actions().mouseMove(teamsLoginPage.signInButton).click().perform();
}
