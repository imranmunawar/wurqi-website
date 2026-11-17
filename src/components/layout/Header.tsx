"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ctaNavigation, mainNavigation } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { SiteLogo } from "@/components/layout/SiteLogo";
import type { NavItem } from "@/types";

const MEGA_TITLES = new Set(["Platform", "Solutions"]);
const DROPDOWN_TITLES = new Set(["Resources"]);

const headerCtas: NavItem[] = [
  {
    title: "Login",
    href: ctaNavigation[0]?.href ?? siteConfig.links.login,
    external: true,
  },
  {
    title: "Book a Demo",
    href: ctaNavigation[1]?.href ?? "/book-demo",
  },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);
  const baseId = useId();

  // Close menus when the route changes (adjust state during render — React-recommended).
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function toggleMenu(title: string) {
    setOpenMenu((prev) => (prev === title ? null : title));
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] border-b transition-[background-color,border-color,box-shadow] duration-[var(--duration-normal)]",
        scrolled
          ? "border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_80%,transparent)] shadow-[var(--shadow-sm)] backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-0",
      )}
    >
      <Container
        size="wide"
        className="flex h-[var(--header-height)] items-center justify-between gap-4"
      >
        <SiteLogo variant="dark" priority />

        <nav
          ref={navRef}
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNavigation.map((section) => {
            const isMega = MEGA_TITLES.has(section.title);
            const isDropdown = DROPDOWN_TITLES.has(section.title);
            const hasMenu = isMega || isDropdown;
            const menuId = `${baseId}-${section.title.toLowerCase()}-menu`;
            const triggerId = `${baseId}-${section.title.toLowerCase()}-trigger`;
            const isOpen = openMenu === section.title;
            const isActive =
              Boolean(section.href) &&
              (pathname === section.href ||
                pathname.startsWith(`${section.href}/`));

            if (!hasMenu) {
              return (
                <Link
                  key={section.title}
                  href={section.href ?? "#"}
                  className={cn(
                    "rounded-[var(--radius-md)] px-3 py-2 text-[var(--text-body-sm-size)] font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
                    isActive && "text-[var(--accent)]",
                  )}
                >
                  {section.title}
                </Link>
              );
            }

            return (
              <div key={section.title} className="relative">
                <button
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-controls={menuId}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-[var(--radius-md)] px-3 py-2 text-[var(--text-body-sm-size)] font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
                    (isOpen || isActive) && "text-[var(--accent)]",
                  )}
                  onClick={() => toggleMenu(section.title)}
                  onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      setOpenMenu(section.title);
                    }
                  }}
                >
                  {section.title}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "size-3.5 transition-transform duration-[var(--duration-fast)]",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                {isMega ? (
                  <MegaMenu
                    id={menuId}
                    title={section.title}
                    href={section.href}
                    items={section.items}
                    open={isOpen}
                    onClose={() => setOpenMenu(null)}
                  />
                ) : (
                  <MegaMenu
                    id={menuId}
                    title={section.title}
                    href={section.href}
                    items={section.items}
                    open={isOpen}
                    onClose={() => setOpenMenu(null)}
                    className="w-[min(22rem,calc(100vw-2rem))]"
                  />
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href={headerCtas[0].href}
            external
            variant="ghost"
            size="sm"
          >
            {headerCtas[0].title}
          </Button>
          <Button href={headerCtas[1].href} variant="primary" size="sm">
            {headerCtas[1].title}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-primary)] hover:bg-[var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] lg:hidden"
          aria-label="Open navigation"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </Container>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sections={mainNavigation}
        ctaItems={headerCtas}
      />
    </header>
  );
}
