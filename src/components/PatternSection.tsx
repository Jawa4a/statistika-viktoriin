import type { ReactNode } from "react";

type PatternSectionProps = {
  children: ReactNode;
};

export default function PatternSection({ children }: PatternSectionProps) {
  return (
    <section className="pattern-section">
      <div className="pattern-section__overlay" aria-hidden="true" />
      <div className="pattern-section__content">{children}</div>
    </section>
  );
}