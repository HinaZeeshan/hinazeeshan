import { FiBriefcase, FiLayers, FiGlobe, FiAward } from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import { AnimatedSection, AnimatedChild } from './ui/AnimatedSection';
import Button from './ui/Button';

const stats = [
  { icon: FiBriefcase, metric: '24/7', label: 'Autonomous Systems' },
  { icon: FiLayers, metric: '15+', label: 'AI & Automation Tools' },
  { icon: FiGlobe, metric: '< 5s', label: 'Average Response Time' },
  { icon: FiAward, metric: '5', label: 'Certified Credentials' },
];

export default function About() {
  return (
    <section id="about">
      <SectionWrapper>
        <AnimatedSection animation="fadeUp">
          <p className="eyebrow">ABOUT ME</p>

          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.15] text-text-primary mt-4">
            AI Infrastructure Built for Builders
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* Left column — bio */}
            <div>
              <p className="text-text-muted text-[16px] md:text-[18px] leading-[1.6]">
                I am an AI No-Code / Low-Code Systems Engineer specializing in
                intelligent automations, AI agents, voice systems, workflow
                orchestration, and scalable business solutions. My expertise lies
                in transforming complex operational processes into seamless
                AI-powered experiences using tools like n8n, VAPI, OpenAI,
                Supabase, and modern automation ecosystems.
              </p>

              <p className="text-text-muted text-[16px] md:text-[18px] leading-[1.6] mt-4">
                With a focus on practical, production-ready solutions, I bridge
                the gap between cutting-edge AI capabilities and real-world
                business needs — delivering systems that are reliable, scalable,
                and designed to grow with your organization.
              </p>

              <div className="mt-8">
                <Button variant="secondary">Explore Solutions</Button>
              </div>
            </div>

            {/* Right column — 2×2 stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, metric, label }) => (
                <AnimatedChild key={label}>
                  <GlassCard>
                    {/* Icon well */}
                    <div className="w-10 h-10 rounded-[10px] bg-[rgba(128,15,47,0.25)] border border-[rgba(128,15,47,0.5)] flex items-center justify-center">
                      <Icon className="text-rose" size={18} />
                    </div>

                    {/* Metric */}
                    <p className="text-rose text-[28px] font-bold mt-3">
                      {metric}
                    </p>

                    {/* Label */}
                    <p className="text-text-muted text-[11px] uppercase tracking-wider mt-1">
                      {label}
                    </p>
                  </GlassCard>
                </AnimatedChild>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </section>
  );
}
