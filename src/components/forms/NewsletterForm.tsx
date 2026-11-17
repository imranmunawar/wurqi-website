"use client";

import { useState, type FormEvent } from "react";
import {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/lib/validation/forms";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export type NewsletterFormProps = {
  source?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function NewsletterForm({
  source = "newsletter",
  variant = "light",
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const dark = variant === "dark";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const payload: NewsletterFormValues = { email, source };
    const parsed = newsletterFormSchema.safeParse(payload);

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Enter a valid email");
      setStatus("idle");
      return;
    }

    setError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Unable to subscribe right now. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className={cn(
          "text-[var(--text-body-sm-size)] font-medium",
          dark ? "text-[var(--color-brand-300)]" : "text-[var(--success)]",
          className,
        )}
      >
        You&apos;re subscribed. Thanks for joining.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("w-full", className)}
      aria-busy={status === "submitting"}
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Work email"
          value={email}
          invalid={Boolean(error)}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={
            error || serverError ? "newsletter-feedback" : undefined
          }
          className={cn(
            dark &&
              "border-[var(--color-navy-700)] bg-[var(--color-navy-900)] text-[var(--text-inverse)] placeholder:text-[var(--color-navy-400)]",
          )}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="shrink-0 sm:self-stretch"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "…" : "Subscribe"}
        </Button>
      </div>
      {error || serverError ? (
        <p
          id="newsletter-feedback"
          role="alert"
          className={cn(
            "mt-2 text-[var(--text-body-sm-size)] font-medium",
            dark ? "text-[var(--color-brand-200)]" : "text-[var(--danger)]",
          )}
        >
          {error ?? serverError}
        </p>
      ) : null}
    </form>
  );
}
