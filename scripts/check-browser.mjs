import { chromium } from "playwright-core";

const browser = await chromium.launch({ headless: true, executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const target = process.argv[2] ?? "http://localhost:3000";
const issues = [];
page.on("console", (message) => {
  if (["error", "warning"].includes(message.type())) issues.push(`${message.type()}: ${message.text()}`);
});
page.on("pageerror", (error) => issues.push(`pageerror: ${error.message}`));
await page.goto(target, { waitUntil: "networkidle" });
await page.waitForTimeout(500);
console.log(issues.length ? issues.join("\n") : "No browser console or page errors.");
await browser.close();
