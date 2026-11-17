import { test, expect } from "@playwright/test";

test.describe("homepage", () => {
  test("loads with strategy headline and Book a Demo CTA", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { level: 1, name: "Connect Strategy to Execution" }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Book a Demo" }).first(),
    ).toBeVisible();
  });
});
