import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Breadcrumb } from "./Breadcrumb";

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

describe("Breadcrumb", () => {
  it("returns null when there are no items", () => {
    const { container } = render(<Breadcrumb items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders links for ancestors and current page text for the last item", () => {
    render(
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Platform", href: "/platform" },
          { name: "Goals", href: "/platform/goals" },
        ]}
      />,
    );

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Platform" })).toHaveAttribute(
      "href",
      "/platform",
    );
    expect(screen.queryByRole("link", { name: "Goals" })).not.toBeInTheDocument();
    expect(screen.getByText("Goals")).toHaveAttribute("aria-current", "page");
  });
});
