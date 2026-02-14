import React from 'react';
import Hero from './components/Hero';
import WorldSection from './components/WorldSection';
import CharacterGrid from './components/CharacterGrid';
import FooterCTA from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-magi-dark text-slate-200 font-sans selection:bg-magi-accent selection:text-black pb-20 md:pb-0">
      <Hero />
      
      <main className="relative z-20 -mt-20 md:-mt-32 px-4 pb-12 max-w-7xl mx-auto space-y-16">
        <WorldSection />
        <CharacterGrid />
        
        {/* Render CTA within main flow for desktop structure, but handled by FooterCTA component for sticky mobile behavior */}
        <div className="hidden md:block">
           <FooterCTA />
        </div>
      </main>

      {/* Sticky CTA for mobile */}
      <div className="md:hidden">
        <FooterCTA />
      </div>

    </div>
  );
};

export default App;