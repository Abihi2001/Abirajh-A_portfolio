// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Link, Mail, Sparkles } from 'lucide-react';
import profilePic from '../assets/profile.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-slate-950 dark:bg-slate-950"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [30, 0, 30] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl"
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-purple-500/10 border border-purple-500/30 text-purple-400
                text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              <span>Available for opportunities</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-display leading-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Abirajh</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
            >
              {['Flutter Developer', 'MERN Stack', 'AI Enthusiast'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium
                    bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-lg sm:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed
                mx-auto lg:mx-0"
            >
              Building{' '}
              <span className="text-white font-semibold">intelligent</span> and{' '}
              <span className="text-white font-semibold">scalable</span> digital
              solutions — from mobile apps to full-stack platforms and AI systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl text-white font-semibold text-sm
                  bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500
                  shadow-lg shadow-purple-500/25 transition-all duration-300 cursor-pointer"
                id="hero-view-projects-btn"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-semibold text-sm
                  bg-white/5 border border-white/20 text-white
                  hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                id="hero-contact-btn"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: GitBranch, href: 'https://github.com/Abihi2001', label: 'GitHub' },
                { icon: Link, href: 'https://www.linkedin.com/in/amarasingam-abirajh-225402281/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abiamarasingam@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center
                    bg-white/5 border border-white/10 text-slate-400
                    hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10
                    transition-all duration-300"
                  aria-label={label}
                  id={`hero-${label.toLowerCase()}-link`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 p-1 pulse-glow">
                <div className="w-full h-full rounded-full bg-slate-950 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <img
                      src={profilePic}
                      alt="Abirajh Amarasingam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating skill badges */}
              {[
                { label: 'React', angle: 0, color: 'from-cyan-500 to-blue-500' },
                { label: 'Flutter', angle: 120, color: 'from-blue-500 to-purple-500' },
                { label: 'AI/ML', angle: 240, color: 'from-purple-500 to-pink-500' },
              ].map(({ label, angle, color }, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 52 * Math.cos(rad);
                const y = 50 + 52 * Math.sin(rad);
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold text-white
                        bg-gradient-to-r ${color} shadow-lg`}
                    >
                      {label}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
