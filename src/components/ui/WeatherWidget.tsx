'use client';

import React from 'react';
import { CloudSnow, Thermometer, Compass } from 'lucide-react';

export default function WeatherWidget() {
  return (
    <div className="hidden sm:inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-stone-900/80 border border-white/10 backdrop-blur-md text-[11px] font-sans text-ivory/80">
      <div className="flex items-center gap-1 text-bronze-light">
        <Thermometer className="w-3.5 h-3.5" />
        <span className="font-serif font-semibold text-xs text-ivory">14°C</span>
      </div>
      <span className="h-3 w-[1px] bg-white/15" />
      <div className="flex items-center gap-1.5">
        <CloudSnow className="w-3.5 h-3.5 text-mist" />
        <span className="uppercase tracking-widest text-[9px] text-ivory/90 font-medium">CRISP ALPINE AIR</span>
      </div>
      <span className="h-3 w-[1px] bg-white/15" />
      <div className="flex items-center gap-1 text-stone-400">
        <Compass className="w-3 h-3 text-bronze-light" />
        <span className="uppercase tracking-widest text-[9px]">NARAN 2,400M</span>
      </div>
    </div>
  );
}
