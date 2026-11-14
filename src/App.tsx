import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricStrip } from './components/MetricStrip';
import { CorePillars } from './components/CorePillars';
import { BentoGrid } from './components/BentoGrid';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Navbar />
      <main>
        <Hero />
        <MetricStrip />
        <CorePillars />
        <BentoGrid />
        <ProjectsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
