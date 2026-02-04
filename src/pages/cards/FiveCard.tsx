import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiCheck, FiUserPlus, FiUserCheck, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const KodaProfileCard = () => {
  const [following, setFollowing] = useState(false);
  const [copied, setCopied] = useState(false);

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { FiUserPlus, FiUserCheck } from "react-icons/fi";

const ProfileCard = () => {
  const [following, setFollowing] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="w-full max-w-sm bg-[#0f172a] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl relative group"
    >
      <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600" />
      <div className="px-8 pb-8 flex flex-col items-center">
        <div className="relative -mt-12 mb-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            className="w-24 h-24 rounded-[2rem] border-4 border-[#0f172a] object-cover shadow-2xl"
          />
        </div>
        <h3 className="text-xl font-black text-white italic">Jane Koda</h3>
        <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mt-1">Lead Architect</p>
        
        <div className="flex gap-8 my-6 text-center">
          <div>
            <p className="text-white font-black italic">1.2K</p>
            <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-tighter">Followers</p>
          </div>
          <div className="w-[1px] h-8 bg-white/5 self-center" />
          <div>
            <p className="text-white font-black italic">240</p>
            <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-tighter">Design Projects</p>
          </div>
        </div>

        <button
          onClick={() => setFollowing(!following)}
          className={\`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer \${
            following ? "bg-white/5 text-white border border-white/10" : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
          }\`}
        >
          {following ? <><FiUserCheck /> Following</> : <><FiUserPlus /> Follow</>}
        </button>
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
      <div className="p-10 md:p-20 flex justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -8 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
        >
          {/* Cover Mesh */}
          <div className="h-28 bg-gradient-to-br from-indigo-600/40 via-blue-500/20 to-transparent relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </div>

          <div className="px-8 pb-10 flex flex-col items-center">
            {/* Avatar with Squircle shape */}
            <div className="relative -mt-14 mb-5">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-28 h-28 rounded-[2.5rem] border-[6px] border-[#0a0a0a] object-cover shadow-2xl"
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-[#0a0a0a] rounded-full shadow-lg shadow-emerald-500/20" />
            </div>

            <h3 className="text-2xl font-black text-white italic tracking-tighter leading-none">Jane Koda</h3>
            <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Product Strategist</p>

            <div className="flex gap-10 my-8 text-center bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
              <div className="cursor-default">
                <p className="text-white font-black text-lg italic leading-none">1.2K</p>
                <p className="text-neutral-500 text-[9px] font-bold uppercase tracking-widest mt-1">Network</p>
              </div>
              <div className="w-[1px] h-6 bg-white/10 self-center" />
              <div className="cursor-default">
                <p className="text-white font-black text-lg italic leading-none">384</p>
                <p className="text-neutral-500 text-[9px] font-bold uppercase tracking-widest mt-1">Articles</p>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
               {[FiTwitter, FiGithub, FiLinkedin].map((Icon, i) => (
                 <button key={i} className="p-3 bg-white/5 hover:bg-indigo-600 hover:text-white text-neutral-400 rounded-xl transition-all cursor-pointer border border-white/5 active:scale-90">
                    <Icon size={16} />
                 </button>
               ))}
            </div>

            <motion.button
              onClick={() => setFollowing(!following)}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-5 rounded-[1.5rem] flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-2xl ${
                following 
                ? "bg-neutral-800 text-neutral-400 border border-white/5" 
                : "bg-white text-black hover:bg-indigo-600 hover:text-white shadow-white/5"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={following ? "following" : "follow"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  {following ? <><FiUserCheck size={18} /> Following</> : <><FiUserPlus size={18} /> Connect</>}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
          <p className="text-xs font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / Identity_Card_v5</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all active:scale-95 cursor-pointer shadow-xl"
        >
          {copied ? <><FiCheck className="text-emerald-500" /> SOURCE COPIED</> : <><FiCopy /> COPY FULL COMPONENT</>}
        </button>
      </div>
    </div>
  );
};

export default KodaProfileCard;