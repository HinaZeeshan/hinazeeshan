import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection, { AnimatedChild } from './ui/AnimatedSection';
import skills from '../data/skills';

const ProficiencyBar = ({ name, proficiency }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true, margin: '-50px' });

  return (
    <div className="flex items-center gap-3 mt-3">
      <span className="text-text-muted text-[13px] w-24">{name}</span>
      <div
        ref={barRef}
        className="flex-1 h-1.5 bg-[rgba(128,15,47,0.15)] rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-maroon to-rose"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
      <span className="text-rose text-[12px] font-semibold w-10 text-right">
        {proficiency}%
      </span>
    </div>
  );
};

const Skills = () => {
  const categories = Object.entries(skills);

  return (
    <SectionWrapper id="skills">
      {/* Header */}
      <AnimatedSection animation="fadeUp">
        <div className="text-center">
          <span className="inline-block text-rose text-[13px] font-semibold uppercase tracking-[0.2em] font-mono">
            SKILLS &amp; EXPERTISE
          </span>
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-text-primary mt-4">
            Technical Arsenal
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Mastery across the modern AI and automation stack
          </p>
        </div>
      </AnimatedSection>

      {/* Skills Categories */}
      <AnimatedSection className="mt-16" stagger={0.15}>
        {categories.map(([category, skillList], index) => (
          <AnimatedChild key={category}>
            <div className={index < categories.length - 1 ? 'mb-10' : ''}>
              {/* Category Name */}
              <h3 className="text-rose text-[13px] font-semibold uppercase tracking-wider mb-4">
                {category}
              </h3>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center px-4 py-2 bg-[rgba(128,15,47,0.15)] border border-[rgba(128,15,47,0.3)] rounded-full text-text-primary text-[14px] font-medium hover:bg-[rgba(128,15,47,0.3)] hover:border-[rgba(128,15,47,0.5)] hover:text-rose transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Proficiency Bars */}
              <div className="mt-4">
                {skillList.map((skill) => (
                  <ProficiencyBar
                    key={skill.name}
                    name={skill.name}
                    proficiency={skill.proficiency}
                  />
                ))}
              </div>
            </div>
          </AnimatedChild>
        ))}
      </AnimatedSection>
    </SectionWrapper>
  );
};

export default Skills;
