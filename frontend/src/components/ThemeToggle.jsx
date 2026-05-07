// src/components/ThemeToggle.jsx
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center
        bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10
        hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300
        backdrop-blur-sm cursor-pointer"
      aria-label="Toggle theme"
      id="theme-toggle-btn"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-slate-700" />
        )}
      </motion.div>
    </motion.button>
  );
}
