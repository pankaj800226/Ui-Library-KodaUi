import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiClock, FiChevronRight, FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const KodaBlogCard = () => {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiClock, FiChevronRight } from "react-icons/fi";

const ModernBlogCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="w-full max-w-sm bg-[#0f172a] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl group"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/80 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest">
          Adventure
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-3">
          <FiClock /> 5 min read • Feb 5, 2026
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          The Future of Minimalist Web Design
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
          Discover how clean lines and glassmorphism are shaping the next generation of digital interfaces.
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10" />
            <span className="text-white text-xs font-bold">JD</span>
          </div>
          <button 
            onClick={() => setLiked(!liked)}
            className="text-neutral-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            {liked ? <AiFillHeart className="text-red-500" size={20} /> : <AiOutlineHeart size={20} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl group/main">
      
      {/* PREVIEW AREA */}
      <div className="p-10 md:p-20 flex justify-center bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative cursor-default"
        >
          {/* Image with Category Badge */}
          <div className="relative h-56 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60"
              alt="Blog"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
            <div className="absolute top-5 left-5 bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg shadow-indigo-600/20 uppercase tracking-widest">
              Design
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8">
            <div className="flex items-center gap-3 text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <FiClock className="text-indigo-500" /> 6 Min Read • Feb 5, 2026
            </div>

            <h3 className="text-2xl font-black text-white italic tracking-tighter leading-tight mb-4 group-hover:text-indigo-400 transition-colors">
              The Art of Visual Storytelling
            </h3>
            
            <p className="text-neutral-500 text-sm font-medium leading-relaxed mb-8">
              Exploring how typography and whitespace can transform a simple blog into an immersive experience.
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                  <FiUser />
                </div>
                <div>
                  <p className="text-white text-xs font-black italic">John Koda</p>
                  <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">Creator</p>
                </div>
              </div>

              <button
                onClick={() => setLiked(!liked)}
                className={`p-3 rounded-xl transition-all active:scale-90 cursor-pointer ${
                  liked ? "bg-red-500/10 text-red-500 shadow-lg shadow-red-500/10" : "bg-white/5 text-neutral-500 hover:bg-white/10"
                }`}
              >
                {liked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
            <FiChevronRight className="text-indigo-500" />
          </div>
          <p className="text-xs font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / Editorial_Card_v4</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-black px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all active:scale-95 cursor-pointer shadow-xl shadow-indigo-600/10"
        >
          {copied ? <><FiCheck /> Copied Code</> : <><FiCopy /> Copy Full Source</>}
        </button>
      </div>
    </div>
  );
};

export default KodaBlogCard;