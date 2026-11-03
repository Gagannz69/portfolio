import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090B] relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-white tracking-tight">
                {portfolioData.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              {portfolioData.degree} • {portfolioData.college} (2026–2030)
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            {portfolioData.github && (
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {portfolioData.linkedin && (
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {portfolioData.instagram && (
              <a
                href={portfolioData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-pink-500/40 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex items-center gap-5 text-xs text-zinc-400">
            <div className="flex items-center gap-1">
              <span>© {currentYear}</span>
              <span>{portfolioData.name}. Built with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 inline mx-0.5" />
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all flex items-center gap-1 group"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
