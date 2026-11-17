import { describe, expect, it } from "vitest";
import {
  contactFormSchema,
  demoFormSchema,
  newsletterFormSchema,
} from "./forms";

describe("contactFormSchema", () => {
  it("accepts a valid contact payload", () => {
    const result = contactFormSchema.safeParse({
      name: "Alex Rivera",
      email: "alex@example.com",
      company: "Acme",
      phone: "+1 555 0100",
      message: "Interested in a walkthrough.",
      source: "contact-page",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing name and invalid email", () => {
    const result = contactFormSchema.safeParse({
      name: "",
      email: "not-an-email",
      message: "Hello",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((issue) => issue.path[0]);
      expect(paths).toContain("name");
      expect(paths).toContain("email");
    }
  });
});

describe("demoFormSchema", () => {
  it("requires company for demo requests", () => {
    const result = demoFormSchema.safeParse({
      name: "Alex Rivera",
      email: "alex@example.com",
      company: "",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some((issue) => issue.path[0] === "company")).toBe(
        true,
      );
    }
  });

  it("accepts a valid demo payload", () => {
    const result = demoFormSchema.safeParse({
      name: "Alex Rivera",
      email: "alex@example.com",
      company: "Acme Corp",
      teamSize: "21-100",
      message: "Focus on OKRs and portfolios.",
      plan: "enterprise",
      source: "demo-page",
    });
    expect(result.success).toBe(true);
  });
});

describe("newsletterFormSchema", () => {
  it("accepts a valid email", () => {
    expect(
      newsletterFormSchema.safeParse({ email: "news@example.com" }).success,
    ).toBe(true);
  });

  it("rejects an empty email", () => {
    expect(newsletterFormSchema.safeParse({ email: "" }).success).toBe(false);
  });
});
