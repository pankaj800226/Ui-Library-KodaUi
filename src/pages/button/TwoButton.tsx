import { useState } from "react";
import { motion } from "framer-motion";
import { FiLayers, FiChevronRight, FiCheck } from "react-icons/fi";

const TwoButton = () => {
  const [copied, setCopied] = useState(false);

  // SOURCE CODE: EXACT SAME ANIMATIONS AS PREVIEW (Synced Protocol)
  const sourceCode = `import { motion } from "framer-motion";
import { FiChevronRight, FiLayers } from "react-icons/fi";

const PlasmaButton = () => {
  return (
    <div className="flex items-center justify-center p-20 bg-[#050505]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative px-14 py-6 bg-transparent rounded-full font-black text-[11px] uppercase tracking-[0.5em] group cursor-pointer overflow-hidden border border-white/10"
      >
        {/* Liquid Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
        
        {/* Inner Glass Layer */}
        <div className="absolute inset-[2px] bg-neutral-950 rounded-full z-10 group-hover:bg-neutral-900 transition-colors" />

        <span className="relative z-20 flex items-center gap-4 text-white group-hover:text-blue-400 transition-colors">
          <FiLayers className="group-hover:rotate-[180deg] transition-transform duration-700" />
          Switch_Variant
          <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
        </span>
      </motion.button>
    </div>
  );
};

export default PlasmaButton;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[450px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent p-10">
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-16 py-8 bg-transparent rounded-full font-black text-[11px] uppercase tracking-[0.6em] group cursor-pointer overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            {/* Liquid Border Animation */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#3b82f6,#a855f7,#ec4899,#3b82f6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
            />
            
            {/* Inner Content Shield */}
            <div className="absolute inset-[2px] bg-neutral-950 rounded-full z-10 group-hover:bg-neutral-900 transition-all duration-300" />

            <span className="relative z-20 flex items-center gap-5 text-neutral-400 group-hover:text-white transition-all">
              <FiLayers className="group-hover:rotate-[180deg] transition-transform duration-700 text-purple-500" />
              Switch_Variant
              <FiChevronRight className="group-hover:translate-x-3 transition-transform duration-500" />
            </span>
          </motion.button>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
              <FiLayers className="text-purple-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Node / Plasma_Variant_v2</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Status: High_Energy_Interaction</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            {copied ? <><FiCheck className="text-emerald-500" /> ANIMATIONS_SYNCED</> : "COPY VARIANT SOURCE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoButton;