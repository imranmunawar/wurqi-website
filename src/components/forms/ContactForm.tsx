"use client";

import { useState, type FormEvent } from "react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validation/forms";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField, fieldDescribedBy } from "@/components/ui/FormField";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormProps = {
  source?: string;
  className?: string;
};

export function ContactForm({
  source = "contact-page",
  className,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    source,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const parsed = contactFormSchema.safeParse({ ...values, source });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof ContactFormValues]) {
          next[key as keyof ContactFormValues] = issue.message;
        }
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message. Please try again.");
      }

      setStatus("success");
      setValues({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        source,
      });
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-[var(--radius-xl)] border border-[color-mix(in_srgb,var(--success)_25%,transparent)] bg-[var(--success-muted)] p-6",
          className,
        )}
        role="status"
      >
        <p className="text-[var(--text-body-size)] font-semibold text-[var(--success)]">
          Message sent
        </p>
        <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn("space-y-4", className)}
      aria-busy={status === "submitting"}
    >
      <FormField id="contact-name" label="Name" required error={errors.name}>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          invalid={Boolean(errors.name)}
          aria-describedby={fieldDescribedBy("contact-name", { error: errors.name })}
          onChange={(event) => update("name", event.target.value)}
        />
      </FormField>

      <FormField id="contact-email" label="Work email" required error={errors.email}>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          invalid={Boolean(errors.email)}
          aria-describedby={fieldDescribedBy("contact-email", { error: errors.email })}
          onChange={(event) => update("email", event.target.value)}
        />
      </FormField>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="contact-company" label="Company" error={errors.company}>
          <Input
            id="contact-company"
            name="company"
            autoComplete="organization"
            value={values.company ?? ""}
            invalid={Boolean(errors.company)}
            aria-describedby={fieldDescribedBy("contact-company", {
              error: errors.company,
            })}
            onChange={(event) => update("company", event.target.value)}
          />
        </FormField>
        <FormField id="contact-phone" label="Phone" error={errors.phone}>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone ?? ""}
            invalid={Boolean(errors.phone)}
            aria-describedby={fieldDescribedBy("contact-phone", {
              error: errors.phone,
            })}
            onChange={(event) => update("phone", event.target.value)}
          />
        </FormField>
      </div>

      <FormField id="contact-message" label="Message" required error={errors.message}>
        <Textarea
          id="contact-message"
          name="message"
          required
          value={values.message}
          invalid={Boolean(errors.message)}
          aria-describedby={fieldDescribedBy("contact-message", {
            error: errors.message,
          })}
          onChange={(event) => update("message", event.target.value)}
        />
      </FormField>

      {serverError ? (
        <p role="alert" className="text-[var(--text-body-sm-size)] font-medium text-[var(--danger)]">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
