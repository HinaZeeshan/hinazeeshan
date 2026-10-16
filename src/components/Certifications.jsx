import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiAnthropic, SiZapier } from 'react-icons/si';
import { FiCheckCircle, FiAward, FiExternalLink, FiX } from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import { AnimatedSection, AnimatedChild } from './ui/AnimatedSection';
import certifications from '../data/certifications';

const iconMap = {
  MATalogics: FiAward,
  Anthropic: SiAnthropic,
  Zapier: SiZapier,
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const featured = certifications.find((c) => c.featured) || certifications[0];
  const others = certifications.filter((c) => c.id !== featured.id);

  return (
    <SectionWrapper id="certifications">
      <AnimatedSection stagger={0.08}>
        {/* ── Header ── */}
        <AnimatedChild>
          <div className="text-center">
            <span className="eyebrow text-rose">VERIFIED CREDENTIALS</span>
            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-text-primary mt-4">
              Professional Certifications
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto text-[15px] md:text-[16px] leading-[1.6]">
              Verified certifications in autonomous AI agents, prompt engineering, no-code/low-code systems, and enterprise workflow automation.
            </p>
          </div>
        </AnimatedChild>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* 🌟 Large Featured Card (MATalogics - spans 2 cols on lg) */}
          <AnimatedChild className="lg:col-span-2">
            <GlassCard
              className="h-full p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[rgba(128,15,47,0.7)]"
            >
              {/* Maroon atmospheric glow blob */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(128,15,47,0.3)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-[14px] bg-[rgba(128,15,47,0.3)] border border-[rgba(128,15,47,0.6)] flex items-center justify-center text-rose shadow-[0_0_20px_rgba(128,15,47,0.3)]">
                      <FiAward className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[12px] font-mono uppercase tracking-widest text-rose font-semibold">
                        {featured.issuer}
                      </span>
                      <p className="text-[12px] text-text-muted">
                        Issue Date: {featured.date} • ID: {featured.certId}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(128,15,47,0.25)] border border-[rgba(255,204,213,0.3)] text-rose text-[11px] font-semibold uppercase tracking-wider">
                      <FiCheckCircle className="w-3.5 h-3.5 text-rose" />
                      {featured.grade || 'Verified'}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-surface-muted text-text-muted text-[11px] font-mono">
                      {featured.duration}
                    </span>
                  </div>
                </div>

                <h3 className="text-text-primary text-[22px] sm:text-[26px] font-bold mt-5 leading-tight">
                  {featured.name}
                </h3>

                <p className="text-text-muted text-[14px] sm:text-[15px] leading-[1.6] mt-3">
                  {featured.description}
                </p>

                {/* Skills tags */}
                {featured.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featured.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-[rgba(128,15,47,0.15)] border border-[rgba(255,204,213,0.15)] text-rose font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Certificate Image Preview with Click to Zoom */}
              {featured.image && (
                <div className="mt-6 pt-5 border-t border-[rgba(245,241,236,0.08)]">
                  <div
                    onClick={() => setSelectedCert(featured)}
                    className="relative rounded-[12px] overflow-hidden border border-[rgba(245,241,236,0.1)] cursor-pointer group/img max-h-60 bg-black/40"
                  >
                    <img
                      src={featured.image}
                      alt={featured.name}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover/img:brightness-105 transition-all duration-300 group-hover/img:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,9,8,0.85)] via-transparent to-transparent flex items-end p-4">
                      <span className="text-[12px] font-semibold text-rose flex items-center gap-1.5 bg-[rgba(20,16,15,0.85)] px-3 py-1.5 rounded-lg border border-[rgba(255,204,213,0.2)]">
                        <FiExternalLink className="w-3.5 h-3.5" /> Click to View Full Credential
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </GlassCard>
          </AnimatedChild>

          {/* Real Certifications Grid */}
          {others.map((cert) => {
            const Icon = iconMap[cert.issuerType || cert.issuer] || FiAward;

            return (
              <AnimatedChild key={cert.id}>
                <GlassCard className="h-full p-6 flex flex-col justify-between hover:border-[rgba(128,15,47,0.6)]">
                  <div>
                    {/* Top Row: Icon + Date/ID */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-[12px] bg-[rgba(128,15,47,0.25)] border border-[rgba(128,15,47,0.5)] flex items-center justify-center text-rose">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        {cert.certId && (
                          <span className="text-[10px] font-mono text-rose bg-[rgba(128,15,47,0.2)] px-2 py-0.5 rounded border border-[rgba(255,204,213,0.2)]">
                            ID: {cert.certId}
                          </span>
                        )}
                        <span className="text-[11px] font-mono text-text-muted bg-surface-muted px-2.5 py-0.5 rounded-full border border-[rgba(245,241,236,0.06)]">
                          {cert.date || cert.year}
                        </span>
                      </div>
                    </div>

                    <span className="inline-block text-rose text-[11px] font-mono uppercase tracking-widest mt-4">
                      {cert.issuer}
                    </span>

                    <h3 className="text-text-primary text-[17px] font-bold mt-1 leading-snug">
                      {cert.name}
                    </h3>

                    <p className="text-text-muted text-[13px] leading-[1.5] mt-2 line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills pills */}
                    {cert.skills && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {cert.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] px-2 py-0.5 rounded bg-[rgba(128,15,47,0.12)] text-rose font-mono"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Certificate Image Thumbnail + Click to Zoom */}
                  {cert.image && (
                    <div className="mt-4 pt-4 border-t border-[rgba(245,241,236,0.06)]">
                      <div
                        onClick={() => setSelectedCert(cert)}
                        className="relative rounded-[8px] overflow-hidden border border-[rgba(245,241,236,0.08)] cursor-pointer h-28 bg-black/40 group/thumb"
                      >
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="text-[11px] font-semibold text-rose flex items-center gap-1 bg-[rgba(20,16,15,0.9)] px-2.5 py-1 rounded border border-[rgba(255,204,213,0.2)]">
                            <FiExternalLink className="w-3 h-3" /> View Certificate
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </GlassCard>
              </AnimatedChild>
            );
          })}
        </div>
      </AnimatedSection>

      {/* 🔍 Lightbox Modal for Certificate Preview */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative z-10 w-full max-w-4xl bg-[#14100F] border border-[rgba(128,15,47,0.6)] rounded-[20px] p-4 sm:p-6 shadow-[0_0_80px_rgba(128,15,47,0.4)] overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(245,241,236,0.08)]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-rose">
                    {selectedCert.issuer}
                  </span>
                  <h4 className="text-[18px] sm:text-[20px] font-bold text-text-primary">
                    {selectedCert.name}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-[rgba(128,15,47,0.25)] border border-[rgba(128,15,47,0.5)] flex items-center justify-center text-rose hover:bg-[rgba(128,15,47,0.5)] transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate High-Res Display */}
              <div className="my-4 max-h-[70vh] overflow-auto rounded-[12px] border border-[rgba(245,241,236,0.1)] bg-black/50 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto object-contain max-h-[68vh]"
                />
              </div>

              {/* Modal Footer Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[12px] text-text-muted">
                <span>
                  {selectedCert.certId ? `Credential ID: ${selectedCert.certId}` : 'Verified Completion'}
                </span>
                <span className="text-rose font-mono">Issued to: Hina Zeeshan</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
