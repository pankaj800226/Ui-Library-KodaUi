import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiZap, FiShield, FiArrowRight } from "react-icons/fi";

const DualPrice = () => {
  const [copied, setCopied] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiZap, FiArrowRight } from "react-icons/fi";

const BinaryPricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] p-6">
      {/* Toggle */}
      <div className="mb-16 flex bg-neutral-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-xl">
        <button onClick={() => setAnnual(true)} className={\`px-8 py-2.5 rounded-xl text-[10px] font-black transition-all \${annual ? "bg-white text-black shadow-lg" : "text-neutral-500"}\`}>YEARLY</button>
        <button onClick={() => setAnnual(false)} className={\`px-8 py-2.5 rounded-xl text-[10px] font-black transition-all \${!annual ? "bg-white text-black shadow-lg" : "text-neutral-500"}\`}>MONTHLY</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Starter Plan */}
        <motion.div whileHover={{ y: -5 }} className="bg-neutral-900/40 border border-white/5 p-10 rounded-[3rem] relative overflow-hidden group">
          <h3 className="text-white text-xl font-black italic uppercase tracking-tighter">Starter</h3>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2 mb-8">Basic Node Access</p>
          <div className="mb-10">
            <span className="text-4xl font-black text-white italic tracking-tighter">₹0</span>
            <span className="text-neutral-700 text-xs font-bold uppercase ml-2 tracking-widest">/ Free</span>
          </div>
          <ul className="space-y-4 mb-10">
            {["10 Components", "Community Support", "Basic Export"].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-neutral-400"><FiCheck className="text-neutral-600" /> {f}</li>
            ))}
          </ul>
          <button className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Initialize</button>
        </motion.div>

        {/* Elite Plan */}
        <motion.div whileHover={{ y: -5 }} className="bg-indigo-600/5 border border-indigo-500 p-10 rounded-[3rem] relative overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.1)]">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><FiZap size={80} className="text-indigo-500" /></div>
          <h3 className="text-white text-xl font-black italic uppercase tracking-tighter">Elite</h3>
          <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2 mb-8">Full Kernel Access</p>
          <div className="mb-10">
            <span className="text-4xl font-black text-white italic tracking-tighter">₹{annual ? "7,999" : "799"}</span>
            <span className="text-neutral-600 text-xs font-bold uppercase ml-2 tracking-widest">/ {annual ? "yr" : "mo"}</span>
          </div>
          <ul className="space-y-4 mb-10">
            {["Unlimited Components", "Private Source", "Commercial License", "24/7 Priority"].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-neutral-300"><FiCheck className="text-indigo-500" /> {f}</li>
            ))}
          </ul>
          <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2">Execute Plan <FiArrowRight /></button>
        </motion.div>
      </div>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[850px] p-10 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent">
          
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-black italic tracking-tighter uppercase leading-none">Choose Your<br/>Node Level</h2>
          </div>

          {/* Toggle */}
          <div className="mb-16 flex items-center gap-3 bg-neutral-900/50 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/5">
            <button onClick={() => setIsAnnual(true)} className={`px-10 py-3.5 rounded-[1.5rem] text-[10px] font-black transition-all ${isAnnual ? "bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.1)]" : "text-neutral-500 hover:text-white"}`}>YEARLY</button>
            <button onClick={() => setIsAnnual(false)} className={`px-10 py-3.5 rounded-[1.5rem] text-[10px] font-black transition-all ${!isAnnual ? "bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.1)]" : "text-neutral-500 hover:text-white"}`}>MONTHLY</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl px-4">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.15)" }}
              className="relative p-12 rounded-[3.5rem] border border-white/5 bg-neutral-900/30 backdrop-blur-sm group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 text-neutral-500">
                <FiShield size={24} />
              </div>
              <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Starter</h3>
              <p className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.4em] mt-3 mb-10">Limited Node Access</p>
              
              <div className="mb-10">
                <span className="text-5xl font-black text-white italic tracking-tighter">₹0</span>
                <span className="text-neutral-700 text-xs font-bold uppercase ml-3 tracking-widest">/ Free</span>
              </div>

              <ul className="space-y-5 mb-12">
                {["10 Core Components", "Community Support", "Standard Export"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-neutral-500">
                    <FiCheck className="text-neutral-700" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-6 rounded-[1.8rem] border border-white/10 bg-white/5 text-white font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all cursor-pointer">
                Initialize Free
              </button>
            </motion.div>

            {/* Elite Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="relative p-12 rounded-[3.5rem] border border-indigo-500 bg-indigo-600/5 shadow-[0_30px_70px_rgba(79,70,229,0.15)] group"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
                <FiZap size={100} className="text-indigo-500" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(79,70,229,0.4)] text-white">
                <FiZap size={24} />
              </div>
              <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Elite Node</h3>
              <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mt-3 mb-10">Full System Access</p>
              
              <div className="mb-10">
                <span className="text-5xl font-black text-white italic tracking-tighter">₹{isAnnual ? "7,999" : "799"}</span>
                <span className="text-neutral-600 text-xs font-bold uppercase ml-3 tracking-widest">/ {isAnnual ? "yr" : "mo"}</span>
              </div>

              <ul className="space-y-5 mb-12">
                {["Unlimited Modules", "Source Code Access", "Commercial License", "24/7 Core Support"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-neutral-300">
                    <FiCheck className="text-indigo-500" /> {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-6 rounded-[1.8rem] bg-indigo-600 text-white font-black text-[10px] uppercase tracking-[0.4em] shadow-[0_15px_30px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all cursor-pointer flex items-center justify-center gap-3">
                Execute Elite <FiArrowRight />
              </button>
            </motion.div>
          </div>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl"><FiZap className="text-indigo-500" size={20} /></div>
            <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.5em]">Pricing_Kernel / Dual_Node_v4</p>
          </div>

          <button onClick={handleCopy} className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-2xl text-[10px] font-black transition-all active:scale-95 shadow-2xl hover:bg-indigo-600 hover:text-white uppercase tracking-widest">
            {copied ? "NODE_SOURCE_COPIED" : "COPY FULL COMPONENT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DualPrice;