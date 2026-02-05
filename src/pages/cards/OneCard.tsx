import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiArrowRight, FiLayers } from "react-icons/fi";

const OneCard = () => {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleActionClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  // Optimized source code for the user
  const code = `import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiLayers } from "react-icons/fi";

export const PremiumCard = () => {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center bg-transparent p-6">
      <div className="group relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/50 p-1 transition-all hover:border-blue-500/30">
        <div className="relative z-10 rounded-[2.2rem] bg-neutral-950 p-8">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
            <FiLayers size={24} />
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-white italic">Premium Design</h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400 font-medium">
            Next-generation component architecture with smooth physics and premium aesthetics.
          </p>
          <button className="group/btn mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-blue-600 hover:text-white active:scale-95">
            Initialize Module
            <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-neutral-950 px-4 py-20 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] shadow-2xl overflow-hidden group relative"
      >
        {/* DESIGN PREVIEW AREA */}
        <div className="p-10 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-600/20">
              <FiLayers size={28} />
            </div>

            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Premium Card</h2>
            <p className="text-neutral-500 text-sm mt-3 font-medium leading-relaxed">
              Experience the next level of UI design with smooth transitions and deep-space aesthetics.
            </p>

            <motion.button
              onClick={handleActionClick}
              whileTap={{ scale: 0.95 }}
              className={`mt-10 w-full flex items-center justify-center gap-2 rounded-2xl py-5 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl cursor-pointer ${
                clicked
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-black hover:bg-blue-600 hover:text-white"
              }`}
            >
              {clicked ? "Action Confirmed" : "Explore Module"}
              {!clicked && <FiArrowRight />}
            </motion.button>
          </div>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="flex items-center justify-between px-8 py-6 border-t border-white/5 bg-neutral-950/80">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">KodaUI / v.01</span>
          </div>
          
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
              copied 
              ? "text-emerald-400 bg-emerald-400/10" 
              : "text-neutral-500 hover:text-white hover:bg-white/5"
            }`}
          >
            {copied ? "Copied!" : <><FiCopy /> Copy Code</>}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OneCard;