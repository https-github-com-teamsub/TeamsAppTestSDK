import { browser, protractor } from "protractor";

export class BasePage {
    
    until:any;

    constructor() {
        
        this.until = protractor.ExpectedConditions;
    }

    //Open browser
    async OpenBrowser(url: string) {
        await browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = true;
        await browser.manage().timeouts().implicitlyWait(100000);
        await browser.manage().window().maximize();
        await browser.get(url);
    }
}
