import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Wrench } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillBadge } from '../components/SkillBadge';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const languageSkills = portfolioData.skills.filter((s) => s.category === 'languages');
  const frontendSkills = portfolioData.skills.filter((s) => s.category === 'frontend');
  const toolSkills = portfolioData.skills.filter((s) => s.category === 'tools');

  return (
    <section id="skills" className="py-20 md:py-28 relative z-10 border-y border-zinc-900/80 overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECHNICAL ARSENAL"
          title="Languages, Frameworks & Tooling"
          subtitle="From low-level memory allocation and socket concurrency to modern reactive web engines and developer workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Group 1: Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md p-5 sm:p-6 space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800/80">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Systems & Languages</h3>
                <p className="text-[11px] text-zinc-400 font-mono">Memory, concurrency & DSA</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              {languageSkills.map((skill, idx) => (
                <SkillBadge key={skill.name} skill={skill} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Group 2: Frontend Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md p-5 sm:p-6 space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800/80">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Full-Stack & Web UI</h3>
                <p className="text-[11px] text-zinc-400 font-mono">Interactive, reactive web</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              {frontendSkills.map((skill, idx) => (
                <SkillBadge key={skill.name} skill={skill} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Group 3: Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md p-5 sm:p-6 space-y-4 shadow-xl"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-800/80">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Runtimes & Environment</h3>
                <p className="text-[11px] text-zinc-400 font-mono">POSIX, Git & modern bundlers</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              {toolSkills.map((skill, idx) => (
                <SkillBadge key={skill.name} skill={skill} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 max-w-xl mx-auto text-center backdrop-blur-sm">
          <p className="text-xs text-zinc-400">
            <span className="text-purple-400 font-semibold font-mono">Engineered with Purpose:</span> Focused on rigorous computer science foundations, clean Git discipline, and shipping working software rather than superficial metrics.
          </p>
        </div>
      </div>
    </section>
  );
};
