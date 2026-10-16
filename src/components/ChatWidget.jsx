import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiSend, 
  FiMail, 
  FiCheckCircle, 
  FiUser, 
  FiPhone, 
  FiMessageSquare,
  FiExternalLink
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Cute Open 3D Robot Avatar Component
function RobotAvatar({ className = "w-7 h-7" }) {
  return (
    <div className={`relative flex-shrink-0 drop-shadow-[0_2px_8px_rgba(0,180,255,0.25)] ${className}`}>
      <img
        src="/images/robot-cutout.png"
        alt="AI Robot"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// Knowledge base focused on capabilities and fast consultation
const KNOWLEDGE_BASE = {
  contact: `I'd love to connect you directly with Hina! Please fill in your name, email, and phone in the quick form below so she can reach out to you shortly.`,

  services: `Hina Zeeshan specializes in high-impact AI & Automation engineering:
• 🎙️ Voice AI Agents (VAPI, Retell, ElevenLabs) — 24/7 phone receptionists & appointment booking.
• 💬 WhatsApp AI Bots — Lead qualification, customer support, and instant CRM sync (<5s latency).
• ✉️ AI Email Automation — Smart inbox triage, auto-drafting, and lead-to-CRM pipelines.
• ⚡ Workflow Orchestration (n8n, Make, Zapier) — Multi-step data pipelines & webhook automations.
• 🧠 Custom RAG & LLMs (OpenAI, Claude, Supabase pgvector) — Knowledge base search for businesses.`,

  voice: `Hina builds human-like Voice AI calling agents using VAPI, Retell AI, and ElevenLabs:
• Inbound Call Handling: Answers calls, resolves FAQs, and captures lead data.
• Direct Calendar Booking: Integrates with Google Calendar / Calendly in real time.
• CRM Integration: Syncs caller transcript and details straight into your CRM.`,

  whatsapp: `Hina's WhatsApp AI agents transform business communications:
• 24/7 Lead Qualification: Interacts instantly with prospective clients.
• Multilingual & Context-Aware: Powered by OpenAI GPT-4o & Supabase vector databases.
• Instant Alerts: Sends real-time notifications to your team on Slack/WhatsApp for hot leads.`
};

// "Connect with Hina" is the FIRST button!
const SUGGESTED_QUESTIONS = [
  { label: '📩 Connect with Hina', key: 'contact' },
  { label: '🛠️ What services do you offer?', key: 'services' },
  { label: '🎙️ Voice AI Agents', key: 'voice' },
  { label: '💬 WhatsApp AI Bots', key: 'whatsapp' }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I'm Hina's AI Assistant. Hina is an AI Automation & Voice Systems Engineer. How can I help your business automate and scale?",
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Lead Capture Form state
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, showLeadForm, isTyping, isSubmitting]);

  // Handle clicking a quick question chip
  const handleQuickQuestion = (key, label) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: label,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    if (key === 'contact') {
      setShowLeadForm(true);
    }

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: KNOWLEDGE_BASE[key] || KNOWLEDGE_BASE.services,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 500);
  };

  // Process free text input
  const handleSend = (e) => {
    e?.preventDefault();
    const query = inputText.trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "";
      const lower = query.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('budget') || lower.includes('fee')) {
        replyText = `Project pricing is customized based on your workflow needs and required integrations. Please share your details below so Hina can review your project and get back to you with a tailored plan.`;
        setShowLeadForm(true);
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('meet') || lower.includes('email') || lower.includes('reach') || lower.includes('call')) {
        replyText = `Great! Please enter your name, email, and phone below so Hina can reach out to you promptly.`;
        setShowLeadForm(true);
      } else if (lower.includes('voice') || lower.includes('vapi') || lower.includes('phone')) {
        replyText = KNOWLEDGE_BASE.voice;
      } else if (lower.includes('whatsapp') || lower.includes('chat') || lower.includes('messaging')) {
        replyText = KNOWLEDGE_BASE.whatsapp;
      } else if (lower.includes('service') || lower.includes('work') || lower.includes('offer') || lower.includes('n8n')) {
        replyText = KNOWLEDGE_BASE.services;
      } else {
        replyText = `That sounds like an exciting project! Hina can architect and automate this for you.\n\nPlease share your contact details below so Hina can reach out to you shortly to discuss.`;
        setShowLeadForm(true);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  // Handle Form Submission: Sends direct to hqzqureshi@gmail.com in background
  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!leadName.trim() || !leadEmail.trim()) return;

    setIsSubmitting(true);

    const clientData = {
      name: leadName.trim(),
      email: leadEmail.trim(),
      phone: leadPhone.trim() || 'Not provided',
      message: leadMessage.trim() || 'Client interested in AI & Workflow Automation services.',
      _subject: `New Lead from Portfolio AI: ${leadName.trim()}`,
      _template: 'table'
    };

    try {
      await fetch('https://formsubmit.co/ajax/hqzqureshi@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(clientData)
      });
    } catch (err) {
      console.warn('Direct delivery error:', err);
    }

    setIsSubmitting(false);
    setFormSubmitted(true);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'bot',
        text: `🎉 Thank you, ${leadName}! Your message has been sent directly to Hina's inbox (hqzqureshi@gmail.com).\n\nHina will review your requirement and reach out to you shortly via ${leadEmail}${leadPhone ? ` or Phone (${leadPhone})` : ''}!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Floating Round & Small Robot Launcher */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(true)}
          className="relative group w-[54px] h-[54px] min-w-[54px] min-h-[54px] max-w-[54px] max-h-[54px] sm:w-[60px] sm:h-[60px] sm:min-w-[60px] sm:min-h-[60px] rounded-full bg-[#181213] border-2 border-rose/80 hover:border-rose shadow-[0_4px_20px_rgba(128,15,47,0.65)] flex items-center justify-center p-1.5 cursor-pointer transition-all duration-300 overflow-visible"
          aria-label="Ask AI Assistant"
        >
          {/* Inner robot avatar */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full">
            <img
              src="/images/robot-cutout.png"
              alt="Ask AI"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(0,180,255,0.4)] pointer-events-none"
            />
          </div>
          {/* Pulsing online green dot */}
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[#0A0908] animate-ping" />
          <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[#0A0908]" />

          {/* Hover Tooltip: "Ask AI" */}
          <span className="absolute right-full mr-2.5 px-2.5 py-1 rounded-lg bg-[#14100F] border border-rose/40 text-text-primary text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
            Ask AI
          </span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="w-[calc(100vw-32px)] sm:w-[410px] h-[580px] max-h-[82vh] bg-[#14100F] border border-[rgba(255,204,213,0.25)] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header with Open 3D Robot Avatar */}
            <div className="bg-gradient-to-r from-[rgba(128,15,47,0.92)] to-[#1c1214] px-4 py-2.5 border-b border-[rgba(255,204,213,0.18)] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-11 h-12 flex-shrink-0 filter drop-shadow-[0_2px_8px_rgba(0,180,255,0.4)]">
                  <img
                    src="/images/robot-cutout.png"
                    alt="AI Robot"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 ring-1 ring-bg" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-text-primary flex items-center gap-1.5">
                    Hina's AI Assistant
                    <span className="text-[10px] bg-rose/25 text-rose px-1.5 py-0.5 rounded font-mono font-medium">Robot Online</span>
                  </div>
                  <div className="text-[11px] text-text-muted">
                    Instant replies · Direct to Hina's Inbox
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-text-muted hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Close chat"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-[13px] scrollbar-thin scrollbar-thumb-maroon/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <RobotAvatar className="w-7 h-8 mt-0.5" />
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-rose text-bg font-medium rounded-br-xs shadow-md'
                        : 'bg-[#1e1716] border border-[rgba(255,204,213,0.12)] text-text-primary rounded-bl-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <div
                      className={`text-[9.5px] mt-1 text-right ${
                        msg.sender === 'user' ? 'text-bg/70' : 'text-text-muted'
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2.5 justify-start">
                  <RobotAvatar className="w-7 h-8" />
                  <div className="bg-[#1e1716] border border-[rgba(255,204,213,0.1)] rounded-2xl px-3.5 py-2 text-rose flex items-center gap-1.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-rose animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-rose animate-bounce [animation-delay:0.4s]" />
                    <span className="ml-1 text-[11px] text-text-muted">Robot thinking...</span>
                  </div>
                </div>
              )}

              {/* In-Chat Lead Capture Form */}
              {showLeadForm && !formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#1a1314] border border-maroon/60 rounded-2xl p-4 shadow-xl text-text-primary mt-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-rose font-semibold text-[13px]">
                      <FiMail className="w-4 h-4" />
                      <span>Contact Hina Directly</span>
                    </div>
                    <span className="text-[10px] text-text-muted">Direct to hqzqureshi@gmail.com</span>
                  </div>
                  
                  <p className="text-[11.5px] text-text-muted mb-3 leading-snug">
                    Enter your details below — Hina will receive your message in her Gmail inbox and reach out to you shortly!
                  </p>

                  <form onSubmit={handleLeadSubmit} className="space-y-2.5">
                    <div>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-2.5 text-text-muted text-xs" />
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="Your Name *"
                          className="w-full bg-[#0e0b0a] border border-[rgba(255,204,213,0.18)] focus:border-rose rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] text-text-primary placeholder-text-muted/50 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-2.5 text-text-muted text-xs" />
                        <input
                          type="email"
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="Your Gmail / Email Address *"
                          className="w-full bg-[#0e0b0a] border border-[rgba(255,204,213,0.18)] focus:border-rose rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] text-text-primary placeholder-text-muted/50 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-2.5 text-text-muted text-xs" />
                        <input
                          type="tel"
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="Phone Number (Optional)"
                          className="w-full bg-[#0e0b0a] border border-[rgba(255,204,213,0.18)] focus:border-rose rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] text-text-primary placeholder-text-muted/50 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        value={leadMessage}
                        onChange={(e) => setLeadMessage(e.target.value)}
                        placeholder="Tell Hina about your project / requirements..."
                        className="w-full bg-[#0e0b0a] border border-[rgba(255,204,213,0.18)] focus:border-rose rounded-lg px-3 py-1.5 text-[12.5px] text-text-primary placeholder-text-muted/50 focus:outline-none"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-maroon to-[#a6133c] hover:opacity-95 disabled:opacity-50 text-white font-semibold text-[13px] py-2.5 rounded-lg shadow-rose-glow transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending directly to Hina...</span>
                          </>
                        ) : (
                          <>
                            <FiSend className="w-3.5 h-3.5" />
                            <span>Send Message to Hina</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Chips ("Connect with Hina" is FIRST!) */}
            <div className="px-3 py-2 bg-[#120e0d] border-t border-[rgba(255,204,213,0.08)] flex gap-1.5 overflow-x-auto scrollbar-none">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={q.key}
                  onClick={() => handleQuickQuestion(q.key, q.label)}
                  className={`whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full transition-all flex-shrink-0 ${
                    idx === 0 
                      ? 'bg-rose text-bg font-bold border border-rose hover:bg-white' 
                      : 'bg-[rgba(128,15,47,0.2)] hover:bg-[rgba(128,15,47,0.4)] border border-[rgba(255,204,213,0.2)] text-text-primary hover:text-rose font-medium'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-[#171211] border-t border-[rgba(255,204,213,0.08)] flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about services or write project details..."
                className="flex-1 bg-[#0A0908] border border-[rgba(255,204,213,0.15)] focus:border-rose rounded-xl px-3.5 py-2 text-[13px] text-text-primary placeholder-text-muted/60 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-9 h-9 rounded-xl bg-rose text-bg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white flex items-center justify-center transition-all flex-shrink-0"
                aria-label="Send message"
              >
                <FiSend size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
