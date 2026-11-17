"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-1 flex-col items-start justify-center section-y">
      <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Something went wrong
      </p>
      <h1 className="text-h1 mt-3 text-balance">We hit an unexpected error.</h1>
      <p className="text-body-lg mt-4 max-w-xl text-[var(--text-secondary)]">
        Please try again. If the problem continues, contact us and we&apos;ll
        help you get unstuck.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button type="button" size="lg" onClick={retry}>
          Try again
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back to Home
        </Button>
      </div>
    </Container>
  );
}
