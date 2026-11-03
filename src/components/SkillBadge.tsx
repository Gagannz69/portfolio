import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Code2,
  Cpu,
  FileCode,
  FileCode2,
  Layout,
  Palette,
  Atom,
  Sparkles,
  GitBranch,
  Github,
  Terminal,
  Zap,
  Layers,
} from 'lucide-react';
import { SkillItem } from '../types/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  FileCode,
  FileCode2,
  Code,
  Code2,
  Layout,
  Palette,
  Atom,
  Sparkles,
  GitBranch,
  Github,
  Terminal,
  Zap,
  Layers,
};

interface SkillBadgeProps {
  skill: SkillItem;
  index: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  const IconComponent = iconMap[skill.iconName] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-purple-500/40 hover:bg-zinc-850 transition-all duration-200 shadow-sm"
    >
      <div className="w-10 h-10 rounded-lg bg-zinc-800/90 border border-zinc-700/50 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-950/40 group-hover:border-purple-500/30 transition-colors">
        <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-zinc-200 group-hover:text-white truncate">
            {skill.name}
          </span>
          {skill.badge && (
            <span className="text-[10px] font-mono font-medium text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded-full border border-zinc-700/40 whitespace-nowrap">
              {skill.badge}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

