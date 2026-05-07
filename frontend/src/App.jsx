// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { GitBranch, Link, Mail, Heart } from 'lucide-react';
import profilePic from './assets/profile.png';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white dark:bg-slate-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">


            </div>

            {/* Copyright */}
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              Built with{' '}
              <Heart size={13} className="text-red-400 fill-red-400" />{' '}
              by{' '}
              <span className="text-slate-300 font-medium">Abirajh Amarasingam</span>
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: GitBranch, href: 'https://github.com/Abihi2001', label: 'GitHub' },
                { icon: Link, href: 'https://www.linkedin.com/in/amarasingam-abirajh-225402281/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abiamarasingam@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center
                    bg-white/5 border border-white/10 text-slate-400
                    hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10
                    transition-all duration-300"
                  aria-label={label}
                  id={`footer-${label.toLowerCase()}-link`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
