// src/components/Skills.jsx
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import skills, { skillCategories } from '../data/skills';

function SkillBar({ skill, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillCategories];
  const filtered =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 dark:bg-[#080f1f] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold gradient-text font-display mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                ${activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              id={`skill-filter-${cat.toLowerCase().replace('/', '-')}`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card rounded-2xl p-5 border border-white/10
                hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10
                transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20
                  border border-white/10 flex items-center justify-center text-xl
                  group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{skill.name}</div>
                  <div className="text-slate-500 text-xs">{skill.category}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-mono text-purple-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
              </div>
              {/* Mini progress bar */}
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
