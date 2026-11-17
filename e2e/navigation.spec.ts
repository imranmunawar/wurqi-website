import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("platform link works", async ({ page }) => {
    await page.goto("/");

    const primaryNav = page.getByRole("navigation", { name: "Primary" });
    await primaryNav.getByRole("button", { name: "Platform" }).click();
    await page
      .getByRole("region", { name: "Platform menu" })
      .getByRole("link", { name: "View all" })
      .click();

    await expect(page).toHaveURL(/\/platform\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
