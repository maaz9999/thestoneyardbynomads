'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

interface VerificationBadgeProps {
  note?: string;
  className?: string;
}

export default function VerificationBadge({ note, className = '' }: VerificationBadgeProps) {
  if (!note) return null;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900/90 border border-bronze-light/30 text-[10px] font-sans text-ivory/70 ${className}`}
      title={note}
    >
      <AlertCircle className="w-3 h-3 text-bronze-light shrink-0" />
      <span className="tracking-wider uppercase text-[9px] text-bronze-light">Client Verification Required</span>
    </div>
  );
}
