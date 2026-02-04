import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiArrowUpRight, FiImage } from "react-icons/fi";

const KodaMediaCard = () => {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleActionClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  // Pure Component Code for User
  const fullCode = `import { motion } from "framer-motion";

const ImageCard = () => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="w-full max-w-sm bg-neutral-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
    >
      <div className="relative group overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white tracking-tight">Ethereal Peaks</h3>
        <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
          High-performance UI card with smooth hover states and glass finishing.
        </p>
        <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all active:scale-95 cursor-pointer">
          Explore Details
        </button>
      </div>
    </motion.div>
  );
};

export default ImageCard;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl group">
      
      {/* PREVIEW AREA */}
      <div className="p-8 md:p-20 flex justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative"
        >
          {/* Image Section with Overlay */}
          <div className="relative group overflow-hidden h-56">
            <img
              src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=900&auto=format&fit=crop&q=60"
              alt="Card Image"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-blue-600 transition-colors">
              <FiArrowUpRight size={18} />
            </div>
          </div>

          {/* Body Section */}
          <div className="p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Visual Component</p>
            </div>
            
            <h2 className="text-2xl font-black text-white italic tracking-tighter">Glass Media Card</h2>
            <p className="text-neutral-500 text-sm mt-3 font-medium leading-relaxed">
              Elevate your content with high-definition image cards. Perfect for portfolios and blogs.
            </p>

            <motion.button
              onClick={handleActionClick}
              whileTap={{ scale: 0.95 }}
              className={`mt-8 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-xl ${
                clicked 
                ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                : "bg-white text-black hover:bg-blue-600 hover:text-white"
              }`}
            >
              {clicked ? "Confirmed ✓" : "Launch Preview"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER TOOLBAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neutral-900 border border-white/10 rounded-xl">
            <FiImage className="text-blue-500" />
          </div>
          <p className="text-[10px] font-mono text-neutral-500 font-bold uppercase tracking-[0.3em]">Module / Media_Card_v2</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-white/10 px-6 py-3 rounded-2xl text-xs font-black text-white transition-all active:scale-95 cursor-pointer"
        >
          {copied ? <><FiCheck className="text-emerald-500" /> COPIED</> : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default KodaMediaCard;