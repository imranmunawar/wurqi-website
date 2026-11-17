import type { AnalyticsEvent } from "@/types";

export type AnalyticsProvider = {
  track: (event: AnalyticsEvent) => void;
};

const providers: AnalyticsProvider[] = [];

function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

/**
 * Register an analytics provider (e.g. Segment, GA4, PostHog).
 * Providers are invoked for every `trackEvent` call.
 */
export function registerAnalyticsProvider(provider: AnalyticsProvider): void {
  providers.push(provider);
}

/**
 * Fire a named analytics event. In development, events are logged to the console.
 * Production delivery depends on registered providers.
 */
export function trackEvent(
  name: string,
  properties?: AnalyticsEvent["properties"],
): void {
  const event: AnalyticsEvent = { name, properties };

  if (isDev()) {
    console.info("[analytics]", event.name, event.properties ?? {});
  }

  for (const provider of providers) {
    try {
      provider.track(event);
    } catch (error) {
      if (isDev()) {
        console.warn("[analytics] provider error", error);
      }
    }
  }
}

export const analytics = {
  track: trackEvent,
  register: registerAnalyticsProvider,
};
