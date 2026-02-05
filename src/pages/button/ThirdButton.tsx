import { useState } from "react";
import { motion } from "framer-motion";
import { FiZap, FiTarget, FiShield, FiCheck, FiAlertTriangle } from "react-icons/fi";

const ThirdButton = () => {
  const [copied, setCopied] = useState(false);

  // SOURCE CODE: Saare 4 variants aur unki animations PREVIEW ke jaise SAME hain
  const sourceCode = `import { motion } from "framer-motion";
import { FiZap, FiTarget, FiShield, FiAlertTriangle } from "react-icons/fi";

const ButtonSystem = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-20 bg-[#050505]">
      {/* 1. CYBER GLOW (Primary) */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        className="px-10 py-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 transition-colors"
      >
        <FiZap className="animate-pulse" /> Cyber_Pulse
      </motion.button>

      {/* 2. GHOST OUTLINE (Minimal) */}
      <motion.button
        whileHover={{ backgroundColor: "rgba(255,255,255,0.1)", y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-4 border border-white/20 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 transition-all"
      >
        <FiTarget /> Precision_Target
      </motion.button>

      {/* 3. GLASS BLUR (Premium) */}
      <motion.button
        whileHover={{ backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/5 text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3"
      >
        <FiShield className="text-emerald-400" /> Secure_Protocol
      </motion.button>

      {/* 4. RETRO WARNING (Danger) */}
      <motion.button
        whileHover={{ x: [-2, 2, -2, 2, 0], transition: { duration: 0.2, repeat: Infinity } }}
        className="px-10 py-4 bg-red-600/10 hover:bg-red-600 border border-red-600 text-red-600 hover:text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3"
      >
        <FiAlertTriangle /> Execute_Warning
      </motion.button>
    </div>
  );
};

export default ButtonSystem;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[500px] flex flex-wrap items-center justify-center gap-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/10 via-transparent to-transparent p-12">
          
          {/* Variant 1: Cyber Glow */}
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 cursor-pointer shadow-xl shadow-blue-900/20"
          >
            <FiZap size={16} /> Cyber_Pulse
          </motion.button>

          {/* Variant 2: Ghost Target */}
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#fff", y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border-2 border-white/10 text-neutral-400 hover:text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 cursor-pointer transition-all duration-300"
          >
            <FiTarget size={16} /> Precision
          </motion.button>

          {/* Variant 3: Glass Shield */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/5 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 cursor-pointer"
          >
            <FiShield size={16} className="text-emerald-500" /> Secure
          </motion.button>

          {/* Variant 4: Glitch Warning */}
          <motion.button
            whileHover={{ x: [-2, 2, -2, 2, 0], backgroundColor: "#dc2626", color: "#fff" }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="px-10 py-5 bg-red-600/10 border border-red-600/50 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 cursor-pointer transition-colors"
          >
            <FiAlertTriangle size={16} /> Warning
          </motion.button>

        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <FiZap className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.5em]">Module / Multi_Variant_v3</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Includes: 4 Animated Node Variations</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            {copied ? <><FiCheck className="text-emerald-500" /> 4_VARIANTS_SYNCED</> : "COPY SYSTEM SOURCE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdButton;