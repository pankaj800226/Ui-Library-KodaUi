import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiLock, FiMail, FiCheck, FiLayers } from "react-icons/fi";

const FourInput = () => {
  const [copied, setCopied] = useState(false);

  // SOURCE CODE: Saare 4 variants aur unki animations PREVIEW ke jaise EXACT SAME hain
  const sourceCode = `import { motion } from "framer-motion";
import { FiUser, FiLock, FiMail, FiSearch } from "react-icons/fi";

const InputSystem = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-20 bg-[#050505]">
      
      {/* 1. NEON TRACE (Primary) */}
      <div className="w-full max-w-sm group">
        <label className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.4em] mb-2 block group-focus-within:text-blue-500">User_Identity</label>
        <div className="relative">
          <motion.input 
            whileFocus={{ scale: 1.02 }}
            className="w-full bg-neutral-900 border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-xs outline-none focus:border-blue-500 transition-all"
            placeholder="ENTER_USERNAME..."
          />
          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500" />
        </div>
      </div>

      {/* 2. GLASS BLUR (Premium) */}
      <div className="w-full max-w-sm group">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <motion.input 
            whileFocus={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            className="w-full bg-white/5 backdrop-blur-xl py-4 px-12 text-white text-xs outline-none placeholder:text-neutral-700"
            placeholder="ACCESS_ENCRYPTION_KEY..."
          />
          <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
          <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
      </div>

      {/* 3. MINIMAL UNDERSCORE (Modern) */}
      <div className="w-full max-w-sm group">
        <div className="relative">
          <input className="w-full bg-transparent border-b border-neutral-800 py-3 px-2 text-white text-xs outline-none focus:border-white transition-all placeholder:text-neutral-800" placeholder="SUBSCRIPTION_EMAIL..." />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="absolute bottom-0 h-[1px] bg-blue-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
        </div>
      </div>

      {/* 4. SEARCH GLITCH (Functional) */}
      <div className="w-full max-w-sm relative group">
        <input className="w-full bg-neutral-900/50 border-2 border-transparent focus:border-red-600/20 py-4 pl-12 rounded-full text-white text-xs outline-none transition-all" placeholder="SEARCH_DATABASE..." />
        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-red-500" />
      </div>
    </div>
  );
};

export default InputSystem;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[700px] flex flex-col items-center justify-center gap-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/10 via-transparent to-transparent p-12">
          
          {/* Variant 1: Neon Trace */}
          <div className="w-full max-w-md group">
            <span className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.5em] mb-3 block group-focus-within:text-blue-500 transition-colors">01_Identity_Node</span>
            <div className="relative">
              <motion.input 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)" }}
                className="w-full bg-neutral-900 border border-white/10 rounded-2xl py-6 pl-14 pr-6 text-white text-[11px] font-black tracking-widest outline-none focus:border-blue-500 transition-all duration-300"
                placeholder="USERNAME..."
              />
              <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" size={18} />
            </div>
          </div>

          {/* Variant 2: Animated Scanner */}
          <div className="w-full max-w-md group relative overflow-hidden rounded-2xl border border-white/5">
            <motion.input 
              whileFocus={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="w-full bg-white/5 backdrop-blur-xl py-6 px-14 text-white text-[11px] font-black tracking-[0.3em] outline-none placeholder:text-neutral-800"
              placeholder="ENCRYPTION_KEY..."
            />
            <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700" size={18} />
            <motion.div 
              animate={{ x: ["-100%", "100%"] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
              className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" 
            />
          </div>

          {/* Variant 3: Minimalist Flow */}
          <div className="w-full max-w-md group">
            <div className="relative">
              <input 
                className="w-full bg-transparent border-b border-neutral-800 py-4 px-2 text-white text-[11px] font-black tracking-widest outline-none transition-all placeholder:text-neutral-900" 
                placeholder="COMMUNICATION_CHANNEL..." 
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-800 group-focus-within:text-white transition-colors" />
            </div>
          </div>

        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <FiLayers className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Node / Input_Matrix_v4</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Includes: 4 Synced Animation States</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            {copied ? <><FiCheck className="text-emerald-500" /> MATRIX_SYNCED</> : "COPY SYSTEM SOURCE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourInput;