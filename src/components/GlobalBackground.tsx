import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio';

interface GlobalBackgroundProps {
  activeSection: string;
}

interface SectionBgTrack {
  key: string;
  src: string;
  playbackRate: number;
}

const sectionTracks: SectionBgTrack[] = [
  { key: 'home', src: portfolioData.sectionBgs.home, playbackRate: 0.7 },
  { key: 'about', src: portfolioData.sectionBgs.about, playbackRate: 0.6 },
  { key: 'skills', src: portfolioData.sectionBgs.skills, playbackRate: 0.65 },
  { key: 'projects', src: portfolioData.sectionBgs.projects, playbackRate: 0.6 },
  { key: 'education', src: portfolioData.sectionBgs.education, playbackRate: 0.65 },
  { key: 'contact', src: portfolioData.sectionBgs.contact, playbackRate: 0.6 },
];

export const GlobalBackground: React.FC<GlobalBackgroundProps> = ({ activeSection }) => {
  // Debounced section to prevent rapid flickering during fast scrolling
  const [debouncedSection, setDebouncedSection] = useState(activeSection);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSection(activeSection);
    }, 100);
    return () => clearTimeout(handler);
  }, [activeSection]);

  // Refs for each section's dedicated video element
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  // Apply playback speed to a video element
  const applyPlaybackSpeed = (el: HTMLVideoElement | null, speed: number) => {
    if (el) {
      el.defaultPlaybackRate = speed;
      el.playbackRate = speed;
    }
  };

  // Manage playback state: ensure active video plays smoothly, pause non-active videos after fade
  useEffect(() => {
    const targetKey = debouncedSection || 'home';

    // Start target video immediately
    if (videoRefs.current[targetKey]) {
      const vid = videoRefs.current[targetKey];
      if (vid) {
        vid.play().catch(() => {});
        const track = sectionTracks.find((t) => t.key === targetKey);
        applyPlaybackSpeed(vid, track ? track.playbackRate : 0.65);
      }
    }

    // Schedule pause for inactive videos after cross-fade completes (1200ms)
    const timeout = setTimeout(() => {
      sectionTracks.forEach((track) => {
        if (track.key !== targetKey) {
          const el = videoRefs.current[track.key];
          if (el && !el.paused) {
            el.pause();
          }
        }
      });
    }, 1250);

    return () => clearTimeout(timeout);
  }, [debouncedSection]);

  // Set initial playback rates once videos are ready
  const handleLoadedData = (key: string, el: HTMLVideoElement | null, rate: number) => {
    if (el) {
      applyPlaybackSpeed(el, rate);
      if (key === debouncedSection || (key === 'home' && !debouncedSection)) {
        el.play().catch(() => {});
      }
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Dedicated Pre-mounted Video Element for each section - Zero stutter on section change */}
      {sectionTracks.map((track) => {
        const isActive = (debouncedSection || 'home') === track.key;

        return (
          <video
            key={track.key}
            ref={(el) => {
              videoRefs.current[track.key] = el;
            }}
            src={track.src}
            autoPlay={track.key === 'home'}
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={(e) => handleLoadedData(track.key, e.currentTarget, track.playbackRate)}
            onPlay={(e) => applyPlaybackSpeed(e.currentTarget, track.playbackRate)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-75' : 'opacity-0'
            }`}
            style={{
              filter: 'brightness(1.02) contrast(1.12) saturate(1.15)',
              willChange: 'opacity',
            }}
          />
        );
      })}

      {/* Luminous Vignette Overlay - Keeps video motion vibrant & visible in center while smoothly framing dark edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(9,9,11,0.18) 0%, rgba(9,9,11,0.52) 58%, rgba(9,9,11,0.88) 88%, #09090B 100%)',
        }}
      />

      {/* Fine High-Tech Texture Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 mix-blend-overlay" />
    </div>
  );
};
