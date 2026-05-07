// src/components/Projects.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
            My work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold gradient-text font-display mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
            Click on a project card to view the live demo. Projects marked{' '}
            <span className="text-slate-300 font-medium">"Coming Soon"</span> are under development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-white/5 border border-white/10 text-slate-300 text-sm font-medium
              hover:bg-white/10 hover:text-white hover:border-purple-500/30
              transition-all duration-300"
            id="view-all-projects-btn"
          >
            View all on GitHub
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
