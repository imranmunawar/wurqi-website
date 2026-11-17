import { LogoCloud } from "@/components/marketing/LogoCloud";
import { homepageSections } from "@/content/homepage";

const social = homepageSections.find((section) => section.id === "social-proof");

export function SocialProofSection() {
  return (
    <LogoCloud
      eyebrow={social?.eyebrow ?? "Trust"}
      title={
        social?.title ??
        "Trusted by teams that need visibility, control and execution."
      }
      description="Placeholder logos for layout development. Replace with approved customer marks before launch — do not invent real customer brands."
      count={6}
      className="border-b border-[var(--border)] bg-[var(--surface)]"
    />
  );
}
