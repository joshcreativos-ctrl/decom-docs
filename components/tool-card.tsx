import Link from 'next/link';
import type { ReactNode } from 'react';

interface ToolCardProps {
  name: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export function ToolCard({ name, description, href, icon }: ToolCardProps) {
  return (
    <Link 
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group block rounded-xl border border-fd-border bg-fd-card p-6 shadow-sm transition-colors hover:border-brand-500 hover:bg-fd-accent/50"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-brand-500">
          {icon}
        </div>
        <h3 className="font-semibold text-fd-card-foreground group-hover:text-brand-500 transition-colors">
          {name}
        </h3>
      </div>
      <p className="text-sm text-fd-muted-foreground">{description}</p>
    </Link>
  );
}
