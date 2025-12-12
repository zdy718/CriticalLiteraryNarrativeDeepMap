import React from 'react';
import { motion } from 'framer-motion';
import { 
  Music, 
  MapPin, 
  Languages, 
  Globe, 
  Eye, 
  BookOpen, 
  Search, 
  ScanEye, 
  Sparkles 
} from 'lucide-react';

const processNodes = {
  start: {
    title: "Casual Listening",
    icon: Music,
    color: "bg-slate-100 text-slate-600 border-slate-200",
    description: "Unstructured engagement with music."
  },
  trigger: {
    title: "Berlin Experience",
    icon: MapPin,
    color: "bg-[#e8e3d9] text-[#c9a227] border-[#c9a227]/30",
    description: "The spark: Spontaneous concert attendance."
  },
  outcome: {
    title: "Music Literacy",
    icon: Sparkles,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    description: "Critical interpretation skills & cultural awareness."
  }
};

const transformations = [
  {
    id: 'lang',
    constraint: { title: "Language Barrier", icon: Languages },
    tool: { title: "Translation Tools", icon: BookOpen },
    accent: "red"
  },
  {
    id: 'cult',
    constraint: { title: "Cultural Distance", icon: Globe },
    tool: { title: "Cultural Research", icon: Search },
    accent: "orange"
  },
  {
    id: 'vis',
    constraint: { title: "Visual Ambiguity", icon: Eye },
    tool: { title: "Visual Analysis", icon: ScanEye },
    accent: "blue"
  }
];

export default function JourneyDiagram() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a227] text-sm tracking-[0.3em] uppercase mb-4">The Framework</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e]">Literacy Development Model</h2>
          <p className="text-[#1a1a2e]/60 mt-4 max-w-2xl mx-auto">
            How constraints transformed into tools and literacy
          </p>
        </motion.div>

        {/* Diagram Layout */}
        <div className="flex flex-col items-center relative z-10">
            
            {/* 1. TOP SECTION (Start -> Berlin) */}
            <div className="flex flex-col items-center">
              <NodeCard node={processNodes.start} />
              
              {/* Vertical Line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 64 }}
                transition={{ duration: 1 }}
                className="w-0.5 bg-slate-200"
              />
              
              <NodeCard node={processNodes.trigger} isKey={true} />
            </div>

            {/* CONNECTOR 1: Branching Curves (Hidden on mobile) */}
            <div className="w-full max-w-5xl h-24 relative hidden md:block">
               {/* viewBox="0 0 300 100" maps to the 3 columns:
                  - Left Column Center: x = 50
                  - Middle Column Center: x = 150
                  - Right Column Center: x = 250
                  - Start Point (Berlin): x = 150
               */}
               <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                 {/* Left Curve: 150 -> 50 */}
                 <motion.path 
                   d="M 150 0 C 150 50, 50 50, 50 100"
                   fill="none" stroke="#e2e8f0" strokeWidth="2"
                   initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                 />
                 {/* Center Line: 150 -> 150 */}
                 <motion.path 
                   d="M 150 0 L 150 100"
                   fill="none" stroke="#e2e8f0" strokeWidth="2"
                   initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                 />
                 {/* Right Curve: 150 -> 250 */}
                 <motion.path 
                   d="M 150 0 C 150 50, 250 50, 250 100"
                   fill="none" stroke="#e2e8f0" strokeWidth="2"
                   initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                 />
               </svg>
            </div>
            {/* Mobile-only connector */}
            <div className="h-12 w-0.5 bg-slate-200 md:hidden" />

            {/* 2. MIDDLE SECTION (The 3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full max-w-5xl">
              {transformations.map((t, idx) => (
                <div key={t.id} className="flex flex-col items-center relative">
                  
                  {/* Constraint Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-sm bg-white border border-red-100 p-6 rounded-xl shadow-sm text-center relative group hover:shadow-md transition-shadow z-20"
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3 text-red-500 group-hover:scale-110 transition-transform">
                      <t.constraint.icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-red-400 mb-1 block">Constraint</span>
                    <h3 className="text-slate-800 font-medium">{t.constraint.title}</h3>
                  </motion.div>

                  {/* Arrow Down */}
                  <div className="h-12 flex items-center justify-center text-slate-300">
                    ↓
                  </div>

                  {/* Tool Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx * 0.2) + 0.2 }}
                    viewport={{ once: true }}
                    className="w-full max-w-sm bg-slate-50 border border-green-100 p-6 rounded-xl shadow-sm text-center relative group hover:shadow-md transition-shadow z-20"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600 group-hover:scale-110 transition-transform">
                      <t.tool.icon size={20} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-green-600 mb-1 block">Tool Developed</span>
                    <h3 className="text-slate-800 font-medium">{t.tool.title}</h3>
                  </motion.div>

                </div>
              ))}
            </div>

            {/* CONNECTOR 2: Merging Curves (Hidden on mobile) */}
            <div className="w-full max-w-5xl h-24 relative hidden md:block">
               {/* Merging 50, 150, 250 back to center 150
               */}
               <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                 {/* Left Merge: 50 -> 150 */}
                 <motion.path 
                   d="M 50 0 C 50 50, 150 50, 150 100"
                   fill="none" stroke="#e2e8f0" strokeWidth="2"
                   initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                 />
                 {/* Center Line: 150 -> 150 */}
                 <motion.path 
                   d="M 150 0 L 150 100"
                   fill="none" stroke="#e2e8f0" strokeWidth="2"
                   initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                 />
                 {/* Right Merge: 250 -> 150 */}
                 <motion.path 
                   d="M 250 0 C 250 50, 150 50, 150 100"
                   fill="none" stroke="#e2e8f0" strokeWidth="2"
                   initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                 />
               </svg>
            </div>
            {/* Mobile-only connector */}
            <div className="h-12 w-0.5 bg-slate-200 md:hidden" />

            {/* 3. BOTTOM SECTION (Outcome) */}
            <div className="mt-0">
              <NodeCard node={processNodes.outcome} isOutcome={true} />
            </div>

        </div>
      </div>
    </section>
  );
}

function NodeCard({ node, isKey = false, isOutcome = false }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className={`
        relative px-8 py-6 rounded-2xl border text-center shadow-sm w-64 md:w-80 z-20 bg-white
        ${node.color}
        ${isKey ? 'ring-4 ring-[#e8e3d9]/50 shadow-md' : ''}
        ${isOutcome ? 'ring-4 ring-purple-50 shadow-purple-100' : ''}
      `}
    >
      <div className="flex flex-col items-center gap-3">
        <div className={`p-3 rounded-full bg-white/80 shadow-sm`}>
          <node.icon size={isKey || isOutcome ? 24 : 20} />
        </div>
        <div>
          <h3 className={`font-semibold text-[#1a1a2e] ${isOutcome ? 'text-xl' : 'text-lg'}`}>{node.title}</h3>
          <p className="text-xs opacity-70 mt-2 leading-relaxed">{node.description}</p>
        </div>
      </div>
    </motion.div>
  );
}