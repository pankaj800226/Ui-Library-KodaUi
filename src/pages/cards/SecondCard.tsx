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

  const fullCode = `import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const MediaCard = () => {
  return (
    <div className="min-h-[500px] w-full flex items-center justify-center bg-transparent p-6">
      <motion.div 
        whileHover={{ y: -8 }}
        className="w-full max-w-sm bg-neutral-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-colors hover:border-blue-500/30"
      >
        <div className="relative group overflow-hidden h-60">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt="Abstract Art"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          <div className="absolute top-5 right-5 p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <FiArrowUpRight size={20} />
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Featured Module</span>
          </div>
          <h3 className="text-2xl font-black text-white italic tracking-tighter">Ethereal Flux</h3>
          <p className="text-neutral-400 text-sm mt-3 leading-relaxed font-medium">
            High-performance visual container with glass aesthetics and smooth physics-based transitions.
          </p>
          <button className="mt-8 w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-blue-600 hover:text-white active:scale-95">
            View Details
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MediaCard;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl group">
      
      {/* PREVIEW AREA */}
      <div className="min-h-[700px] p-10 md:p-20 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative transition-all hover:border-blue-500/20"
        >
          {/* Image Section */}
          <div className="relative group overflow-hidden h-64">
            <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> {/* Placeholder */}
            <img
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400"
              alt="Preview"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-20 opacity-60" />
            <div className="absolute top-6 right-6 p-3 bg-black/40 backdrop-blur-xl rounded-2xl text-white z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 cursor-pointer border border-white/10">
              <FiArrowUpRight size={20} />
            </div>
          </div>

          {/* Body Section */}
          <div className="p-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" />
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Visual_Node / v2</p>
            </div>
            
            <h2 className="text-3xl font-black text-white italic tracking-tighter leading-none">GLASS MEDIA</h2>
            <p className="text-neutral-500 text-sm mt-4 font-medium leading-relaxed">
              Immersive media container designed for high-end digital experiences and modern galleries.
            </p>

            <motion.button
              onClick={handleActionClick}
              whileTap={{ scale: 0.95 }}
              className={`mt-10 w-full py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-2xl ${
                clicked 
                ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                : "bg-white text-black hover:bg-blue-600 hover:text-white"
              }`}
            >
              {clicked ? "Node Initialized" : "Explore Content"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER TOOLBAR */}
      <div className="px-10 py-8 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
            <FiImage className="text-blue-500" size={20} />
          </div>
          <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.4em]">Components / Media_Cipher</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 cursor-pointer shadow-lg"
        >
          {copied ? <><FiCheck className="text-emerald-500" /> SOURCE COPIED</> : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default KodaMediaCard;