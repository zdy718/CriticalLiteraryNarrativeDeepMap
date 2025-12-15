import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const sampleArtifacts = [
  {
    id: 1,
    title: 'Berlin Concert Ticket',
    category: 'Origin Point',
    image: '/images/rammsteintickets.jpg',
    description: 'The physical concert ticket symbolizes the origin point of my literacy. It represents my first exposure to Rammstein not as a playlist recommendation or a random discovery on YouTube, but as a live cultural phenomenon.',
    connection: 'In Berlin, the band\'s significance was shaped by context, history, language, and identity. This artifact connects directly to the idea that literacy is not only about skills but about environment and access. The concert ticket marks the moment I shifted from passive listener to active interpreter.'
  },
  {
    id: 2,
    title: 'German Lyrics & Translation',
    category: 'Linguistic Challenge',
    image: '/images/duolingo.png',
    description: 'One of the biggest challenges came from trying to understand Rammstein\'s German lyrics. At first, I relied heavily on online translations, but quickly realized that literal translations often miss tone, cultural references, or intentional ambiguity.',
    connection: 'This struggle helped me develop new tools for navigating unfamiliar texts. I learned to compare multiple translations, annotate lines that confused me, and research idioms or historical references. This artifact represents the linguistic dimension of my literacy, the point where I learned that music literacy is also language literacy.'
  },
  {
    id: 3,
    title: 'The Tomato Debate Video',
    category: 'Interpretive Framework',
    image: '/images/tomato.jpg',
    description: 'The tomato fruit or vegetable video became a metaphor for interpretation disagreement. The debate is silly on the surface, but it illustrates a core truth about literacy: people construct meaning differently based on context, authority, and personal experience.',
    connection: 'This artifact helped me realize that music is the same way. Some people classify Rammstein as noise; others see them as high art. Some interpret their imagery literally; others see layers of satire and commentary. This strengthened my understanding that literacy involves navigating multiple, often conflicting interpretations.'
  },
  {
    id: 4,
    title: 'Music Video Imagery',
    category: 'Multimodal Analysis',
    image: '/images/rammsteinweimar.png',
    description: 'Rammstein\'s music videos functioned as a major interpretive tool in my literacy development. Because I could not rely on lyrics alone, I turned to visuals, color palettes, symbolism, costumes, choreography, sound-image contrast, and emotional tone.',
    connection: 'Music videos allowed me to analyze storytelling without words and helped connect themes across multiple modes. This artifact highlights the multimodal nature of literacy. Understanding music is not just about listening; it involves reading images, understanding context, and recognizing artistic intention.'
  },
];

export default function ArtifactsSection() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  return (
    <section id="artifacts" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">
            The Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a1a2e] mb-6">
            Literacy Artifacts
          </h2>
          <p className="text-[#1a1a2e]/60 max-w-2xl mx-auto">
            These artifacts represent key moments, influences, and touchstones 
            in my literacy journey. Each one tells a part of my story.
          </p>
          <div className="w-16 h-px bg-[#1a1a2e]/20 mx-auto mt-8" />
        </motion.div>

        {/* Artifacts Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {sampleArtifacts.map((artifact, index) => (
            <motion.div
              key={artifact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArtifact(artifact)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a2e]/5 mb-4">
                <img
                  src={artifact.image}
                  alt={artifact.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a1a2e]/0 group-hover:bg-[#1a1a2e]/30 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
              <p className="text-[#c9a227] text-xs tracking-[0.2em] uppercase mb-2">
                {artifact.category}
              </p>
              <h3 className="text-lg font-light text-[#1a1a2e] group-hover:text-[#c9a227] transition-colors">
                {artifact.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-[#1a1a2e]/50 text-sm mt-12 italic"
        >
          Content from Critical Literacy Narrative Two: Annotated Bibliography
        </motion.p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1a1a2e]/90 flex items-center justify-center p-4"
            onClick={() => setSelectedArtifact(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedArtifact.image}
                  alt={selectedArtifact.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <p className="text-[#c9a227] text-xs tracking-[0.2em] uppercase mb-2">
                  {selectedArtifact.category}
                </p>
                <h3 className="text-2xl font-light text-[#1a1a2e] mb-6">
                  {selectedArtifact.title}
                </h3>
                <div className="space-y-4 text-[#1a1a2e]/70 leading-relaxed">
                  <p>{selectedArtifact.description}</p>
                  <p className="border-l-2 border-[#c9a227] pl-4 italic">
                    {selectedArtifact.connection}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}