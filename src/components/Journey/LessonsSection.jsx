import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const lessons = [
  {
    id: 1,
    number: '01',
    title: 'Interpretation Is Subjective',
    description: 'Just as people argue about whether a tomato is a fruit or a vegetable, people interpret music differently. Meaning is constructed, not absolute. There is no single "correct" reading of a text—whether it\'s a song, a performance, or a piece of visual art.',
    connection: 'This lesson fundamentally changed how I approach Rammstein\'s work. Rather than searching for the "right" interpretation, I now focus on building well-supported readings that acknowledge multiple perspectives. The tomato debate became my framework for understanding that classification systems and interpretive lenses shape what we see.',
  },
  {
    id: 2,
    number: '02',
    title: 'Literacy Is Multimodal',
    description: 'Understanding music required reading language, visuals, sound, and cultural signals simultaneously. Texts don\'t exist in isolation—they combine words, images, sounds, gestures, and contexts to create meaning.',
    connection: 'My inability to rely solely on lyrics forced me to develop multimodal literacy. I had to interpret tone, performance, visual symbolism, and audience reaction all at once. This taught me that literacy is never just about one mode of communication—it\'s about synthesizing multiple forms of meaning-making.',
  },
  {
    id: 3,
    number: '03',
    title: 'Constraints Encourage Growth',
    description: 'My limitations—especially the language barrier—forced me to develop new strategies and approaches. Rather than being obstacles that stopped my learning, constraints became catalysts for deeper engagement.',
    connection: 'Not understanding German pushed me to build interpretive tools I wouldn\'t have needed otherwise. Translation strategies, cultural research, visual analysis, and community engagement all emerged from navigating limitations. This reframed constraints as generative rather than purely restrictive.',
  },
  {
    id: 4,
    number: '04',
    title: 'Context Shapes Meaning',
    description: 'Rammstein\'s music cannot be understood fully without understanding Germany\'s cultural, political, and artistic landscape. Texts are embedded in specific moments, places, and communities that influence how they\'re produced and received.',
    connection: 'Experiencing Rammstein in Berlin versus listening at home revealed how profoundly context shapes interpretation. The same song meant different things depending on where I was, who I was with, and what I knew about its historical and cultural background. This taught me that literacy always involves situating texts within their contexts.',
  },
  {
    id: 5,
    number: '05',
    title: 'Art Always Communicates Something',
    description: 'Even when misunderstood or controversial, art participates in ongoing conversations about identity, culture, and society. Texts are never neutral—they always make claims, take positions, and invite responses.',
    connection: 'Rammstein\'s provocative imagery isn\'t random shock value—it\'s deliberate commentary on history, politics, and human behavior. Learning to ask "What is this trying to say?" and "What conversation is this part of?" helped me see music as rhetorical. Every artistic choice communicates intention, whether or not audiences agree with or understand it.',
  },
];

export default function LessonsSection() {
  return (
    <section id="lessons" className="py-24 md:py-32 bg-[#faf8f5]">
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
            Reflections
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a1a2e] mb-6">
            Lessons Learned
          </h2>
          <p className="text-[#1a1a2e]/60 max-w-2xl mx-auto">
            Throughout this semester, I've gained insights that have transformed 
            my understanding of literacy and myself.
          </p>
          <div className="w-16 h-px bg-[#1a1a2e]/20 mx-auto mt-8" />
        </motion.div>

        {/* Lessons Grid */}
        <div className="space-y-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-[#1a1a2e]/5">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-light text-[#c9a227]/30 group-hover:text-[#c9a227]/50 transition-colors">
                      {lesson.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="text-[#c9a227]" size={20} />
                      <h3 className="text-xl md:text-2xl font-light text-[#1a1a2e]">
                        {lesson.title}
                      </h3>
                    </div>
                    <p className="text-[#1a1a2e]/70 leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="border-l-2 border-[#8fbc8f] pl-4 bg-[#8fbc8f]/5 py-3 pr-4 rounded-r-sm">
                      <p className="text-sm text-[#1a1a2e]/60 italic">
                        <span className="font-medium text-[#8fbc8f]">Connection: </span>
                        {lesson.connection}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-[#1a1a2e]/50 text-sm mt-16 italic"
        >
          Content from Critical Literacy Narrative Four: Semester Reflections
        </motion.p>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-[#1a1a2e] p-10 md:p-12 rounded-sm">
            <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-6">
              Final Reflection
            </p>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed italic">
              "My deep map illustrates a literacy shaped by travel, culture, constraint, and curiosity. 
              What began as a spontaneous concert in Berlin evolved into a meaningful skill: the ability 
              to interpret music critically and contextually. This literacy continues to grow as I explore 
              more German music, engage more deeply with cultural analysis, and apply critical literacy 
              concepts to other forms of art. The journey is ongoing, but its foundation is now strong, 
              intentional, and informed by the tools and lessons I've developed throughout this course."
            </p>
            <div className="w-12 h-px bg-[#c9a227] mx-auto mt-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}