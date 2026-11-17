import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  homepageProblems,
  homepageSections,
  homepageWorkChain,
} from "@/content/homepage";

const problem = homepageSections.find((section) => section.id === "problem");

export function ProblemSection() {
  return (
    <Section
      id="problem"
      eyebrow={problem?.eyebrow}
      title={problem?.title}
      description={problem?.description}
      className="bg-[var(--surface)]"
    >
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ol className="relative space-y-0">
            {homepageWorkChain.map((item, index) => (
              <li key={item} className="relative flex gap-4 pb-5 last:pb-0">
                {index < homepageWorkChain.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[15px] top-9 h-[calc(100%-1.5rem)] w-px bg-[linear-gradient(180deg,var(--color-brand-300),var(--border-strong))]"
                  />
                ) : null}
                <span className="relative z-[1] flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-brand-200)] bg-[var(--accent-muted)] text-caption font-semibold text-[var(--accent)]">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-muted)]/70 px-4 py-3.5 shadow-[var(--shadow-xs)]">
                  <p className="font-display font-semibold text-[var(--text-primary)]">
                    {item}
                  </p>
                  <p className="text-body-sm mt-1 text-[var(--text-muted)]">
                    Often trapped in a separate tool or spreadsheet
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[linear-gradient(160deg,var(--color-navy-950)_0%,#243752_100%)] p-6 text-[var(--text-inverse)] shadow-[var(--shadow-lg)] sm:p-7">
            <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-300)]">
              What breaks
            </p>
            <ul className="mt-5 space-y-3">
              {homepageProblems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-[var(--radius-md)] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 rounded-full bg-[var(--color-brand-300)]"
                  />
                  <span className="text-[var(--text-body-sm-size)] font-medium text-[var(--color-navy-100)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
