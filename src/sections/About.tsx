import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Target, Sparkles, GraduationCap, Cpu } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Code2,
  Target,
  Sparkles,
  Cpu,
};

export const About: React.FC = () => {
  const paragraphs = portfolioData.about
    .split('\n\n')
    .filter((p) => p.trim().length > 0);

  return (
    <section id="about" className="py-20 md:py-28 relative z-10 overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PROFILE & PHILOSOPHY"
          title="Bridging Systems Programming & Modern Web"
          subtitle="How I approach computing fundamentals, high-concurrency C++ engineering, and cutting-edge artificial intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative paragraphs & quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-purple-400 font-mono text-xs uppercase tracking-wider mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>{portfolioData.college}</span>
              </div>

              {paragraphs.map((para, idx) => (
                <p key={idx} className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs font-mono text-zinc-400">Class Year</div>
                  <div className="text-sm font-semibold text-white mt-0.5">2026 – 2030 Undergrad</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Degree</div>
                  <div className="text-sm font-semibold text-white mt-0.5">B.Tech in CSE</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400">Core Passions</div>
                  <div className="text-sm font-semibold text-purple-300 mt-0.5">Low-Level C++ & AI</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three highlight cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {portfolioData.aboutHighlights.map((item, index) => {
              const Icon = iconMap[item.iconName] || Sparkles;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-purple-500/40 backdrop-blur-md transition-all duration-200 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-mono text-purple-400">
                          {item.tagline}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
