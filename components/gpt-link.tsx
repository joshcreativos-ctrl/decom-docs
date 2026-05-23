'use client';

import React from 'react';
import Link from 'next/link';

interface GPTLinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'inline' | 'button';
}

export function GPTLink({ children, className = '', variant = 'inline' }: GPTLinkProps) {
  const url = process.env.NEXT_PUBLIC_GPT_CUSTOM_URL || '#';
  
  if (variant === 'button') {
    return (
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-medium text-brand-500 underline underline-offset-4 hover:text-brand-600 ${className}`}
    >
      {children}
    </a>
  );
}
