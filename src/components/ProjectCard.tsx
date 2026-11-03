import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers, Sparkles, Server } from 'lucide-react';
import { Project } from '../types/portfolio';
import { portfolioData } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Generate a stylish aesthetic visual mockup according to project title / id
  const getProjectVisual = () => {
    switch (project.id) {
      case 'portfolio-website':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-purple-950/40 via-zinc-900 to-indigo-950/30 p-4 flex flex-col justify-between border-b border-zinc-800/80 relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-zinc-400">portfolio.ts</span>
              </div>
              <span className="text-[11px] text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">TS + Vite</span>
            </div>

            <div className="space-y-1.5 font-mono text-xs text-zinc-400 pl-1">
              <div className="text-purple-300">
                <span className="text-pink-400 font-semibold">export const</span> developer = &#123;
              </div>
              <div className="pl-4 text-zinc-300">
                name: <span className="text-emerald-300">'{portfolioData.name}'</span>,
              </div>
              <div className="pl-4 text-zinc-300">
                college: <span className="text-emerald-300">'GTBIT'</span>,
              </div>
              <div className="text-purple-300">&#125;;</div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-zinc-800/70 border border-zinc-700/50">Responsive</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800/70 border border-zinc-700/50">Dark UI</span>
              <span className="px-2 py-0.5 rounded bg-zinc-800/70 border border-zinc-700/50">Framer Motion</span>
            </div>
          </div>
        );

      case 'multi-threaded-server':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-violet-950/40 via-zinc-900 to-indigo-950/30 p-4 flex flex-col justify-between border-b border-zinc-800/80 relative overflow-hidden group-hover:border-violet-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-zinc-400">server_main.cpp</span>
              </div>
              <span className="text-[11px] text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-800/40">C++ Sockets</span>
            </div>

            <div className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 font-mono text-[11px] text-zinc-300 space-y-1">
              <div className="text-emerald-400 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>[INFO] Listening on port 8080...</span>
              </div>
              <div className="text-zinc-400 pl-4">▸ ThreadPool: 8 workers active</div>
              <div className="text-purple-300 pl-4">▸ GET /api/v1/status → 200 OK</div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span className="text-emerald-400">● Concurrency: POSIX Threads</span>
              <span className="text-zinc-400">HTTP/1.1</span>
            </div>
          </div>
        );

      case 'weather-forecast':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-blue-950/40 via-zinc-900 to-sky-950/30 p-4 flex flex-col justify-between border-b border-zinc-800/80 relative overflow-hidden group-hover:border-sky-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-zinc-400">weather-api.ts</span>
              </div>
              <span className="text-[11px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">Live Metrics</span>
            </div>

            <div className="flex items-center justify-between px-2">
              <div>
                <div className="text-3xl font-bold text-white tracking-tight">24°C</div>
                <div className="text-xs text-zinc-400">Partly Cloudy • Humidity 62%</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-zinc-400">
              <div className="p-1.5 rounded bg-zinc-800/60 border border-zinc-700/40">Thu: 25°</div>
              <div className="p-1.5 rounded bg-zinc-800/60 border border-zinc-700/40">Fri: 23°</div>
              <div className="p-1.5 rounded bg-zinc-800/60 border border-zinc-700/40">Sat: 27°</div>
            </div>
          </div>
        );

      case 'dsa-visualizer':
      default:
        return (
          <div className="w-full h-48 bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-purple-950/30 p-4 flex flex-col justify-between border-b border-zinc-800/80 relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2 text-zinc-400">quickSort.cpp</span>
              </div>
              <span className="text-[11px] text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">O(n log n)</span>
            </div>

            {/* Visualizer bars */}
            <div className="flex items-end justify-between h-20 px-3 gap-1.5 pb-1">
              {[40, 75, 25, 90, 60, 30, 80, 50, 95, 45, 70].map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t transition-all duration-300 ${
                    i === 3 || i === 8
                      ? 'bg-purple-400 shadow-sm shadow-purple-500'
                      : i === 6
                      ? 'bg-sky-400'
                      : 'bg-zinc-700 group-hover:bg-zinc-600'
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
              <span>Status: Partitioning</span>
              <span className="text-purple-300">Pivot: arr[hi]</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group flex flex-col rounded-2xl bg-zinc-900/70 border border-zinc-800/90 hover:border-purple-500/40 overflow-hidden transition-all duration-300 shadow-lg shadow-black/30"
    >
      {/* Top Visual Preview */}
      {getProjectVisual()}

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-0.5 rounded-full border border-zinc-700/50">
              <Layers className="w-3 h-3 text-purple-400" />
              {project.category}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="space-y-1.5 pt-1">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80 mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-4 pt-3 border-t border-zinc-800/60">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons / Links */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700 hover:text-white border border-zinc-700/60 transition-colors"
              title="View Source on GitHub"
            >
              <Github className="w-4 h-4 text-zinc-300" />
              <span>GitHub Repo</span>
            </a>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target={project.liveUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-sm"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
