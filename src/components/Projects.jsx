import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import GlassCard from './ui/GlassCard';
import AnimatedSection, { AnimatedChild } from './ui/AnimatedSection';
import projects from '../data/projects';

const JsonSnippet = ({ snippet }) => (
  <div className="bg-bg rounded-lg p-3 mt-3 overflow-x-auto">
    <pre className="font-mono text-[11px] leading-[1.6]">
      <code>
        {snippet.split('\n').map((line, i) => {
          const parts = [];
          let remaining = line;
          let key = 0;

          while (remaining.length > 0) {
            // Match a JSON key
            const keyMatch = remaining.match(/^(\s*)"([^"]+)"(\s*:\s*)/);
            if (keyMatch) {
              if (keyMatch[1]) parts.push(<span key={key++} className="text-text-muted">{keyMatch[1]}</span>);
              parts.push(<span key={key++} className="text-text-muted">&quot;</span>);
              parts.push(<span key={key++} className="text-rose">{keyMatch[2]}</span>);
              parts.push(<span key={key++} className="text-text-muted">&quot;</span>);
              parts.push(<span key={key++} className="text-text-muted">{keyMatch[3]}</span>);
              remaining = remaining.slice(keyMatch[0].length);
              continue;
            }

            // Match a string value
            const strMatch = remaining.match(/^"([^"]*)"(.*)/);
            if (strMatch) {
              parts.push(<span key={key++} className="text-text-muted">&quot;</span>);
              parts.push(<span key={key++} className="text-[#F4A3B4]">{strMatch[1]}</span>);
              parts.push(<span key={key++} className="text-text-muted">&quot;</span>);
              remaining = strMatch[2];
              continue;
            }

            // Match a number
            const numMatch = remaining.match(/^(\d+\.?\d*)(.*)/);
            if (numMatch) {
              parts.push(<span key={key++} className="text-text-primary">{numMatch[1]}</span>);
              remaining = numMatch[2];
              continue;
            }

            // Match boolean
            const boolMatch = remaining.match(/^(true|false)(.*)/);
            if (boolMatch) {
              parts.push(<span key={key++} className="text-rose">{boolMatch[1]}</span>);
              remaining = boolMatch[2];
              continue;
            }

            // Match braces/brackets/punctuation
            const punctMatch = remaining.match(/^([{}\[\],])(.*)/);
            if (punctMatch) {
              parts.push(<span key={key++} className="text-text-muted">{punctMatch[1]}</span>);
              remaining = punctMatch[2];
              continue;
            }

            // Match whitespace
            const wsMatch = remaining.match(/^(\s+)(.*)/);
            if (wsMatch) {
              parts.push(<span key={key++}>{wsMatch[1]}</span>);
              remaining = wsMatch[2];
              continue;
            }

            // Fallback: single character
            parts.push(<span key={key++} className="text-text-primary">{remaining[0]}</span>);
            remaining = remaining.slice(1);
          }

          return (
            <span key={i}>
              {parts}
              {i < snippet.split('\n').length - 1 ? '\n' : ''}
            </span>
          );
        })}
      </code>
    </pre>
  </div>
);

/* Realistic UI Mockups for AI systems */
const RealisticMockup = ({ project }) => {
  const { title } = project;

  if (title.includes('WhatsApp')) {
    return (
      <div className="bg-[#0e1614] border border-[rgba(255,204,213,0.12)] rounded-[12px] p-3.5 h-44 flex flex-col justify-between font-sans">
        <div className="flex items-center justify-between pb-2 border-b border-[rgba(245,241,236,0.06)]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[12px] font-semibold text-text-primary">WhatsApp AI Sales Bot</span>
          </div>
          <span className="text-[10px] font-mono text-rose bg-[rgba(128,15,47,0.3)] px-2 py-0.5 rounded">v2.4 Active</span>
        </div>
        <div className="space-y-2 text-[11px] my-auto">
          <div className="bg-[rgba(255,241,236,0.06)] text-text-muted px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]">
            Hi! Can you recommend an enterprise AI plan for 100k calls?
          </div>
          <div className="bg-[rgba(128,15,47,0.35)] text-text-primary px-2.5 py-1.5 rounded-lg rounded-tr-none ml-auto max-w-[88%] border border-[rgba(255,204,213,0.2)]">
            ⚡ Generated custom tier with 99.8% SLA & dedicated n8n webhooks. Quote sent!
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-text-muted pt-1">
          <span>Latency: 420ms</span>
          <span className="text-emerald-400">Order Processed ✓</span>
        </div>
      </div>
    );
  }

  if (title.includes('Knowledge')) {
    return (
      <div className="bg-[#0b0f14] border border-[rgba(255,204,213,0.12)] rounded-[12px] p-3.5 h-44 flex flex-col justify-between font-mono">
        <div className="flex items-center justify-between pb-2 border-b border-[rgba(245,241,236,0.06)]">
          <span className="text-[11px] text-rose font-bold">RAG :: Vector Query Engine</span>
          <span className="text-[10px] text-text-muted">Cosine: 0.942</span>
        </div>
        <div className="bg-[rgba(10,9,8,0.7)] p-2 rounded border border-[rgba(245,241,236,0.05)] text-[10px] text-text-muted space-y-1 my-auto">
          <div className="text-text-primary flex justify-between">
            <span>&gt; Embeddings: 1,536 dims</span>
            <span className="text-rose">120ms</span>
          </div>
          <div className="w-full bg-[rgba(128,15,47,0.2)] h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-maroon to-rose h-full w-[94%]" />
          </div>
          <p className="text-[9px] text-[#9A9490] truncate">&gt; Top match: standard_operating_proc_v3.pdf [chunk #48]</p>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-text-muted">Chunks: 15,234 indexed</span>
          <span className="text-rose">Supabase Vector Store</span>
        </div>
      </div>
    );
  }

  // Customer support or general agent
  return (
    <div className="bg-[#120d11] border border-[rgba(255,204,213,0.12)] rounded-[12px] p-3.5 h-44 flex flex-col justify-between font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-[rgba(245,241,236,0.06)]">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[12px] font-semibold text-text-primary">Autonomous Ticket Resolver</span>
        </div>
        <span className="text-[10px] text-rose font-mono">78% Auto-solved</span>
      </div>
      <div className="grid grid-cols-2 gap-2 my-auto text-center">
        <div className="bg-[rgba(20,16,15,0.8)] p-2 rounded-lg border border-[rgba(245,241,236,0.06)]">
          <div className="text-[10px] text-text-muted">Response Time</div>
          <div className="text-rose font-bold text-sm">1.4s</div>
        </div>
        <div className="bg-[rgba(20,16,15,0.8)] p-2 rounded-lg border border-[rgba(245,241,236,0.06)]">
          <div className="text-[10px] text-text-muted">CSAT Rating</div>
          <div className="text-rose font-bold text-sm">4.8 / 5.0</div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[10px] text-text-muted font-mono">
        <span>Engine: Claude 3.5 Sonnet</span>
        <span className="text-emerald-400">Zero human intervention</span>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;

  return (
    <AnimatedChild animation="scaleIn">
      <GlassCard
        padding="p-0"
        className={`overflow-hidden ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''} h-full`}
      >
        {/* Screenshot / Image area */}
        <div className="p-4 pb-0">
          {project.image ? (
            <div className={`relative overflow-hidden rounded-[12px] ${isFeatured ? 'h-64 md:h-80' : 'h-44'}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[rgba(10,9,8,0.8)] to-transparent" />
            </div>
          ) : (
            <RealisticMockup project={project} />
          )}
        </div>

        {/* Info area */}
        <div className="p-5 pt-3">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`w-2 h-2 rounded-full ${
                project.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
              }`}
            />
            <span className="text-[11px] text-text-muted uppercase tracking-wider">
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-text-primary text-[16px] font-semibold">{project.title}</h3>

          {/* Description */}
          <p className="text-text-muted text-[13px] leading-[1.5] mt-2 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 bg-[rgba(128,15,47,0.15)] border border-[rgba(128,15,47,0.3)] rounded-full text-rose"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* JSON snippet — always visible for featured */}
          {isFeatured && <JsonSnippet snippet={project.jsonSnippet} />}

          {/* Metrics row for featured */}
          {isFeatured && project.metrics && (
            <div className="flex gap-4 mt-3">
              {Object.entries(project.metrics).map(([label, value]) => (
                <div key={label}>
                  <span className="text-rose text-[14px] font-bold">{value}</span>
                  <p className="text-text-muted text-[10px] capitalize">
                    {label.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </GlassCard>
    </AnimatedChild>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <AnimatedSection animation="fadeUp" stagger={0.12}>
        {/* Header */}
        <AnimatedChild>
          <div className="text-center">
            <span className="text-rose text-[12px] font-mono tracking-[0.2em] uppercase">
              Projects
            </span>
            <h2 className="text-text-primary text-[36px] md:text-[48px] font-bold mt-3 leading-[1.1]">
              Featured Work
            </h2>
            <p className="text-text-muted text-[16px] mt-4 max-w-[560px] mx-auto leading-[1.6]">
              Real AI-powered solutions I&apos;ve designed, built, and shipped for businesses — with live n8n workflows, AI agents, and automation pipelines.
            </p>
          </div>
        </AnimatedChild>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {projects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <ProjectCard project={project} index={index} />
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
};

export default Projects;
