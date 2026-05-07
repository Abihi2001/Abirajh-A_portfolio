// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Lock, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const hasLink = project.projectLink && project.projectLink.trim() !== '';

  const handleClick = () => {
    if (hasLink) {
      window.open(project.projectLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={hasLink ? { y: -6, scale: 1.01 } : { y: -2 }}
      onClick={handleClick}
      className={`group relative glass-card rounded-2xl overflow-hidden border border-white/10
        transition-all duration-400
        ${hasLink
          ? 'cursor-pointer hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20'
          : 'cursor-default hover:border-white/15'
        }`}
      id={`project-card-${project.id}`}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x300/1e293b/6366f1?text=${encodeURIComponent(project.title)}`;
          }}
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Hover overlay */}
        {hasLink ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-purple-900/60 backdrop-blur-sm flex items-center justify-center gap-2
              transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <ExternalLink size={20} className="text-white" />
            <span className="text-white font-semibold text-sm">View Project</span>
            <ArrowUpRight size={16} className="text-white" />
          </motion.div>
        ) : (
          <div className="absolute top-3 right-3">
            {/* <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
              bg-slate-900/80 border border-white/10 backdrop-blur-sm">
              <Lock size={11} className="text-slate-400" />
              <span className="text-slate-400 text-xs font-medium">Coming Soon</span>
            </div> */}
          </div>
        )}

        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ring-1 ring-purple-500/0 group-hover:ring-purple-500/30" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-purple-300 transition-colors duration-300">
            {project.title}
          </h3>
          {hasLink && (
            <motion.div
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20
                flex items-center justify-center group-hover:bg-purple-500/20 transition-colors"
            >
              <ArrowUpRight size={14} className="text-purple-400" />
            </motion.div>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium
                bg-white/5 border border-white/10 text-slate-300
                group-hover:border-purple-500/20 group-hover:text-purple-300
                transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom glow line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500
        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
    </motion.div>
  );
}
