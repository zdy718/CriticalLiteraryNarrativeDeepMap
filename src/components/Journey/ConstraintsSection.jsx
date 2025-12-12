import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, ArrowRight } from 'lucide-react';

const constraints = [
  {
    id: 1,
    constraint: 'The German Language Barrier',
    description: 'Not understanding the lyrics naturally limited my ability to interpret meaning directly. Without fluency in German, I couldn\'t grasp wordplay, idioms, or cultural references that native speakers would understand intuitively.',
    tool: 'Translation and Annotation Strategies',
    toolDescription: 'I developed a method of comparing multiple translations, looking up cultural references, and annotating lyrics with context. This approach helped me understand not just what was being said, but why certain words or phrases mattered in German culture.',
  },
  {
    id: 2,
    constraint: 'Cultural Distance',
    description: 'Rammstein frequently references German history, folklore, and social issues unfamiliar to me. This created gaps in understanding that went beyond language—I was missing the cultural literacy needed to interpret their work fully.',
    tool: 'Cultural Research & Community Engagement',
    toolDescription: 'I began studying the band\'s history, interviews, artistic influences, and German cultural references. I also sought context from German speakers and fans who could provide insight that translations couldn\'t capture. This taught me that asking questions is a literacy skill.',
  },
  {
    id: 3,
    constraint: 'Misinterpreting Imagery',
    description: 'Their music videos are intentionally ambiguous or provocative, making misreading easy. Without proper context, I could completely miss satirical elements or misunderstand symbolic choices as literal statements.',
    tool: 'Visual Analysis Skills',
    toolDescription: 'I learned to "read" music videos and live performances as multimodal texts, analyzing color palettes, symbolism, costumes, choreography, and sound-image contrasts. This helped me approach visual media with the same critical lens I\'d use for written texts.',
  },
  {
    id: 4,
    constraint: 'Time Constraints',
    description: 'Balancing schoolwork with deeper research into the band and their cultural context was difficult. Critical literacy requires time for reflection and research, which competed with other academic demands.',
    tool: 'Applying Critical Literacy Concepts',
    toolDescription: 'I started using course concepts like framing, multimodality, and context to structure my analysis more efficiently. Rather than researching randomly, I focused on specific lenses that would yield deeper understanding in less time.',
  },
  {
    id: 5,
    constraint: 'Social Perception',
    description: 'Friends and family not familiar with the genre sometimes dismissed it, creating an external pressure that influenced how openly I engaged with my literacy. The band\'s controversial reputation made some people skeptical of my interest.',
    tool: 'Articulating Value & Building Confidence',
    toolDescription: 'I learned to articulate why this literacy mattered to me and how it connected to broader questions about interpretation, culture, and meaning-making. Developing this vocabulary helped me engage more confidently with skeptics and defend my interpretive choices.',
  },
];

export default function ConstraintsSection() {
  return (
    <section id="constraints" className="py-24 md:py-32 bg-[#1a1a2e] text-white">
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
            The Challenges
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Constraints & Tools
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Every journey has its obstacles. These are the constraints I faced 
            and the tools I developed to overcome them.
          </p>
          <div className="w-16 h-px bg-[#c9a227] mx-auto mt-8" />
        </motion.div>

        {/* Constraints Timeline */}
        <div className="space-y-12">
          {constraints.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              {/* Constraint */}
              <div className="bg-white/5 p-8 rounded-sm border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Shield className="text-red-400" size={20} />
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase text-white/40">
                    Constraint
                  </span>
                </div>
                <h3 className="text-xl font-light mb-3 text-white">
                  {item.constraint}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow (hidden on mobile) */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                <ArrowRight className="text-[#c9a227]" size={24} />
              </div>

              {/* Tool */}
              <div className="bg-[#c9a227]/10 p-8 rounded-sm border border-[#c9a227]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#c9a227]/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="text-[#c9a227]" size={20} />
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#c9a227]">
                    Tool Developed
                  </span>
                </div>
                <h3 className="text-xl font-light mb-3 text-white">
                  {item.tool}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.toolDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm mt-16 italic"
        >
          Content from Critical Literacy Narrative Three: Constraints and Tools
        </motion.p>
      </div>
    </section>
  );
}