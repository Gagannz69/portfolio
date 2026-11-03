import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative z-10 bg-zinc-950/60 border-y border-zinc-900/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC FOUNDATION"
          title="Education & Engineering Milestones"
          subtitle="Rigorous foundational mathematics, computer science theory, and collegiate engineering curriculum."
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-px bg-gradient-to-b from-purple-500/70 via-indigo-500/40 to-zinc-800" />

          <div className="space-y-8 sm:space-y-10">
            {portfolioData.education.map((item, index) => (
              <motion.div
                key={item.institution + index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20 group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-purple-500/40 transition-all duration-200 shadow-xl backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {item.status}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.institution}
                  </h3>

                  <div className="text-sm font-medium text-purple-400 mt-0.5">
                    {item.degree} • <span className="text-zinc-300">{item.field}</span>
                  </div>

                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Coursework Tags */}
                  {item.coursework && item.coursework.length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-zinc-800/70">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                        <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                        <span>Core Curriculum:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 font-mono"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements if any */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-1.5 pt-3 mt-3 border-t border-zinc-800/70">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                        <Award className="w-3.5 h-3.5 text-yellow-400" />
                        <span>Notables:</span>
                      </div>
                      <ul className="space-y-1">
                        {item.achievements.map((ach, idx) => (
                          <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">▸</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
