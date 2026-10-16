import SectionWrapper from './ui/SectionWrapper';

const techs = [
  'OpenAI',
  'n8n',
  'VAPI',
  'Supabase',
  'ElevenLabs',
  'LangChain',
  'Qdrant',
  'Pinecone',
  'Zapier',
  'Make',
  'Retool',
  'Appsmith',
  'Airtable',
  'Claude',
  'Gemini',
  'WhatsApp API',
  'PostgreSQL',
  'Redis',
];

const TechItem = ({ name }) => (
  <>
    <span className="inline-flex items-center gap-2 px-6 py-3 text-text-primary text-[15px] font-medium opacity-60 whitespace-nowrap">
      {name}
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-rose opacity-40 mx-4 shrink-0" />
  </>
);

export default function TechBanner() {
  return (
    <section id="techbanner" className="border-y border-[rgba(245,241,236,0.08)] py-10 md:py-14 bg-[#0A0908]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-6">
        <p className="eyebrow text-center">AI &amp; AUTOMATION ECOSYSTEM</p>
      </div>

      {/* Marquee container */}
      <div className="overflow-hidden relative">
        {/* Left fade mask */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />

        {/* Right fade mask */}
        <div className="absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling row — techs rendered twice for seamless loop */}
        <div className="flex items-center animate-marquee">
          {techs.map((t) => (
            <TechItem key={`a-${t}`} name={t} />
          ))}
          {techs.map((t) => (
            <TechItem key={`b-${t}`} name={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
