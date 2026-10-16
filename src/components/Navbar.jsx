import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent any horizontal/vertical scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 h-[72px] bg-[rgba(20,16,15,0.7)] backdrop-blur-[12px] border-b border-[rgba(245,241,236,0.08)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        {/* Left — Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-[11px] bg-gradient-to-br from-[rgba(128,15,47,0.5)] via-[rgba(20,16,15,0.9)] to-[rgba(128,15,47,0.2)] border border-[rgba(255,204,213,0.35)] shadow-[0_0_20px_rgba(128,15,47,0.35)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-rose">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              {/* Outer Hexagon outline */}
              <path
                d="M16 2L28.6603 9.3094V22.6906L16 30L3.33975 22.6906V9.3094L16 2Z"
                stroke="#FFCCD5"
                strokeWidth="2"
                strokeLinejoin="round"
                fill="rgba(128, 15, 47, 0.25)"
              />
              {/* Monogram H */}
              <path
                d="M11 10V22M21 10V22M11 16H21"
                stroke="#FFCCD5"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            {/* Ambient inner glow */}
            <div className="absolute inset-0 rounded-[11px] bg-[radial-gradient(circle_at_center,rgba(255,204,213,0.25),transparent_70%)] pointer-events-none" />
          </div>
        </a>

        {/* Center — Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-text-primary hover:text-rose transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — Get Started + Hamburger */}
        <div className="flex items-center gap-5">

          <a
            href="#contact"
            className="hidden lg:inline-flex bg-rose text-bg font-semibold text-[14px] px-5 py-2 rounded-[10px] shadow-rose-glow hover:shadow-rose-glow-lg transition-shadow"
          >
            Get Started
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-text-primary"
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* 100% Full-Screen Mobile Menu Overlay rendered at document body via Portal */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 top-0 left-0 right-0 bottom-0 w-screen max-w-full h-screen h-[100dvh] z-[99999] bg-[#0A0908] flex flex-col overflow-y-auto overflow-x-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {/* Top Header inside Menu */}
                <div className="flex items-center justify-between px-6 h-[72px] border-b border-[rgba(255,204,213,0.12)] bg-[#14100F] shrink-0">
                  <a
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-maroon/60 to-[#14100F] border border-rose/40 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                        <path
                          d="M16 2L28.6603 9.3094V22.6906L16 30L3.33975 22.6906V9.3094L16 2Z"
                          stroke="#FFCCD5"
                          strokeWidth="2"
                          fill="rgba(128, 15, 47, 0.25)"
                        />
                        <path
                          d="M11 10V22M21 10V22M11 16H21"
                          stroke="#FFCCD5"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-text-primary text-base">Hina Zeeshan</span>
                  </a>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-text-primary flex items-center justify-center transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex flex-col justify-center px-6 py-6 w-full max-w-md mx-auto">
                  <ul className="flex flex-col gap-2 w-full">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 * i }}
                      >
                        <a
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between text-[18px] font-semibold text-text-primary hover:text-rose transition-colors py-3 px-4 rounded-xl hover:bg-white/5 border-b border-[rgba(255,204,213,0.06)]"
                        >
                          <span>{link.label}</span>
                          <span className="text-rose/50 text-sm">→</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="px-6 pb-8 pt-4 shrink-0 border-t border-[rgba(255,204,213,0.08)] bg-[#14100F]/80">
                  <div className="max-w-md mx-auto">
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="block text-center bg-rose text-bg font-bold text-[15px] py-3.5 rounded-xl shadow-rose-glow hover:bg-white transition-all"
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
}
