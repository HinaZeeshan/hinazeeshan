import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck, FiCode, FiArrowRight } from 'react-icons/fi';
import Button from './ui/Button';
import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection, { AnimatedChild } from './ui/AnimatedSection';

const codeSnippets = {
  cURL: `curl -X POST https://api.hinazeeshan.com/v1/generate \\
  -H "Authorization: Bearer hz_live_sk_8f929a" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "hina-pro",
    "prompt": "Explain the future of AI in one sentence."
  }'`,
  Python: `import requests

url = "https://api.hinazeeshan.com/v1/generate"
headers = {
    "Authorization": "Bearer hz_live_sk_8f929a",
    "Content-Type": "application/json"
}
payload = {
    "model": "hina-pro",
    "prompt": "Explain the future of AI in one sentence."
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
  JavaScript: `const response = await fetch("https://api.hinazeeshan.com/v1/generate", {
  method: "POST",
  headers: {
    "Authorization": "Bearer hz_live_sk_8f929a",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "hina-pro",
    prompt: "Explain the future of AI in one sentence."
  })
});

const data = await response.json();
console.log(data);`,
  REST: `POST /v1/generate HTTP/1.1
Host: api.hinazeeshan.com
Authorization: Bearer hz_live_sk_8f929a
Content-Type: application/json

{
  "model": "hina-pro",
  "prompt": "Explain the future of AI in one sentence."
}`,
};

export default function CtaBanner() {
  const [activeTab, setActiveTab] = useState('cURL');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="cta-banner" className="py-8 md:py-16">
      <AnimatedSection animation="fadeUp">
        <div className="relative rounded-[24px] bg-[#14100F] border border-[rgba(128,15,47,0.6)] p-8 md:p-12 lg:p-14 overflow-hidden shadow-[0_0_80px_rgba(128,15,47,0.2)]">
          {/* Maroon radial glow blob behind */}
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(128,15,47,0.35)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(128,15,47,0.25)_0%,transparent_70%)] blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="eyebrow text-rose">DEVELOPER-FIRST AI INFRASTRUCTURE</span>
              <h2 className="text-[32px] md:text-[42px] lg:text-[46px] font-bold text-text-primary leading-[1.12] mt-4">
                The Future is Intelligent.{' '}
                <span className="gradient-text">Build With Hina Zeeshan.</span>
              </h2>
              <p className="text-text-muted text-[16px] md:text-[17px] leading-[1.6] mt-4">
                Deploy robust autonomous systems, custom LLM pipelines, and automated business workflows that scale with zero latency.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="primary" href="#contact">
                  Start Building Now <FiArrowRight className="inline ml-1" />
                </Button>
                <Button variant="secondary" href="#contact">
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* Right: Code Window */}
            <div className="lg:col-span-6">
              <div className="rounded-[16px] overflow-hidden border border-[rgba(245,241,236,0.1)] bg-[#0A0908] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                {/* Code Window Header / Tabs */}
                <div className="bg-[#1A1514] px-4 py-3 flex items-center justify-between border-b border-[rgba(245,241,236,0.08)]">
                  {/* Window dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[rgba(245,241,236,0.2)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[rgba(245,241,236,0.2)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[rgba(245,241,236,0.2)]" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    {Object.keys(codeSnippets).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 text-[12px] font-mono transition-colors relative ${
                          activeTab === tab
                            ? 'text-[#FFCCD5] font-semibold'
                            : 'text-[#9A9490] hover:text-text-primary'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <motion.div
                            layoutId="activeTabUnderline"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFCCD5]"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded text-text-muted hover:text-rose transition-colors"
                    title="Copy code"
                  >
                    {copied ? <FiCheck className="text-green-400 w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Code Window Body */}
                <div className="p-4 sm:p-5 relative font-mono text-[12px] sm:text-[13px] leading-[1.6] overflow-x-auto text-text-primary">
                  <pre className="text-text-primary">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>

                  {/* Code icon button in bottom right */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-[8px] bg-[rgba(128,15,47,0.3)] border border-[rgba(128,15,47,0.6)] flex items-center justify-center text-rose pointer-events-none">
                    <FiCode className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
