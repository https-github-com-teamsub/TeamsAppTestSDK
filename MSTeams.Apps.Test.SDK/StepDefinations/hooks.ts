
import {After,Before, Status, BeforeAll,AfterAll} from "cucumber";
import { config } from "../Config/Config";

import { browser } from "protractor";

Before({tags: "@testing"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
});

After({tags: "@testing"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
  });

Before({tags: "@AngularTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log(" I need to execute first");
});

After(async function(scenario) {
  // This hook will be executed before scenarios tagged with @foo
  console.log("Test is completed");
  if (scenario.result.status=== Status.FAILED)
  {
    //code to take screesnhot
   const screenshot= await browser.takeScreenshot();
 
        this.attach(screenshot,"image/png");
  }
/*
BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});


AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
*/
});





