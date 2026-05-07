// src/components/About.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Lightbulb, Rocket, GraduationCap, MapPin } from 'lucide-react';

const highlights = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    desc: 'I break down complex challenges into elegant, efficient solutions with clean, maintainable code.',
    gradient: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    desc: 'Passionate about machine learning, NLP, and building intelligent systems that learn and adapt.',
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Code2,
    title: 'Full Stack Developer',
    desc: 'Proficient in the MERN stack, Flutter, FastAPI — delivering end-to-end digital products.',
    gradient: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

function HighlightCard({ card, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`glass-card dark:glass-card rounded-2xl p-6 border ${card.border}
        hover:shadow-xl transition-all duration-300 group cursor-default`}
    >
      <div className={`w-12 h-12 rounded-xl ${card.bg} border ${card.border}
        flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <div className={`bg-gradient-to-br ${card.gradient} rounded-lg p-2`}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-slate-950 dark:bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold gradient-text font-display mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-300 text-base leading-relaxed">
              <p>
                I'm{' '}
                <span className="text-white font-semibold">Abirajh Amarasingam</span>, a
                passionate Software Engineering undergraduate specializing in building
                intelligent, scalable digital solutions across mobile, web, and AI domains.
              </p>
              <p>
                My journey spans from crafting smooth{' '}
                <span className="text-purple-400 font-medium">Flutter mobile apps</span> to
                architecting robust{' '}
                <span className="text-blue-400 font-medium">MERN stack platforms</span>, and
                integrating cutting-edge{' '}
                <span className="text-cyan-400 font-medium">AI/ML models</span> into
                real-world applications.
              </p>
              <p>
                I believe great software is about understanding people — and engineering
                solutions that are as intuitive as they are powerful. Every project is an
                opportunity to push boundaries and deliver meaningful impact.
              </p>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: GraduationCap, text: 'Software Engineering Undergrad' },
                { icon: MapPin, text: 'Sri Lanka' },
                { icon: Rocket, text: 'Open to Remote Roles' },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                    bg-white/5 border border-white/10 text-slate-300 text-sm"
                >
                  <Icon size={14} className="text-purple-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '3+', label: 'Tech Stacks' },
                { value: '1+', label: 'Years Experience' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-slate-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl" />
              <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
                {/* Code snippet visual */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <pre className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed overflow-x-auto">
                  {`const developer = {
  name: "Abirajh Amarasingam",
  role: "Undergraduate Information Technology @SLIIT",
  stack: ["Flutter", "React", "Python"],
  passion: "AI & Scalable Systems",
  
  code: () => {
    return "Elegant solutions 🚀";
  },
  
  currentlyLearning: [
    "Large Language Models",
    "System Design",
    "Cloud Architecture"
  ],
};`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((card, i) => (
            <HighlightCard key={card.title} card={card} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
