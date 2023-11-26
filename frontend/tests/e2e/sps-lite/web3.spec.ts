import { test, expect } from "../../utils/web3fixtures";
// @ts-ignore
import * as metamask from "@synthetixio/synpress/commands/metamask";

const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

test.skip("Simple test example", async ({ page: startPage, context }) => {
  test.slow();

  const page = await context.newPage();

  // If use startPage, will get error, because Metamask works only on focused page
  await page.goto("https://chainlist.org", { waitUntil: "load" });

  await page
    .getByRole("banner")
    .getByRole("button", { name: "Connect Wallet" })
    .click();
  await metamask.acceptAccess();

  await page.getByPlaceholder("ETH, Fantom, ...").fill("zkSync Era Mainnet");

  await page.getByRole("button", { name: "Add to Metamask" }).nth(0).click();

  // await page.locator("data-testid=navbar-connect-wallet").click();
  // await page.locator("data-testid=wallet-option-INJECTED").click();

  // await metamask.allowToAddNetwork({ waitForEvent: "navi" });
  await metamask.allowToAddAndSwitchNetwork();

  await page.goto("https://app.mute.io/swap");
  await page.getByRole("button", { name: "Connect" }).click();
  await page.getByRole("button", { name: "Metamask (injected) logo" }).click();

  await metamask.acceptAccess();

  await page.getByRole("button", { name: "Select token" }).nth(0).click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("eth");
  await page.getByPlaceholder("Search").press("Enter");

  await page.getByAltText("ETH logo").nth(0).click();

  await page.getByRole("button", { name: "Select token" }).nth(0).click();
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("usdc");
  await page.getByPlaceholder("Search").press("Enter");

  await page.getByAltText("USDC logo").nth(0).click();

  await page
    .locator(
      'xpath=//*[@id="app"]/main/div/div/div[2]/div[2]/div[1]/div[2]/div[1]/input',
    )
    .fill("0.00063");

  await timeout(10000);

  await page.locator('xpath=//*[@id="app"]/main/div/div/div[2]/button').click();

  await metamask.confirmTransaction("aggressive");

  await expect(page.getByText("Swap confirmed!")).toBeVisible();
});
