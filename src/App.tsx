import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GlobalBackground } from './components/GlobalBackground';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <div className="relative min-h-screen bg-[#09090B] text-zinc-100 flex flex-col selection:bg-purple-600/30 selection:text-purple-200 overflow-x-hidden">
      {/* Global Cinematic Video Background - Synchronized with Active Section */}
      <GlobalBackground activeSection={activeSection} />

      {/* Top Navbar with Section Sync */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
