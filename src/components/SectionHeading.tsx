import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        {badge}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

