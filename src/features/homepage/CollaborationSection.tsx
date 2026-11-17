import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductWindow } from "@/components/product/ProductWindow";

const messages = [
  {
    name: "Sarah",
    initials: "S",
    text: "The API migration is complete.",
    time: "10:14",
  },
  {
    name: "Ahmed",
    initials: "A",
    text: "Great. I'll validate the integration.",
    time: "10:16",
  },
  {
    name: "John",
    initials: "J",
    text: "Risk #124 has been resolved.",
    time: "10:21",
  },
] as const;

export function CollaborationSection() {
  return (
    <Section
      id="collaboration"
      eyebrow="Collaboration"
      title="Conversations stay attached to the work"
      description="When teams coordinate a CRM migration, comments, mentions, and decisions stay visible with the work — not buried in chat threads."
      className="bg-[var(--surface)]"
    >
      <Reveal className="mx-auto max-w-xl">
        <ProductWindow
          title="Project · Enterprise CRM Migration"
          className="shadow-[var(--shadow-lg)]"
        >
          <div className="space-y-3 bg-[linear-gradient(180deg,var(--surface-muted)_0%,var(--surface)_100%)] p-4 sm:p-5">
            {messages.map((message) => (
              <article
                key={`${message.name}-${message.time}`}
                className="flex gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-3.5 shadow-[var(--shadow-xs)]"
              >
                <div
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] font-display text-sm font-semibold text-[var(--accent)]"
                  aria-hidden="true"
                >
                  {message.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-semibold text-[var(--text-primary)]">
                      {message.name}
                    </p>
                    <time className="text-caption shrink-0">{message.time}</time>
                  </div>
                  <p className="mt-1 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                    {message.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </ProductWindow>
      </Reveal>
    </Section>
  );
}
