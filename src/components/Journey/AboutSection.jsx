import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#faf8f5]">
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
            Introduction
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a1a2e] mb-6">
            Exploring Music & Cultural Literacy
          </h2>
          <div className="w-16 h-px bg-[#1a1a2e]/20 mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#1a1a2e]/5 rounded-sm overflow-hidden">
              <img
                src="/images/rammsteinmembers.jpg"
                alt="Concert and live music"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a227]/10 rounded-sm -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 bg-white rounded-sm shadow-sm">
              <Quote className="text-[#c9a227] flex-shrink-0 mt-1" size={24} />
              <p className="text-[#1a1a2e]/70 italic text-lg leading-relaxed">
                "Without understanding the literal meaning of the words, I found myself interpreting 
                through visuals, performance, tone, audience reaction, rhythm, and atmosphere."
              </p>
            </div>

            <div className="space-y-4 text-[#1a1a2e]/80 leading-relaxed">
              <p>
                Before Berlin, my literacy with music was casual and unstructured. I listened to 
                whatever sounded good without thinking much about meaning or interpretation. I did 
                not approach music as a text with themes, perspectives, or rhetorical choices.
              </p>
              
              <p>
                However, my earlier experiences still laid the groundwork,I grew up around diverse 
                genres and was always curious about how different people interpreted the same things 
                differently. This curiosity was present, but not fully developed into a literacy.
              </p>

              <p>
                The Berlin experience became the moment when my prior interest transformed into 
                intentional, critical engagement with music. A spontaneous decision to attend a 
                Rammstein concert, encouraged by Berlin locals, sparked a literacy journey that 
                connects language, culture, performance, and interpretation.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-[#1a1a2e]/50 tracking-wider uppercase">
                The Literacy I'm Exploring:
              </p>
              <p className="text-2xl font-light text-[#1a1a2e] mt-2">
                Music as Cultural Communication
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}