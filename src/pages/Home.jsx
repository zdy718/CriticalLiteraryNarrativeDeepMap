import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/Journey/HeroSection';
import AboutSection from '@/components/Journey/AboutSection';
import InteractiveTimeline from '@/components/Journey/InteractiveTimeline';
import BerlinMap from '@/components/Journey/BerlinMap';
import ArtifactsSection from '@/components/Journey/ArtifactsSection';
import JourneyDiagram from '@/components/Journey/JourneyDiagram';
import ConstraintsSection from '@/components/Journey/ConstraintsSection';
import LessonsSection from '@/components/Journey/LessonsSection';
import RammsteinGallery from '@/components/Journey/RammsteinGallery';
import Navigation from '@/components/Journey/Navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'artifacts', 'constraints', 'lessons'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#faf8f5] min-h-screen">
      <Navigation activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <InteractiveTimeline />
        <BerlinMap />
        <ArtifactsSection />
        <JourneyDiagram />
        <ConstraintsSection />
        <RammsteinGallery />
        <LessonsSection />
        
        {/* Footer */}
        <footer className="bg-[#1a1a2e] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">
                Unit Three Major Project
              </p>
              <h2 className="text-2xl md:text-3xl font-light mb-6">
                Critical Literacy Narrative Deep Map
              </h2>
              <p className="text-gray-400 text-sm">
                A journey through words, growth, and discovery
              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </div>
  );
}