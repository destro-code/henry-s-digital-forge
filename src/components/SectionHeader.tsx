import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeaderProps = {
  index: string;
  chapter: string;
  title: ReactNode;
  intro?: string;
  titleId: string;
};

export default function SectionHeader({ index, chapter, title, intro, titleId }: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 shrink-0 bg-primary" aria-hidden="true" />
        <p className="eyebrow">
          {index} <span className="text-muted">/</span> {chapter}
        </p>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <h2 id={titleId} className="section-title max-w-3xl">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{intro}</p>}
    </Reveal>
  );
}
