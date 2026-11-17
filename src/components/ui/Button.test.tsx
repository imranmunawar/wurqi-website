import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Button", () => {
  it("renders a native button by default", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Save</Button>);

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveAttribute("type", "button");
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders an internal link when href is provided", () => {
    render(<Button href="/book-demo">Book a Demo</Button>);

    const link = screen.getByRole("link", { name: "Book a Demo" });
    expect(link).toHaveAttribute("href", "/book-demo");
  });

  it("opens external links in a new tab with noopener", () => {
    render(
      <Button href="https://app.wurqi.com" external>
        Login
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Login" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies the outline variant class", () => {
    render(
      <Button variant="outline" href="/platform">
        Explore
      </Button>,
    );

    expect(screen.getByRole("link", { name: "Explore" }).className).toContain(
      "border",
    );
  });
});
