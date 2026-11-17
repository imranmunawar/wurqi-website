import { test, expect } from "@playwright/test";

test.describe("not found", () => {
  test("shows 404 page for unknown routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist-wurqi");

    await expect(page.getByText("404")).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 1, name: /couldn't find that page/i }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to Home" })).toBeVisible();
  });
});
