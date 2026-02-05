import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiUserPlus, FiUserCheck, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const KodaProfileCard = () => {
  const [following, setFollowing] = useState(false);
  const [copied, setCopied] = useState(false);

  // FIXED: Now includes social icons and full layout in the copyable code
  const sourceCode = `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUserPlus, FiUserCheck, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const ProfileCard = () => {
  const [following, setFollowing] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="w-full max-w-sm bg-[#09090b] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative"
    >
      {/* Cover */}
      <div className="h-28 bg-gradient-to-br from-indigo-600/20 to-blue-500/10" />

      <div className="px-8 pb-10 flex flex-col items-center">
        {/* Avatar */}
        <div className="relative -mt-14 mb-5">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
            className="w-28 h-28 rounded-[2rem] border-[6px] border-[#09090b] object-cover shadow-2xl"
          />
        </div>

        <h3 className="text-2xl font-black text-white italic tracking-tighter">Jane Koda</h3>
        <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mt-2">Product Strategist</p>

        {/* Social Icons Block */}
        <div className="flex gap-3 my-6">
          {[FiTwitter, FiGithub, FiLinkedin].map((Icon, i) => (
            <button key={i} className="p-3 bg-white/5 hover:bg-indigo-600 text-neutral-400 hover:text-white rounded-xl transition-all cursor-pointer border border-white/5">
              <Icon size={16} />
            </button>
          ))}
        </div>

        {/* Follow Button */}
        <button
          onClick={() => setFollowing(!following)}
          className={\`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all cursor-pointer \${
            following ? "bg-white/5 text-neutral-400" : "bg-white text-black hover:bg-indigo-600 hover:text-white"
          }\`}
        >
          {following ? <FiUserCheck /> : <FiUserPlus />}
          {following ? "Following" : "Connect"}
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
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      {/* PREVIEW AREA (The visual part you see on screen) */}
      <div className="p-10 md:p-20 flex justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        <motion.div
          whileHover={{ y: -8 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative"
        >
          <div className="h-28 bg-gradient-to-br from-indigo-600/40 via-blue-500/20 to-transparent" />

          <div className="px-8 pb-10 flex flex-col items-center">
            <div className="relative -mt-14 mb-5">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-28 h-28 rounded-[2.5rem] border-[6px] border-[#0a0a0a] object-cover shadow-2xl"
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-[#0a0a0a] rounded-full" />
            </div>

            <h3 className="text-2xl font-black text-white italic tracking-tighter leading-none">Jane Koda</h3>
            <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mt-3">Product Strategist</p>

            {/* Social Icons Included */}
            <div className="flex gap-3 my-8">
               {[FiTwitter, FiGithub, FiLinkedin].map((Icon, i) => (
                 <button key={i} className="p-3 bg-white/5 hover:bg-indigo-600 hover:text-white text-neutral-400 rounded-xl transition-all cursor-pointer border border-white/5 active:scale-90">
                    <Icon size={16} />
                 </button>
               ))}
            </div>

            <button
              onClick={() => setFollowing(!following)}
              className={`w-full py-5 rounded-[1.5rem] flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer ${
                following ? "bg-neutral-800 text-neutral-400" : "bg-white text-black hover:bg-indigo-600 hover:text-white"
              }`}
            >
              {following ? <FiUserCheck size={18} /> : <FiUserPlus size={18} />}
              {following ? "Following" : "Connect"}
            </button>
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