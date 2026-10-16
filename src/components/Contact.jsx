import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMessageSquare, FiMapPin, FiCheck, FiSend } from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import AnimatedSection from './ui/AnimatedSection';

const contactItems = [
  { icon: FiMail, label: 'Email', value: 'hqzqureshi@gmail.com', href: 'mailto:hqzqureshi@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/hinazeeshan-automationengineer', href: 'https://www.linkedin.com/in/hinazeeshan-automationengineer/' },
  { icon: FiMapPin, label: 'Location', value: 'Pakistan · Remote Worldwide', href: null },
];

const projectTypes = [
  'AI Automation',
  'Voice AI Agent',
  'WhatsApp Assistant',
  'Email Automation',
  'Workflow Automation',
  'RAG System',
  'Consulting',
  'Other',
];

const inputClasses =
  'w-full bg-bg border border-[rgba(245,241,236,0.08)] rounded-[10px] px-4 py-3 text-text-primary text-[15px] placeholder-text-muted/50 focus:border-maroon focus:outline-none transition-colors';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://formsubmit.co/ajax/hqzqureshi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          projectType: form.projectType,
          message: form.message,
          _subject: `New Portfolio Contact: ${form.name} (${form.projectType || 'General'})`,
        }),
      });
    } catch (err) {
      console.warn('Form submit error:', err);
    }
    setSubmitted(true);
  };

  return (
    <AnimatedSection>
      <SectionWrapper id="contact">
        {/* Eyebrow */}
        <p className="text-center text-rose text-[13px] font-mono uppercase tracking-widest">
          Get In Touch
        </p>

        {/* Heading */}
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-text-primary mt-4 text-center">
          Let's Build Something Amazing
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left column — Contact info */}
          <div>
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-row gap-4 mb-6 group">
                  <div className="w-12 h-12 rounded-[12px] bg-[rgba(128,15,47,0.25)] border border-[rgba(128,15,47,0.5)] flex items-center justify-center flex-shrink-0 group-hover:border-rose transition-colors">
                    <Icon className="text-rose w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-text-muted text-[13px] uppercase tracking-wider block">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-text-primary text-[15px] font-medium mt-0.5 block hover:text-rose transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text-primary text-[15px] font-medium mt-0.5 block">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column — Contact form */}
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-5">
                <label className="text-text-muted text-[13px] font-medium uppercase tracking-wider mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="text-text-muted text-[13px] font-medium uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              {/* Company */}
              <div className="mb-5">
                <label className="text-text-muted text-[13px] font-medium uppercase tracking-wider mb-2 block">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className={inputClasses}
                />
              </div>

              {/* Project Type */}
              <div className="mb-5">
                <label className="text-text-muted text-[13px] font-medium uppercase tracking-wider mb-2 block">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className="text-text-muted text-[13px] font-medium uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project..."
                  className={inputClasses}
                />
              </div>

              {/* Submit button */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.button
                    key="send"
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-rose text-bg font-semibold py-3 rounded-[10px] shadow-rose-glow hover:shadow-rose-glow-lg w-full transition-all cursor-pointer"
                  >
                    Send Message
                    <FiSend className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    key="sent"
                    type="button"
                    disabled
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 font-semibold py-3 rounded-[10px] w-full cursor-default"
                  >
                    <FiCheck className="w-5 h-5" />
                    Message Sent!
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </GlassCard>
        </div>
      </SectionWrapper>
    </AnimatedSection>
  );
}
