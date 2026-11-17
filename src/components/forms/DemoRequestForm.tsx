"use client";

import { useState, type FormEvent } from "react";
import {
  demoFormSchema,
  type DemoFormValues,
} from "@/lib/validation/forms";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { FormField, fieldDescribedBy } from "@/components/ui/FormField";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof DemoFormValues, string>>;

export type DemoRequestFormProps = {
  source?: string;
  plan?: string;
  className?: string;
};

export function DemoRequestForm({
  source = "demo-page",
  plan,
  className,
}: DemoRequestFormProps) {
  const [values, setValues] = useState<DemoFormValues>({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    message: "",
    plan,
    source,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof DemoFormValues>(key: K, value: DemoFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError(null);

    const parsed = demoFormSchema.safeParse({ ...values, source, plan });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof DemoFormValues]) {
          next[key as keyof DemoFormValues] = issue.message;
        }
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your demo request. Please try again.");
      }

      setStatus("success");
      setValues({
        name: "",
        email: "",
        company: "",
        phone: "",
        teamSize: "",
        message: "",
        plan,
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
          Demo request received
        </p>
        <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
          Thanks — we will reach out to schedule a personalized walkthrough.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Submit another request
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
      <FormField id="demo-name" label="Name" required error={errors.name}>
        <Input
          id="demo-name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          invalid={Boolean(errors.name)}
          aria-describedby={fieldDescribedBy("demo-name", { error: errors.name })}
          onChange={(event) => update("name", event.target.value)}
        />
      </FormField>

      <FormField id="demo-email" label="Work email" required error={errors.email}>
        <Input
          id="demo-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          invalid={Boolean(errors.email)}
          aria-describedby={fieldDescribedBy("demo-email", { error: errors.email })}
          onChange={(event) => update("email", event.target.value)}
        />
      </FormField>

      <FormField id="demo-company" label="Company" required error={errors.company}>
        <Input
          id="demo-company"
          name="company"
          autoComplete="organization"
          required
          value={values.company}
          invalid={Boolean(errors.company)}
          aria-describedby={fieldDescribedBy("demo-company", {
            error: errors.company,
          })}
          onChange={(event) => update("company", event.target.value)}
        />
      </FormField>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="demo-phone" label="Phone" error={errors.phone}>
          <Input
            id="demo-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone ?? ""}
            invalid={Boolean(errors.phone)}
            aria-describedby={fieldDescribedBy("demo-phone", {
              error: errors.phone,
            })}
            onChange={(event) => update("phone", event.target.value)}
          />
        </FormField>
        <FormField id="demo-team-size" label="Team size" error={errors.teamSize}>
          <Select
            id="demo-team-size"
            name="teamSize"
            value={values.teamSize ?? ""}
            invalid={Boolean(errors.teamSize)}
            aria-describedby={fieldDescribedBy("demo-team-size", {
              error: errors.teamSize,
            })}
            onChange={(event) => update("teamSize", event.target.value)}
          >
            <option value="">Select…</option>
            <option value="1-20">1–20</option>
            <option value="21-100">21–100</option>
            <option value="101-500">101–500</option>
            <option value="500+">500+</option>
          </Select>
        </FormField>
      </div>

      <FormField
        id="demo-message"
        label="What would you like to see?"
        error={errors.message}
      >
        <Textarea
          id="demo-message"
          name="message"
          value={values.message ?? ""}
          invalid={Boolean(errors.message)}
          aria-describedby={fieldDescribedBy("demo-message", {
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
        {status === "submitting" ? "Submitting…" : "Book a demo"}
      </Button>
    </form>
  );
}
