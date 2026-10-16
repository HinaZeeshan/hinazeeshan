import { FiCpu, FiMic, FiMessageSquare, FiGitBranch, FiDatabase, FiTrendingUp, FiMail } from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import AnimatedSection, { AnimatedChild } from './ui/AnimatedSection';
import services from '../data/services';

const iconMap = {
  FiCpu,
  FiMic,
  FiMessageSquare,
  FiGitBranch,
  FiDatabase,
  FiTrendingUp,
  FiMail,
};

const Services = () => {
  return (
    <SectionWrapper id="services">
      {/* Header */}
      <AnimatedSection animation="fadeUp">
        <div className="text-center">
          <span className="inline-block text-rose text-[13px] font-semibold uppercase tracking-[0.2em] font-mono">
            SERVICES
          </span>
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-text-primary mt-4">
            What I Build
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Specialized AI and automation solutions designed to transform your
            business operations and drive measurable results.
          </p>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
        stagger={0.1}
      >
        {services.map((service) => {
          const IconComponent = iconMap[service.icon];

          return (
            <AnimatedChild key={service.id}>
              <GlassCard className="h-full">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-[12px] bg-[rgba(128,15,47,0.25)] border border-[rgba(128,15,47,0.5)] flex items-center justify-center mb-4">
                  {IconComponent && (
                    <IconComponent className="text-rose w-5 h-5" />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-text-primary text-[16px] font-semibold mt-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-[14px] leading-[1.6] mt-2">
                  {service.description}
                </p>
              </GlassCard>
            </AnimatedChild>
          );
        })}
      </AnimatedSection>
    </SectionWrapper>
  );
};

export default Services;
