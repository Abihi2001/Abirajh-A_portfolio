// src/components/Contact.jsx
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, GitBranch, Link, Send, MapPin, Phone, CheckCircle } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abiamarasingam@gmail.com',
    href: 'mailto:abiamarasingam@gmail.com',
    color: 'from-red-500 to-orange-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/abirajh',
    href: 'https://github.com/Abihi2001',
    color: 'from-slate-400 to-slate-600',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
  },
  {
    icon: Link,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abirajh',
    href: 'https://www.linkedin.com/in/amarasingam-abirajh-225402281/',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Colombo, Sri Lanka',
    href: null,
    color: 'from-green-500 to-teal-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Background blobs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

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
            Let's connect
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold gradient-text font-display mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            I'm open to internships, collaborations, and exciting projects. Let's build something great together!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let's talk!</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether you have a project idea, want to collaborate, or just want to say hi —
                my inbox is always open. I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((item, i) => {
                const Icon = item.icon;
                const Inner = (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={item.href ? { x: 4 } : {}}
                    className={`flex items-center gap-4 p-4 rounded-2xl border ${item.border} ${item.bg}
                      glass-card transition-all duration-300
                      ${item.href ? 'cursor-pointer hover:shadow-lg' : 'cursor-default'}`}
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color}
                      flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    id={`contact-${item.label.toLowerCase()}-link`}
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30
                      flex items-center justify-center"
                  >
                    <CheckCircle size={32} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2.5 rounded-xl text-sm font-medium
                      bg-white/5 border border-white/10 text-slate-300
                      hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  <h3 className="text-xl font-bold text-white mb-6">Send a message</h3>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Abirajh Amarasingam"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                        placeholder-slate-600 text-sm outline-none
                        focus:border-purple-500/50 focus:bg-white/8 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide" htmlFor="contact-email">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                        placeholder-slate-600 text-sm outline-none
                        focus:border-purple-500/50 focus:bg-white/8 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hey Abirajh, I'd love to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white
                        placeholder-slate-600 text-sm outline-none resize-none
                        focus:border-purple-500/50 focus:bg-white/8 transition-all duration-300"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-2"
                    >
                      <span className="mt-0.5">⚠️</span>
                      <p>{error}</p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-white
                      bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500
                      shadow-lg shadow-purple-500/25
                      hover:shadow-purple-500/40 transition-all duration-300
                      flex items-center justify-center gap-2 cursor-pointer
                      disabled:opacity-70 disabled:cursor-not-allowed"
                    id="contact-submit-btn"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
