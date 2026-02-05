import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiZap, FiCopy, FiCheck } from "react-icons/fi";

const OneButton = () => {
  const [copied, setCopied] = useState(false);

  // AB SE: Preview aur Code ekdum SAME hain (Animations Included)
  const sourceCode = `import { motion } from "framer-motion";
import { FiArrowRight, FiZap } from "react-icons/fi";

const KineticButton = () => {
  return (
    <div className="flex items-center justify-center p-20 bg-[#050505]">
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
          backgroundColor: "#2563eb",
          color: "#fff"
        }}
        whileTap={{ scale: 0.95 }}
        className="relative px-16 py-7 bg-white text-black rounded-[2rem] font-black text-[10px] uppercase tracking-[0.6em] overflow-hidden group transition-all duration-500 cursor-pointer border-none outline-none"
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Content Layer */}
        <span className="relative z-10 flex items-center gap-4">
          <FiZap className="group-hover:rotate-12 transition-transform" />
          Execute_Action
          <FiArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
        </span>

        {/* Reflection Shine Animation */}
        <motion.div 
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
        />
      </motion.button>
    </div>
  );
};

export default KineticButton;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[400px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent p-10">
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
              backgroundColor: "#2563eb",
              color: "#fff"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-16 py-7 bg-white text-black rounded-[2rem] font-black text-[10px] uppercase tracking-[0.6em] overflow-hidden group transition-all duration-500 cursor-pointer"
          >
            {/* Animated Glow Back */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Inner Content */}
            <span className="relative z-10 flex items-center gap-4">
              <FiZap className="group-hover:rotate-12 transition-transform" />
              Execute_Action
              <FiArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
            </span>

            {/* Reflection Shine */}
            <motion.div 
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
            />
          </motion.button>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
              <FiZap className="text-blue-500" size={18} />
            </div>
            <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.4em]">Node / Kinetic_Btn_v2</p>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            {copied ? <><FiCheck className="text-emerald-500" /> FULL_ANIM_SYNCED</> : <><FiCopy /> CLONE_PREMIUM_SOURCE</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneButton;