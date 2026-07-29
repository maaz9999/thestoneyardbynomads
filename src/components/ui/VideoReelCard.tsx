'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface VideoReelCardProps {
  src: string;
  title: string;
  subtitle: string;
  tag?: string;
  aspectRatio?: 'portrait' | 'video' | 'square';
  className?: string;
}

export default function VideoReelCard({
  src,
  title,
  subtitle,
  tag,
  aspectRatio = 'portrait',
  className = '',
}: VideoReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const aspectClasses = {
    portrait: 'aspect-[9/16] sm:aspect-[4/5]',
    video: 'aspect-[16/9]',
    square: 'aspect-square',
  };

  return (
    <div
      className={`group relative overflow-hidden rounded border border-white/15 bg-stone-900 shadow-2xl transition-all duration-700 hover:border-bronze-light/50 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="h-full w-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/40 pointer-events-none" />

      {/* Top Header Row */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        {tag ? (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/75 backdrop-blur-md border border-bronze-light/30">
            <Sparkles className="w-3 h-3 text-bronze-light" />
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ivory/90 font-medium">
              {tag}
            </span>
          </div>
        ) : (
          <div />
        )}

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-stone-950/75 backdrop-blur-md border border-white/20 text-ivory hover:text-bronze-light hover:border-bronze-light transition-all"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-bronze-light" />}
        </button>
      </div>

      {/* Center Play / Pause Click Overlay */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center z-10 group/btn"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        <div className="p-4 rounded-full bg-stone-950/60 backdrop-blur-md border border-white/20 text-ivory opacity-0 group-hover/btn:opacity-100 transition-all transform scale-90 group-hover/btn:scale-100 shadow-2xl">
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 text-bronze-light ml-0.5" />}
        </div>
      </button>

      {/* Bottom Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 pointer-events-none">
        <span className="block font-sans text-[10px] uppercase tracking-[0.25em] text-bronze-light font-medium">
          {subtitle}
        </span>
        <h3 className="font-serif text-xl sm:text-2xl text-ivory uppercase tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
}
