// src/components/Experience.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Mobile App Developer Intern',
    company: 'Apps Lanka Software Solution',
    duration: '2024 – Present',
    location: 'Colombo, Sri Lanka',
    type: 'Internship',
    description:
      'Working as a Flutter developer intern, contributing to production-level mobile applications. Collaborating with senior engineers to design, develop, and deploy cross-platform apps with robust architecture.',
    achievements: [
      'Developed Flutter UI components used in a live client-facing application',
      'Implemented REST API integrations using Dio and Provider state management',
      'Participated in agile sprint cycles and code review processes',
      'Improved app performance by optimizing widget rebuild cycles',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git'],
    color: 'from-purple-500 to-blue-500',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/10',
  },
  {
    id: 2,
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    duration: '2023 – Present',
    location: 'Remote',
    type: 'Freelance',
    description:
      'Building custom web and mobile solutions for clients, from concept to deployment. Specializing in MERN stack web apps and Flutter mobile applications.',
    achievements: [
      'Delivered 5+ client projects with mobile and web platforms',
      'Built AI-powered features using Python, FastAPI, and OpenAI API',
      'Designed and deployed MongoDB databases with proper indexing',
      'Maintained 100% client satisfaction rate across all projects',
    ],
    tech: ['React', 'Node.js', 'Flutter', 'MongoDB', 'Python'],
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
  },
];

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative flex gap-6 lg:gap-10"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color}
            flex items-center justify-center shadow-lg z-10`}
        >
          <Briefcase size={20} className="text-white" />
        </motion.div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 flex-1 mt-3 timeline-line min-h-16 rounded-full" />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, scale: 1.01 }}
        className={`glass-card rounded-2xl p-6 border ${exp.borderColor}
          hover:shadow-xl transition-all duration-300 mb-8 flex-1`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-0.5">{exp.role}</h3>
            <p className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.bgColor} border ${exp.borderColor} text-white`}>
              {exp.type}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} className="text-slate-400" />
            {exp.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-slate-400" />
            {exp.location}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

        {/* Achievements */}
        <ul className="space-y-2 mb-5">
          {exp.achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-2 text-sm text-slate-300">
              <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium
                bg-white/5 border border-white/10 text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 dark:bg-[#080f1f] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="absolute right-0 top-1/4 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-3">
            My journey
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold gradient-text font-display mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
