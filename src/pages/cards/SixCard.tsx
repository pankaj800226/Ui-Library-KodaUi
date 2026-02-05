import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const SixCard = () => {
  const [copied, setCopied] = useState(false);

  // Full code for user to copy
  const sourceCode = `import { motion } from "framer-motion";
import { FiStar, FiQuote } from "react-icons/fi";

const TestimonialCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="max-w-md bg-neutral-900 border border-white/5 p-8 rounded-[2.5rem] relative shadow-2xl"
    >
      <FiQuote className="absolute top-6 right-8 text-white/10 text-6xl" />
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => <FiStar key={i} className="text-yellow-500 fill-yellow-500" size={14} />)}
      </div>
      <p className="text-white text-lg font-medium italic leading-relaxed mb-8">
        "KodaUI is a game changer. The speed and design quality are unmatched in the current React ecosystem."
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-blue-600/20">AK</div>
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest">Alex Koda</h4>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-tighter">Senior Dev</p>
        </div>
      </div>
    </motion.div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* --- PREVIEW AREA --- */}
      <div className="p-10 md:p-20 flex justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5 }}
          className="w-full max-w-md bg-neutral-900/50 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative"
        >
          {/* Decorative Quote Icon */}
          <FaQuoteLeft className="absolute top-8 right-10 text-white/5 text-7xl" />

          {/* Star Ratings */}
          <div className="flex gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} className="text-yellow-500 fill-yellow-500" size={16} />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-white text-xl font-bold italic leading-relaxed tracking-tight mb-10 relative z-10">
            "We built our entire MVP in just two weeks thanks to KodaUI. The components aren't just easy to use—they look like they were custom-made by a top-tier agency."
          </p>

          {/* User Info */}
          <div className="flex items-center gap-5 border-t border-white/5 pt-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center font-black text-white text-xl italic shadow-xl shadow-yellow-500/10 cursor-pointer">
              RS
            </div>
            <div>
              <h4 className="text-white font-black text-base uppercase tracking-widest">Rahul Sharma</h4>
              <p className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Founding Engineer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- ACTION BAR (COPY CODE) --- */}
      <div className="bg-white/5 px-10 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308] animate-pulse" />
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / Review_Card_v6</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-yellow-500 hover:text-white transition-all active:scale-95 cursor-pointer shadow-xl"
        >
          {copied ? <><FiCheck size={18} /> Copied Source!</> : <><FiCopy size={18} /> Copy Card Code</>}
        </button>
      </div>
    </div>
  );
};

export default SixCard;