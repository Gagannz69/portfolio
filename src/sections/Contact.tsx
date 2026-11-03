import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Github, Linkedin, Instagram, ArrowUpRight, MessageSquareCode } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = portfolioData.email;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10 overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="INITIATE CONTACT"
          title="Connect & Collaborate"
          subtitle="Direct channels for engineering collaborations, AI exploration, systems discussions, and hackathon teams."
        />

        {/* Contact Hub Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-zinc-950/85 p-8 sm:p-10 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-inner">
              <MessageSquareCode className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let's Build Something High-Performance
              </h3>
              <p className="text-sm sm:text-base text-zinc-400">
                Whether you want to discuss low-level systems architectures, collaborate on web projects, or exchange ideas on local AI pipelines — reach out directly.
              </p>
            </div>

            {/* Email Box with Mailto & Copy */}
            <div className="w-full max-w-md p-2 rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-2.5 px-3 py-2 text-xs sm:text-sm font-mono text-zinc-300 truncate w-full sm:w-auto">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="truncate">{email}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={copyEmailToClipboard}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800/80 hover:bg-zinc-700 hover:text-white border border-zinc-700/60 transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-sm"
                >
                  <span>Dispatch Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Network Cards: GitHub, LinkedIn, Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-4">
              {portfolioData.github && (
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/40 hover:bg-zinc-850 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-purple-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">GitHub</div>
                      <div className="text-[10px] text-zinc-400 font-mono">@Gagannz69</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                </a>
              )}

              {portfolioData.linkedin && (
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-sky-500/40 hover:bg-zinc-850 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-sky-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">LinkedIn</div>
                      <div className="text-[10px] text-zinc-400 font-mono">/in/gaganzzz99</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-400 transition-colors" />
                </a>
              )}

              {portfolioData.instagram && (
                <a
                  href={portfolioData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-pink-500/40 hover:bg-zinc-850 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-pink-400 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">Instagram</div>
                      <div className="text-[10px] text-zinc-400 font-mono">@gagannz_</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-pink-400 transition-colors" />
                </a>
              )}
            </div>

            <p className="text-xs text-zinc-400 pt-2 font-mono">
              📍 {portfolioData.location} • GTBIT CSE (2026–2030)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
