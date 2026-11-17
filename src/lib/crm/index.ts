import type { LeadPayload, LeadResult } from "@/types";

export type CrmProvider = {
  submitLead: (payload: LeadPayload) => Promise<LeadResult>;
};

let provider: CrmProvider | null = null;

/**
 * Register a CRM / marketing automation provider (HubSpot, Salesforce, etc.).
 * Until registered, `submitLead` uses a safe no-op stub suitable for local UI wiring.
 */
export function registerCrmProvider(next: CrmProvider): void {
  provider = next;
}

function stubSubmitLead(payload: LeadPayload): Promise<LeadResult> {
  if (process.env.NODE_ENV === "development") {
    console.info("[crm] submitLead (stub)", {
      type: payload.type,
      email: payload.email,
      source: payload.source,
    });
  }

  return Promise.resolve({
    ok: true,
    id: `stub_${payload.type}_${Date.now()}`,
  });
}

/**
 * Submit a marketing lead. Pluggable via `registerCrmProvider`.
 */
export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  try {
    if (provider) {
      return await provider.submitLead(payload);
    }
    return await stubSubmitLead(payload);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to submit lead";
    return { ok: false, error: message };
  }
}

export const crm = {
  submitLead,
  register: registerCrmProvider,
};
