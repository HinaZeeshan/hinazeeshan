import { FiStar } from 'react-icons/fi';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import { AnimatedSection, AnimatedChild } from './ui/AnimatedSection';
import testimonials from '../data/testimonials';

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <AnimatedSection stagger>
        {/* ── Header ── */}
        <AnimatedChild>
          <p className="text-center text-rose text-[13px] font-semibold tracking-[0.15em] uppercase font-mono">
            TESTIMONIALS
          </p>
        </AnimatedChild>

        <AnimatedChild>
          <h2 className="text-center text-[32px] md:text-[40px] lg:text-[44px] font-bold text-text-primary mt-4">
            What Clients Say
          </h2>
        </AnimatedChild>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {testimonials.map((testimonial) => (
            <AnimatedChild key={testimonial.name}>
              <GlassCard className="h-full p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-rose w-4 h-4 fill-rose"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-primary text-[15px] leading-[1.6] italic">
                  <span className="text-rose text-[24px] font-bold not-italic">
                    &ldquo;
                  </span>
                  {testimonial.quote}
                </p>

                {/* Client Info */}
                <div className="mt-6">
                  <p className="text-text-primary text-[15px] font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-text-muted text-[13px] mt-0.5">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </GlassCard>
            </AnimatedChild>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
