import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  FiUserPlus, FiUserCheck, FiTwitter, FiGithub, FiLinkedin, FiActivity } from "react-icons/fi";

const KodaProfileCard = () => {
  const [following, setFollowing] = useState(false);
  const [copied, setCopied] = useState(false);

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { FiUserPlus, FiUserCheck, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const ProfileCard = () => {
  const [following, setFollowing] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
      <motion.div 
        whileHover={{ y: -10 }}
        className="w-full max-w-sm bg-neutral-900/50 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-xl"
      >
        <div className="h-32 bg-gradient-to-br from-indigo-600/30 to-blue-500/10" />
        <div className="px-10 pb-12 flex flex-col items-center">
          <div className="relative -mt-16 mb-6">
            <img src="https://i.pravatar.cc/300" className="w-32 h-32 rounded-[2.5rem] border-[8px] border-neutral-900 object-cover shadow-2xl" />
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 border-4 border-neutral-900 rounded-full" />
          </div>
          <h3 className="text-3xl font-black text-white italic tracking-tighter">Jane Koda</h3>
          <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Product Strategist</p>
          
          <div className="flex gap-4 my-8">
            {[FiTwitter, FiGithub, FiLinkedin].map((Icon, i) => (
              <button key={i} className="p-4 bg-white/5 hover:bg-indigo-600 text-neutral-400 hover:text-white rounded-2xl transition-all border border-white/5 active:scale-90 cursor-pointer">
                <Icon size={18} />
              </button>
            ))}
          </div>

          <button
            onClick={() => setFollowing(!following)}
            className={\`w-full py-5 rounded-[1.5rem] flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer \${
              following ? "bg-neutral-800 text-neutral-500" : "bg-white text-black hover:bg-indigo-600 hover:text-white shadow-xl shadow-white/5"
            }\`}
          >
            {following ? <FiUserCheck size={20} /> : <FiUserPlus size={20} />}
            {following ? "Following" : "Connect"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* PREVIEW AREA */}
      <div className="min-h-[750px] p-10 flex items-center justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent">
        <motion.div
          whileHover={{ y: -8 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] overflow-hidden shadow-2xl relative"
        >
          {/* Cover with animated pattern */}
          <div className="h-32 bg-gradient-to-br from-indigo-600/40 via-blue-500/20 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </div>

          <div className="px-10 pb-12 flex flex-col items-center">
            {/* Avatar Section */}
            <div className="relative -mt-16 mb-6 group">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-32 h-32 rounded-[3rem] border-[10px] border-[#0a0a0a] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-2 right-2 w-7 h-7 bg-emerald-500 border-4 border-[#0a0a0a] rounded-full" 
              />
            </div>

            <h3 className="text-3xl font-black text-white italic tracking-tighter leading-none uppercase">Jane Koda</h3>
            <div className="flex items-center gap-2 mt-4">
               <FiActivity className="text-indigo-500" size={12} />
               <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">Product Strategist</p>
            </div>

            {/* Interactive Social Grid */}
            <div className="flex gap-4 my-10">
               {[FiTwitter, FiGithub, FiLinkedin].map((Icon, i) => (
                 <motion.button 
                   key={i} 
                   whileHover={{ y: -4 }}
                   className="p-4 bg-white/5 hover:bg-indigo-600 hover:text-white text-neutral-400 rounded-2xl transition-all cursor-pointer border border-white/5 shadow-lg active:scale-90"
                 >
                    <Icon size={20} />
                 </motion.button>
               ))}
            </div>

            <button
              onClick={() => setFollowing(!following)}
              className={`w-full py-5 rounded-[1.8rem] flex items-center justify-center gap-4 font-black text-[10px] uppercase tracking-[0.3em] transition-all cursor-pointer shadow-2xl ${
                following ? "bg-neutral-800 text-neutral-500" : "bg-white text-black hover:bg-indigo-600 hover:text-white"
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={following ? "following" : "not-following"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  {following ? <FiUserCheck size={18} /> : <FiUserPlus size={18} />}
                  {following ? "Following" : "Connect"}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-8 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
            <FiUserPlus className="text-indigo-400" size={20} />
          </div>
          <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.5em]">Identity_Kernel / v.05</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-2xl active:scale-95 cursor-pointer"
        >
          {copied ? "IDENTITY LOGIC COPIED" : "COPY FULL COMPONENT"}
        </button>
      </div>
    </div>
  );
};

export default KodaProfileCard;