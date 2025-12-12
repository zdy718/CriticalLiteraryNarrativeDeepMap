import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const diagramNodes = [
  {
    id: 'start',
    label: 'Casual Listening',
    x: 50,
    y: 10,
    color: '#6b7280',
    description: 'Unstructured engagement with music',
  },
  {
    id: 'berlin',
    label: 'Berlin Experience',
    x: 50,
    y: 30,
    color: '#c9a227',
    description: 'Spontaneous concert attendance',
    isKey: true,
  },
  {
    id: 'language',
    label: 'Language Barrier',
    x: 25,
    y: 50,
    color: '#ef4444',
    description: 'Constraint: German lyrics',
  },
  {
    id: 'cultural',
    label: 'Cultural Distance',
    x: 50,
    y: 50,
    color: '#ef4444',
    description: 'Constraint: Historical context',
  },
  {
    id: 'visual',
    label: 'Visual Ambiguity',
    x: 75,
    y: 50,
    color: '#ef4444',
    description: 'Constraint: Provocative imagery',
  },
  {
    id: 'translation',
    label: 'Translation Tools',
    x: 25,
    y: 70,
    color: '#8fbc8f',
    description: 'Tool: Annotation & comparison',
  },
  {
    id: 'research',
    label: 'Cultural Research',
    x: 50,
    y: 70,
    color: '#8fbc8f',
    description: 'Tool: Context seeking',
  },
  {
    id: 'multimodal',
    label: 'Visual Analysis',
    x: 75,
    y: 70,
    color: '#8fbc8f',
    description: 'Tool: Multimodal reading',
  },
  {
    id: 'literacy',
    label: 'Music Literacy',
    x: 50,
    y: 90,
    color: '#9333ea',
    description: 'Critical interpretation skills',
    isKey: true,
  },
];

const connections = [
  { from: 'start', to: 'berlin' },
  { from: 'berlin', to: 'language' },
  { from: 'berlin', to: 'cultural' },
  { from: 'berlin', to: 'visual' },
  { from: 'language', to: 'translation' },
  { from: 'cultural', to: 'research' },
  { from: 'visual', to: 'multimodal' },
  { from: 'translation', to: 'literacy' },
  { from: 'research', to: 'literacy' },
  { from: 'multimodal', to: 'literacy' },
];

export default function JourneyDiagram() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const getNodePosition = (node) => ({
    left: `${node.x}%`,
    top: `${node.y}%`,
  });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#faf8f5] to-white">
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
            Visual Framework
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#1a1a2e] mb-6">
            Literacy Development Diagram
          </h2>
          <p className="text-[#1a1a2e]/60 max-w-2xl mx-auto">
            How constraints transformed into tools and literacy
          </p>
          <div className="w-16 h-px bg-[#1a1a2e]/20 mx-auto mt-8" />
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[600px] bg-white rounded-lg shadow-xl border border-[#1a1a2e]/5 p-8"
        >
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {connections.map((conn, idx) => {
              const fromNode = diagramNodes.find(n => n.id === conn.from);
              const toNode = diagramNodes.find(n => n.id === conn.to);
              
              return (
                <motion.line
                  key={`${conn.from}-${conn.to}`}
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke="#1a1a2e"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {diagramNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="absolute"
              style={{
                ...getNodePosition(node),
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredNode === node.id ? 20 : 10,
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Node Circle */}
              <motion.div
                animate={{
                  scale: hoveredNode === node.id ? 1.1 : 1,
                }}
                className="relative"
              >
                {/* Glow effect for key nodes */}
                {node.isKey && (
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full -m-4"
                    style={{ backgroundColor: node.color }}
                  />
                )}

                <div
                  className={`${node.isKey ? 'w-24 h-24' : 'w-20 h-20'} rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-all cursor-pointer`}
                  style={{ backgroundColor: node.color }}
                >
                  <Circle className="text-white" size={node.isKey ? 32 : 24} />
                </div>
              </motion.div>

              {/* Label */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-center w-32">
                <p className={`${node.isKey ? 'font-medium text-base' : 'text-sm'} text-[#1a1a2e] leading-tight`}>
                  {node.label}
                </p>
                
                {/* Description on hover */}
                {hoveredNode === node.id && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-[#1a1a2e]/60 mt-2 italic"
                  >
                    {node.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-4 text-xs">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded shadow-sm">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#c9a227' }} />
              <span className="text-[#1a1a2e]/70">Key Moment</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded shadow-sm">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#ef4444' }} />
              <span className="text-[#1a1a2e]/70">Constraint</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded shadow-sm">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#8fbc8f' }} />
              <span className="text-[#1a1a2e]/70">Tool Developed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded shadow-sm">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#9333ea' }} />
              <span className="text-[#1a1a2e]/70">Outcome</span>
            </div>
          </div>
        </motion.div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-[#1a1a2e]/70 leading-relaxed">
            This diagram visualizes how a <span className="text-[#c9a227] font-medium">single transformative experience</span> led 
            to multiple <span className="text-red-500 font-medium">constraints</span>, which in turn motivated the development 
            of specific <span className="text-[#8fbc8f] font-medium">literacy tools</span>, ultimately resulting in 
            a comprehensive <span className="text-purple-600 font-medium">music literacy</span>. Hover over each node to learn more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}