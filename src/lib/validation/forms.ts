import { z } from "zod";

const nameSchema = z
  .string()
  .trim()
  .min(1, "Name is required")
  .max(120, "Name is too long");

const emailSchema = z
  .string()
  .trim()
  .email("Enter a valid email address")
  .max(254, "Email is too long");

const companySchema = z
  .string()
  .trim()
  .max(160, "Company name is too long")
  .optional()
  .or(z.literal(""));

const phoneSchema = z
  .string()
  .trim()
  .max(40, "Phone number is too long")
  .optional()
  .or(z.literal(""));

const messageSchema = z
  .string()
  .trim()
  .min(1, "Message is required")
  .max(5000, "Message is too long");

export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companySchema,
  phone: phoneSchema,
  message: messageSchema,
  source: z.string().trim().max(120).optional(),
});

export const demoFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: z
    .string()
    .trim()
    .min(1, "Company is required")
    .max(160, "Company name is too long"),
  phone: phoneSchema,
  teamSize: z.string().trim().max(40).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(5000, "Message is too long")
    .optional()
    .or(z.literal("")),
  plan: z.string().trim().max(60).optional(),
  source: z.string().trim().max(120).optional(),
});

export const newsletterFormSchema = z.object({
  email: emailSchema,
  source: z.string().trim().max(120).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type DemoFormValues = z.infer<typeof demoFormSchema>;
export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
