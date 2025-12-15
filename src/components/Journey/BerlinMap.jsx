import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Music2, Book, Users, Camera, X } from 'lucide-react';

const mapLocations = [
  {
    id: 1,
    name: 'Brandenburg Gate',
    icon: MapPin,
    x: 48,
    y: 42,
    category: 'Arrival',
    image: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80',
    description: 'My first impression of Berlin. The historical weight of the city was immediately apparent.',
    significance: 'This landmark symbolized the cultural depth I was about to encounter, a city where history, art, and identity are deeply intertwined.',
  },
  {
    id: 2,
    name: 'Local Café Conversation',
    icon: Users,
    x: 35,
    y: 55,
    category: 'Cultural Discovery',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    description: 'Locals spoke about Rammstein with such pride and familiarity. I realized the band represented something deeper than just music here.',
    significance: 'This conversation sparked my decision to attend the concert. It revealed how music literacy is tied to cultural identity and local context.',
  },
  {
    id: 3,
    name: 'Olympiastadion',
    icon: Music2,
    x: 25,
    y: 35,
    category: 'The Concert',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
    description: 'The venue where everything changed. A massive stadium filled with 60,000+ fans, pyrotechnics, and a language I couldn\'t understand.',
    significance: 'This is where I shifted from passive listener to active interpreter. Without language, I learned to read performance as text.',
  },
  {
    id: 4,
    name: 'Record Store Deep Dive',
    icon: Book,
    x: 58,
    y: 60,
    category: 'Research Begins',
    image: 'https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?w=800&q=80',
    description: 'Post-concert, I sought out a Berlin record store to buy Rammstein albums and dive deeper into their discography.',
    significance: 'This marked the transition from spontaneous experience to intentional study. I began collecting artifacts and building my literacy systematically.',
  },
  {
    id: 5,
    name: 'East Side Gallery',
    icon: Camera,
    x: 70,
    y: 48,
    category: 'Cultural Context',
    image: 'https://images.unsplash.com/photo-1587893904933-0a7bb8107d87?w=800&q=80',
    description: 'The remnants of the Berlin Wall covered in art. This helped me understand the historical context that shapes German identity and Rammstein\'s themes.',
    significance: 'Seeing how Germans engage with their complex history through art clarified why Rammstein\'s provocative imagery matters in cultural conversations.',
  },
];

export default function BerlinMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a1a2e]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">
            Geographic Context
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a1a2e] mb-6">
            Berlin Journey Map
          </h2>
          <p className="text-[#1a1a2e]/60 max-w-2xl mx-auto">
            The physical places in Berlin where my music literacy developed
          </p>
          <div className="w-16 h-px bg-[#1a1a2e]/20 mx-auto mt-8" />
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Map Background */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-[#e8e3d9] to-[#d4cfc4] rounded-lg shadow-2xl overflow-hidden border-4 border-[#1a1a2e]/10">
            {/* Berlin Street Pattern (Simplified) */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
              <line x1="10" y1="30" x2="90" y2="30" stroke="#1a1a2e" strokeWidth="0.5" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="#1a1a2e" strokeWidth="0.8" />
              <line x1="10" y1="70" x2="90" y2="70" stroke="#1a1a2e" strokeWidth="0.5" />
              <line x1="30" y1="10" x2="30" y2="90" stroke="#1a1a2e" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="#1a1a2e" strokeWidth="0.8" />
              <line x1="70" y1="10" x2="70" y2="90" stroke="#1a1a2e" strokeWidth="0.5" />
            </svg>

            {/* Map Label */}
            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded shadow-sm">
              <p className="text-[#1a1a2e] font-light text-sm tracking-wider">Berlin, Germany</p>
              <p className="text-[#1a1a2e]/50 text-xs">2023</p>
            </div>

            {/* Location Markers */}
            {mapLocations.map((location, index) => {
              const Icon = location.icon;
              const isHovered = hoveredId === location.id;
              
              return (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="absolute cursor-pointer"
                  style={{ 
                    left: `${location.x}%`, 
                    top: `${location.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredId(location.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedLocation(location)}
                >
                  {/* Ripple Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 -m-8 rounded-full bg-[#c9a227]"
                  />

                  {/* Pin */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.2 : 1,
                      y: isHovered ? -5 : 0,
                    }}
                    className="relative"
                  >
                    <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#1a1a2e] rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white text-xs font-medium">{index + 1}</span>
                    </div>
                  </motion.div>

                  {/* Label (appears on hover) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                      >
                        <div className="bg-[#1a1a2e] text-white px-3 py-2 rounded shadow-xl text-sm">
                          <p className="font-medium">{location.name}</p>
                          <p className="text-[#c9a227] text-xs">{location.category}</p>
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a2e] rotate-45" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Journey Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <motion.path
                d={`M ${mapLocations[0].x} ${mapLocations[0].y} 
                   Q 40 48 ${mapLocations[1].x} ${mapLocations[1].y}
                   Q 30 45 ${mapLocations[2].x} ${mapLocations[2].y}
                   Q 40 55 ${mapLocations[3].x} ${mapLocations[3].y}
                   Q 65 54 ${mapLocations[4].x} ${mapLocations[4].y}`}
                fill="none"
                stroke="#c9a227"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            {['Arrival', 'Cultural Discovery', 'The Concert', 'Research Begins', 'Cultural Context'].map((category, idx) => (
              <div key={category} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#c9a227] rounded-full flex items-center justify-center text-white text-xs font-medium">
                  {idx + 1}
                </div>
                <span className="text-[#1a1a2e]/70">{category}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Location Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedLocation(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 bg-[#c9a227] text-white px-4 py-2 rounded text-sm font-medium">
                  {selectedLocation.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center">
                    <selectedLocation.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-[#1a1a2e]">
                    {selectedLocation.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#1a1a2e]/50 uppercase tracking-wider mb-2">Experience</p>
                    <p className="text-[#1a1a2e]/80 leading-relaxed">
                      {selectedLocation.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-[#1a1a2e]/50 uppercase tracking-wider mb-2">Significance</p>
                    <p className="text-[#1a1a2e]/80 leading-relaxed border-l-2 border-[#c9a227] pl-4 italic">
                      {selectedLocation.significance}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}