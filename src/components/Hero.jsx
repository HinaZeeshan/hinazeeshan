import { motion } from 'framer-motion';
import Badge from './ui/Badge';
import Button from './ui/Button';

const trustItems = [
  'No credit card required',
  'Free 14-day trial',
  'Cancel anytime',
];

const statCards = [
  {
    label: 'Model Accuracy',
    metric: '98.6%',
    position: 'top-4 left-0 lg:-left-6',
    animation: 'animate-float',
  },
  {
    label: 'Data Processed',
    metric: '12.4M',
    position: 'top-4 right-0 lg:-right-6',
    animation: 'animate-float-delayed',
  },
  {
    label: 'API Requests',
    metric: '2.7B',
    position: 'bottom-4 right-0 lg:-right-4',
    animation: 'animate-float-slow',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background maroon glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(128,15,47,0.2)_0%,transparent_70%)] filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left Column ── */}
          <div>
            <motion.div {...fadeUp(0)}>
              <Badge>AI THAT WORKS FOR YOU</Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[36px] md:text-[56px] lg:text-[68px] font-extrabold leading-[1.05] tracking-[-0.02em] text-text-primary mt-6"
            >
              Build <span className="gradient-text">Smarter.</span>
              <br />
              Scale <span className="gradient-text">Faster.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-[16px] md:text-[18px] text-text-muted leading-[1.6] mt-6 max-w-lg"
            >
              Hina Zeeshan helps startups and enterprises integrate powerful AI
              models, autonomous voice systems, and intelligent workflows into
              their operations with speed, security, and scale.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-3 mt-8"
            >
              <Button variant="primary" href="#contact">Get Started Free →</Button>
              <Button variant="secondary" href="#projects">Book a Demo</Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-6 mt-8 text-[12px] text-text-muted"
            >
              {trustItems.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-rose inline-block mr-2" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column (Glowing Sphere with Portrait & Concentric Rings) ── */}
          <div className="relative flex items-center justify-center min-h-[440px] lg:min-h-[540px]">
            {/* Big maroon glow blob behind sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(128,15,47,0.4)_0%,transparent_70%)] blur-[90px] pointer-events-none" />

            {/* Concentric maroon platform rings */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[340px] lg:w-[420px] h-[90px] pointer-events-none">
              <div className="absolute inset-x-0 bottom-0 h-[70px] rounded-[100%] border border-[rgba(128,15,47,0.5)] shadow-[0_0_30px_rgba(128,15,47,0.3)]" />
              <div className="absolute inset-x-8 bottom-3 h-[50px] rounded-[100%] border border-[rgba(128,15,47,0.35)]" />
              <div className="absolute inset-x-16 bottom-6 h-[34px] rounded-[100%] border border-[rgba(255,204,213,0.2)]" />
            </div>

            {/* Glowing Sphere Container with Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Outer atmospheric aura */}
              <div className="relative p-2.5 rounded-full bg-gradient-to-tr from-[rgba(128,15,47,0.7)] via-[rgba(255,204,213,0.2)] to-[rgba(128,15,47,0.85)] shadow-[0_0_80px_rgba(128,15,47,0.5),0_0_140px_rgba(128,15,47,0.25)]">
                <div className="w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden relative group border border-[rgba(255,204,213,0.3)] bg-[#14100F]">
                  <img
                    src="/images/profile.png"
                    alt="Hina Zeeshan - AI Systems Engineer"
                    className="w-full h-full object-cover object-center filter contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,204,213,0.08)] via-transparent to-[rgba(10,9,8,0.65)] pointer-events-none" />
                  {/* AI Badge on sphere */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[rgba(20,16,15,0.85)] backdrop-blur-md border border-[rgba(255,204,213,0.3)] shadow-[0_0_20px_rgba(128,15,47,0.5)]">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-rose">
                      AI CORE ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating stat cards (Desktop & Tablet) */}
            {statCards.map((card) => (
              <div
                key={card.label}
                className={`hidden sm:block absolute ${card.position} ${card.animation} z-20`}
              >
                <div className="bg-[rgba(20,16,15,0.75)] backdrop-blur-[14px] border border-[rgba(245,241,236,0.1)] rounded-card px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[rgba(128,15,47,0.6)] transition-all">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose animate-ping" />
                    <p className="text-text-muted text-[11px] uppercase tracking-wider font-medium">
                      {card.label}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <p className="text-rose text-[22px] font-bold leading-tight font-sans">
                      {card.metric}
                    </p>
                    <span className="text-[10px] text-text-muted">↑ 24%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Stats Row (renders cleanly beneath sphere on small screens) */}
          <div className="grid grid-cols-3 gap-2.5 sm:hidden w-full -mt-4 mb-4">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="bg-[rgba(20,16,15,0.75)] backdrop-blur-[14px] border border-[rgba(245,241,236,0.1)] rounded-[12px] p-2.5 text-center shadow-md"
              >
                <p className="text-rose text-[18px] font-bold leading-tight">
                  {card.metric}
                </p>
                <p className="text-text-muted text-[9.5px] uppercase tracking-wider mt-0.5 truncate">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
