"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@testing" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@testing" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
});
cucumber_1.Before({ tags: "@AngularTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log(" I need to execute first");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        console.log("Test is completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //code to take screesnhot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBa0U7QUFHbEUsMkNBQXFDO0FBRXJDLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUU7SUFDekIsK0RBQStEO0lBQy9ELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFO0lBQ3RCLCtEQUErRDtJQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFTCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUU7SUFDaEMsd0VBQXdFO0lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsVUFBZSxRQUFROztRQUMzQiwrREFBK0Q7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUksaUJBQU0sQ0FBQyxNQUFNLEVBQzNDO1lBQ0UseUJBQXlCO1lBQzFCLE1BQU0sVUFBVSxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUN6QztRQUNIOzs7Ozs7Ozs7VUFTRTtJQUNGLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==