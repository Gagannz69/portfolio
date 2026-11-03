import React from 'react';
import { motion } from 'framer-motion';
import { Github, FolderKanban } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { portfolioData } from '../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative z-10 overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FEATURED BUILDS"
          title="Engineered Systems & Applications"
          subtitle="Explore selected concurrent network servers, algorithmic exploration sandboxes, and modern frontend architectures."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Callout Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <FolderKanban className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Seeking raw source code & experiments?</h4>
              <p className="text-xs text-zinc-400">
                Explore C++ network experiments, algorithm scripts, and ongoing builds directly on my GitHub.
              </p>
            </div>
          </div>

          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600/80 hover:bg-purple-600 border border-purple-500/40 transition-colors whitespace-nowrap shadow-lg shadow-purple-950/40"
          >
            <Github className="w-4 h-4" />
            <span>Visit @Gagannz69</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
