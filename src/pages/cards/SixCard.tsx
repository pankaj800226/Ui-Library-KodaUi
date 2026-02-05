import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiStar, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const KodaReviewCard = () => {
  const [copied, setCopied] = useState(false);

  const sourceCode = `import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center bg-transparent p-6">
      <motion.div 
        whileHover={{ y: -8 }}
        className="w-full max-w-md bg-neutral-900 border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden"
      >
        <FaQuoteLeft className="absolute top-10 right-10 text-white/5 text-8xl" />
        
        <div className="flex gap-1.5 mb-8 relative z-10">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="text-yellow-500 fill-yellow-500" size={18} />
          ))}
        </div>

        <p className="text-white text-xl font-bold italic leading-relaxed mb-10 relative z-10">
          "The most intuitive component library I've ever used. The attention to detail in every node is simply world-class."
        </p>

        <div className="flex items-center gap-5 border-t border-white/5 pt-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center font-black text-white text-xl shadow-xl shadow-yellow-500/20">
            RS
          </div>
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-widest">Rahul Sharma</h4>
            <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Founding Engineer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* PREVIEW AREA */}
      <div className="min-h-[650px] p-10 md:p-20 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          className="w-full max-w-md bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden"
        >
          <FaQuoteLeft className="absolute top-12 right-12 text-white/5 text-9xl pointer-events-none" />

          <div className="flex gap-2 mb-8 relative z-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <FiStar className="text-yellow-500 fill-yellow-500" size={20} />
              </motion.div>
            ))}
          </div>

          <p className="text-white text-2xl font-black italic tracking-tighter leading-snug mb-12 relative z-10">
            "We built our entire MVP in just two weeks. KodaUI components look like they were custom-made by a top-tier agency."
          </p>

          <div className="flex items-center gap-6 pt-10 border-t border-white/5">
            <div className="relative">
              <div className="w-16 h-16 rounded-[1.8rem] bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-black text-white text-2xl italic shadow-2xl shadow-yellow-500/20 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                RS
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-4 border-neutral-900 rounded-full" />
            </div>
            <div>
              <h4 className="text-white font-black text-lg italic tracking-tighter leading-none uppercase">Rahul Sharma</h4>
              <p className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Founding Engineer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-8 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
            <FiChevronRight className="text-yellow-500" size={20} />
          </div>
          <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.5em]">Module / Review_Node_v6</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-white transition-all shadow-2xl active:scale-95 cursor-pointer"
        >
          {copied ? <><FiCheck /> LOGIC COPIED</> : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default KodaReviewCard;