import { FiLinkedin, FiGithub, FiMail, FiGlobe, FiActivity, FiHeadphones, FiShield } from 'react-icons/fi';

const featureStrip = [
  { icon: FiGlobe, title: 'Global Coverage', desc: 'Deployed across 20+ edge regions' },
  { icon: FiActivity, title: 'Real-time Analytics', desc: 'Insights that drive system growth' },
  { icon: FiHeadphones, title: '24/7 Support', desc: 'Expert engineering help, anytime' },
  { icon: FiShield, title: 'Enterprise Security', desc: 'SOC2 & HIPAA compliant workflows' },
];

const navLinks = ['Home', 'About', 'Services', 'Skills', 'Projects', 'Contact'];

const serviceLinks = [
  'AI Automation',
  'Voice AI',
  'WhatsApp AI',
  'Email Automation',
  'Workflow Automation',
  'RAG Systems',
  'Consulting',
];

const socialLinks = [
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hinazeeshan-automationengineer/' },
  { icon: FiMail, href: 'mailto:hqzqureshi@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-[rgba(245,241,236,0.08)] pt-12 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Footer Feature Strip (Spec 6.F) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-[rgba(245,241,236,0.08)] mb-12">
          {featureStrip.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[10px] bg-[rgba(128,15,47,0.25)] border border-[rgba(128,15,47,0.5)] flex items-center justify-center shrink-0 text-rose">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-[14px] font-semibold text-text-primary leading-tight">{item.title}</h5>
                  <p className="text-[12px] text-text-muted mt-1 leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2">
              {/* Hexagon SVG logo */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1L26 7.5V20.5L14 27L2 20.5V7.5L14 1Z"
                  stroke="#FFCCD5"
                  strokeWidth="1.5"
                  fill="none"
                />
                <text
                  x="14"
                  y="18"
                  textAnchor="middle"
                  fill="#FFCCD5"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  H
                </text>
              </svg>
              <span className="font-bold text-text-primary text-lg">Hina Zeeshan</span>
            </div>
            <p className="text-text-muted text-[14px] mt-3">
              AI Systems Engineer building intelligent solutions for tomorrow's businesses.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-text-primary text-[14px] font-semibold mb-4">Navigation</h4>
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-text-muted text-[14px] hover:text-rose transition-colors mb-2 block"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-text-primary text-[14px] font-semibold mb-4">Services</h4>
            {serviceLinks.map((service) => (
              <span
                key={service}
                className="text-text-muted text-[14px] mb-2 block"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h4 className="text-text-primary text-[14px] font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-[10px] bg-[rgba(128,15,47,0.2)] border border-[rgba(128,15,47,0.4)] flex items-center justify-center text-rose hover:bg-[rgba(128,15,47,0.4)] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(245,241,236,0.08)] mt-8 pt-8 flex justify-center items-center text-center">
          <span className="text-text-muted text-[13px]">
            © 2026 Hina Zeeshan. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
