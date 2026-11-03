import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Terminal,
  Cpu,
  FolderGit2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Subtle Glows complementing the global video backdrop */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-purple-500/30 text-xs font-mono text-purple-300 shadow-lg shadow-purple-950/30 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{portfolioData.statusBadge}</span>
            </motion.div>

            {/* Main Heading & Dynamic Cycling Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-purple-400">
                SYSTEMS & FULL-STACK ENGINEER
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {portfolioData.name}
              </h1>

              {/* Cycling animated subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
                <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-zinc-400 mr-2.5">
                  Focus:
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-lg sm:text-2xl md:text-3xl font-bold text-gradient-purple-blue"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
            >
              {portfolioData.shortIntro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-950/80 hover:bg-zinc-900 hover:text-white border border-zinc-700/80 hover:border-purple-500/40 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Social Links & Quick Connect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 pt-2 text-zinc-400"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Network:
              </span>

              {portfolioData.github && (
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-purple-500/50 hover:text-white hover:bg-zinc-900 transition-colors backdrop-blur-md"
                  title="GitHub Profile"
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
                  className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-sky-500/50 hover:text-white hover:bg-zinc-900 transition-colors backdrop-blur-md"
                  title="LinkedIn Profile"
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
                  className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-pink-500/50 hover:text-pink-300 hover:bg-zinc-900 transition-colors backdrop-blur-md"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}

              {portfolioData.email && (
                <a
                  href={`mailto:${portfolioData.email}`}
                  aria-label="Email Me"
                  className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-purple-500/50 hover:text-purple-300 hover:bg-zinc-900 transition-colors backdrop-blur-md"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Column: Abstract Developer Terminal / Card Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md relative">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 via-indigo-500/20 to-sky-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Terminal Card */}
              <div className="relative rounded-2xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    <span>gagandeep@gtbit:~</span>
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-[10px] font-mono text-zinc-400">zsh</span>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs sm:text-sm space-y-3.5">
                  <div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-purple-400">$</span>
                      <span className="text-zinc-200">cat system_spec.json</span>
                    </div>
                  </div>

                  <div className="bg-zinc-900/60 rounded-xl p-3.5 border border-zinc-800/80 text-zinc-300 space-y-1.5 leading-relaxed text-xs">
                    <p className="text-zinc-400">&#123;</p>
                    <p className="pl-4">
                      <span className="text-purple-300">"engineer"</span>: <span className="text-emerald-300">"{portfolioData.name}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-300">"campus"</span>: <span className="text-emerald-300">"GTBIT, Delhi (2026–2030)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-300">"stack"</span>: [
                      <span className="text-sky-300">"C++ Concurrency"</span>,{' '}
                      <span className="text-sky-300">"Local LLMs"</span>,{' '}
                      <span className="text-sky-300">"React"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-300">"undergrad_year"</span>: <span className="text-amber-300">"{portfolioData.year}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-300">"open_for_collabs"</span>: <span className="text-purple-400">true</span>
                    </p>
                    <p className="text-zinc-400">&#125;</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-purple-400">$</span>
                      <span className="text-zinc-200">c++ --version && ./server_benchmark</span>
                    </div>
                    <div className="text-emerald-400/90 text-xs pl-4 pt-1 flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>POSIX Sockets: 8 Worker Threads Active</span>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-purple-400" />
                      Systems Running
                    </span>
                    <span className="font-mono text-emerald-400 animate-pulse">● online</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase">Explore Systems</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-purple-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
