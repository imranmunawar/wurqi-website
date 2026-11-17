import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center section-y">
      <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        404
      </p>
      <h1 className="text-h1 mt-3 text-balance">We couldn&apos;t find that page.</h1>
      <p className="text-body-lg mt-4 max-w-xl text-[var(--text-secondary)]">
        The link may be outdated, or the page may have moved. Head back home to
        keep exploring Wurqi.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" size="lg">
          Back to Home
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Contact us
        </Button>
      </div>
      <p className="mt-6 text-[var(--text-body-sm-size)] text-[var(--text-muted)]">
        Looking for resources? Try the{" "}
        <Link
          href="/resources/blog"
          className="font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)]"
        >
          blog
        </Link>{" "}
        or{" "}
        <Link
          href="/platform"
          className="font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)]"
        >
          platform
        </Link>
        .
      </p>
    </Container>
  );
}
