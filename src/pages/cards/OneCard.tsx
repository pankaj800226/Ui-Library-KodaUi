import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiArrowRight } from "react-icons/fi";

const OneCard = () => {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleActionClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  // Full code snippet for the user to copy
  const code = `import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const PremiumCard = () => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-1 transition-all hover:border-blue-500/50">
      <div className="relative z-10 rounded-[14px] bg-neutral-950 p-6">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Advanced UI Card</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          Elevate your interface with sleek animations and premium dark aesthetics.
        </p>
        <button className="group/btn mt-6 flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-neutral-200">
          Get Started
          <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
};`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="bg-[#020617] px-4 py-16 flex justify-center items-center font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden group"
      >
        {/* DESIGN PREVIEW AREA */}
        <div className="p-8 relative">
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-white tracking-tight">Premium Card</h2>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Experience the next level of UI design with smooth transitions and glassmorphism effects.
            </p>

            <motion.button
              onClick={handleActionClick}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`mt-8 w-full flex items-center justify-center gap-2 rounded-xl py-3 font-bold transition-all duration-300 shadow-lg ${
                clicked
                  ? "bg-green-600 text-white shadow-green-500/20"
                  : "bg-white text-black hover:bg-neutral-200 shadow-white/5"
              }`}
            >
              {clicked ? "Success!" : "Explore Features"}
              {!clicked && <FiArrowRight />}
            </motion.button>
          </div>
        </div>

        {/* FOOTER / COPY SECTION */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-800/50 bg-neutral-950/50 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Modern Component</span>
          </div>
          
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              copied 
              ? "text-green-400 bg-green-400/10" 
              : "text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <FiCopy className={copied ? "scale-110" : ""} />
            {copied ? "Copied" : "Copy Code"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OneCard;