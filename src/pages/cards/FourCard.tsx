import { useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiChevronRight, FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const KodaBlogCard = () => {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiClock, FiUser } from "react-icons/fi";

const EditorialCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
      <motion.div 
        whileHover={{ y: -8 }}
        className="w-full max-w-sm bg-neutral-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-xl group"
      >
        <div className="relative h-60 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
          <div className="absolute top-6 left-6 px-4 py-1.5 bg-indigo-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-indigo-600/20">
            Tech Trends
          </div>
        </div>

        <div className="p-10">
          <div className="flex items-center gap-3 text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <FiClock className="text-indigo-500" /> 8 Min Read • 2026
          </div>
          <h3 className="text-2xl font-black text-white italic tracking-tighter leading-tight mb-4 group-hover:text-indigo-400 transition-colors">
            Building the Meta-Interface
          </h3>
          <p className="text-neutral-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
            The transition from flat design to spatial computing is redefining how we think about depth.
          </p>

          <div className="flex items-center justify-between pt-8 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <FiUser />
              </div>
              <div>
                <p className="text-white text-xs font-black italic">John Koda</p>
                <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest mt-1">Creator</p>
              </div>
            </div>
            <button onClick={() => setLiked(!liked)} className="p-3 bg-white/5 rounded-xl text-neutral-500 hover:text-red-500 transition-all active:scale-90">
              {liked ? <AiFillHeart className="text-red-500" size={20} /> : <AiOutlineHeart size={20} />}
            </button>
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
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl group/main">
      
      {/* PREVIEW AREA */}
      <div className="min-h-[750px] p-10 flex items-center justify-center bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative"
        >
          <div className="relative h-60 overflow-hidden">
            <img
              src="logo.png"
              alt="Editorial"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
            <div className="absolute top-6 left-6 bg-indigo-600 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl shadow-indigo-600/30 uppercase tracking-widest cursor-pointer">
              Spatial UI
            </div>
          </div>

          <div className="p-10">
            <div className="flex items-center gap-3 text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em] mb-5">
              <FiClock className="text-indigo-400" /> 6 Min Read • Feb 5, 2026
            </div>

            <h3 className="text-3xl font-black text-white italic tracking-tighter leading-none mb-4 transition-colors group-hover:text-indigo-400">
              VISUAL<br/>STORYTELLING
            </h3>
            
            <p className="text-neutral-500 text-sm font-medium leading-relaxed mb-10">
              Exploring how typography and spatial depth can transform a simple blog into an immersive digital journey.
            </p>

            <div className="flex items-center justify-between pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <FiUser size={20} />
                </div>
                <div>
                  <p className="text-white text-xs font-black italic uppercase leading-none">John Koda</p>
                  <p className="text-[10px] text-neutral-600 font-black uppercase tracking-widest mt-2">Principal Lead</p>
                </div>
              </div>

              <button
                onClick={() => setLiked(!liked)}
                className={`p-4 rounded-2xl transition-all active:scale-90 cursor-pointer ${
                  liked ? "bg-red-500/10 text-red-500 shadow-xl shadow-red-500/10" : "bg-white/5 text-neutral-500 hover:bg-white/10"
                }`}
              >
                {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-8 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
            <FiChevronRight className="text-indigo-400" size={20} />
          </div>
          <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.4em]">Node / Editorial_System_v4</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-2xl active:scale-95 cursor-pointer"
        >
          {copied ? "SOURCE LOGIC COPIED" : "COPY COMPONENT"}
        </button>
      </div>
    </div>
  );
};

export default KodaBlogCard;