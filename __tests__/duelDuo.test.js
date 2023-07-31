const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://3.141.9.190/");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("Find the draw button", async()=>{
    await driver.get("http://3.141.9.190/");
    await driver.wait(until.elementLocated(By.id("draw")), 1000);
  });
  test("Check that clicking the Draw button displays the div id='choices'.", async ()=>{
    await driver.get("http://3.141.9.190/");
    await driver.wait(until.elementLocated(By.id("draw")), 1000);
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.id("choices")),1000)
    
  });
});