import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Music, Book, Lightbulb, Sparkles, X } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    year: 'Before Berlin',
    title: 'Casual Listener',
    icon: Music,
    color: '#6b7280',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    description: 'My literacy with music was casual and unstructured. I listened to whatever sounded good without thinking much about meaning or interpretation.',
    details: 'I grew up around diverse genres and was always curious about how different people interpreted the same things differently. This curiosity was present, but not fully developed into a literacy.',
  },
  {
    id: 2,
    year: '2023',
    title: 'Berlin Awakening',
    icon: MapPin,
    color: '#c9a227',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    description: 'A spontaneous trip to Berlin changed everything. Locals spoke about Rammstein with such cultural pride that I sensed the band meant more there than internationally.',
    details: 'When I bought last-minute tickets to their 2023 concert, I entered a space where I couldn\'t rely on language. Without understanding German, I learned to interpret through visuals, performance, tone, and atmosphere.',
  },
  {
    id: 3,
    year: 'Post-Concert',
    title: 'Deep Dive',
    icon: Book,
    color: '#8fbc8f',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    description: 'After the concert, I began studying German lyrics, comparing translations, and researching cultural references. The language barrier forced me to develop new interpretive strategies.',
    details: 'I learned to annotate lyrics, analyze music videos as multimodal texts, and seek context from German speakers. Each constraint became an opportunity to build new literacy tools.',
  },
  {
    id: 4,
    year: 'Semester',
    title: 'Critical Framework',
    icon: Lightbulb,
    color: '#9333ea',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    description: 'This course provided the critical literacy concepts to structure my analysis. I learned about multimodality, framing, context, and how interpretation is constructed.',
    details: 'Course lessons on subjective interpretation, constraints as growth catalysts, and texts as cultural conversations helped me articulate what I\'d been experiencing intuitively.',
  },
  {
    id: 5,
    year: 'Present',
    title: 'Ongoing Journey',
    icon: Sparkles,
    color: '#ec4899',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
    description: 'My literacy continues to evolve as I apply these tools to other German artists and cultural texts. The foundation is now strong, intentional, and informed.',
    details: 'I now approach music as a form of cultural communication, always asking: What context shaped this? What is it trying to say? How do different audiences interpret it?',
  },
];

export default function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">
            The Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            Interactive Timeline
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Click on any point to explore the evolution of my music literacy
          </p>
          <div className="w-16 h-px bg-[#c9a227] mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 hidden md:block" />
          
          {/* Timeline Events */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connecting Line (mobile only) */}
                  {index < timelineEvents.length - 1 && (
                    <div className="md:hidden absolute left-1/2 top-20 w-0.5 h-full bg-white/10 -translate-x-1/2" />
                  )}

                  <div className="flex flex-col items-center text-center relative z-10">
                    {/* Node */}
                    <motion.button
                      onClick={() => setSelectedEvent(event)}
                      onMouseEnter={() => setHoveredId(event.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group mb-4"
                    >
                      {/* Outer Ring */}
                      <motion.div
                        animate={{
                          scale: hoveredId === event.id ? 1.2 : 1,
                          opacity: hoveredId === event.id ? 1 : 0.5,
                        }}
                        className="absolute inset-0 rounded-full border-2 -m-2"
                        style={{ borderColor: event.color }}
                      />
                      
                      {/* Inner Circle */}
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all relative"
                        style={{ backgroundColor: event.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                        
                        {/* Pulse Effect */}
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: event.color }}
                        />
                      </div>
                    </motion.button>

                    {/* Year */}
                    <p className="text-[#c9a227] text-sm font-medium mb-2 tracking-wider">
                      {event.year}
                    </p>
                    
                    {/* Title */}
                    <h3 className="text-white text-base font-light mb-3">
                      {event.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-white/50 text-xs leading-relaxed max-w-[200px]">
                      {event.description.substring(0, 80)}...
                    </p>

                    {/* Click Hint */}
                    <motion.p
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-[#c9a227] text-xs mt-3"
                    >
                      Click to explore
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="bg-[#1a1a2e] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="text-white" size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: selectedEvent.color }}
                  >
                    <selectedEvent.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#c9a227] text-xs tracking-[0.2em] uppercase">
                      {selectedEvent.year}
                    </p>
                    <h3 className="text-2xl font-light text-white">
                      {selectedEvent.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>{selectedEvent.description}</p>
                  <p className="border-l-2 pl-4 italic" style={{ borderColor: selectedEvent.color }}>
                    {selectedEvent.details}
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