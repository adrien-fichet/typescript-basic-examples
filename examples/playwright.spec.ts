import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test("fetch httpbin API", async () => {
  const res = await fetch("https://httpbin.org/get?foo=bar", {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const jsonRes = (await res.json()) as {
    headers: { Host: string };
    args: { foo: string };
  };
  expect(jsonRes.headers.Host).toBe("httpbin.org");
  expect(jsonRes.args.foo).toBe("bar");
});

test("request httpbin API", async ({ request }) => {
  const res = await request.get("https://httpbin.org/get?foo=bar");
  const resJson = (await res.json()) as { args: { foo: string } };
  expect(resJson.args.foo).toBe("bar");
});
