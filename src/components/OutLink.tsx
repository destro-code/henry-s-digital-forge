import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes } from 'react';

type OutLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function OutLink({ children, className, ...props }: OutLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
