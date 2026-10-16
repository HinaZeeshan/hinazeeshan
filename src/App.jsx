import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechBanner from './components/TechBanner';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/ui/CursorGlow';
import FloatingParticles from './components/ui/FloatingParticles';
import GeometricPlexus from './components/ui/GeometricPlexus';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text-primary">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Cursor-following glow */}
      <CursorGlow />

      {/* Futuristic Geometric Constellation Network (MetaLogics-style mesh) */}
      <GeometricPlexus />

      {/* Floating particles background */}
      <FloatingParticles count={12} />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <TechBanner />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Chatbot Widget */}
      <ChatWidget />
    </div>
  );
}
