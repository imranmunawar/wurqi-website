import { test, expect } from "@playwright/test";

test.describe("book demo", () => {
  test("form fields are present", async ({ page }) => {
    await page.goto("/book-demo");

    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Work email")).toBeVisible();
    await expect(page.getByLabel("Company")).toBeVisible();
    await expect(page.getByLabel("Phone")).toBeVisible();
    await expect(page.getByLabel("Team size")).toBeVisible();
    await expect(page.getByLabel("What would you like to see?")).toBeVisible();
    await expect(
      page.getByRole("button", { name: /book a demo/i }),
    ).toBeVisible();
  });
});
