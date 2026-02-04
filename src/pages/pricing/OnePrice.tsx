import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiZap, FiCheckCircle } from "react-icons/fi";

const CyberPricing = () => {
  const [copied, setCopied] = useState(false);

  // Full logic-ready code string for the user
  const premiumCode = `import { motion } from "framer-motion";
import { FiCheckCircle, FiZap } from "react-icons/fi";

const KodaProCard = () => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="relative w-full max-w-[380px] bg-[#0b0f1a] border border-blue-500/30 rounded-[2.5rem] p-8 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]"
    >
      {/* Top Accent Beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_#3b82f6]" />

      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-2">Power Tier</h3>
          <h2 className="text-white text-3xl font-black italic tracking-tighter">Pro <span className="text-blue-500">Max</span></h2>
        </div>
        <div className="p-3 bg-blue-600/10 rounded-2xl border border-blue-500/20">
          <FiZap className="text-blue-500" size={24} />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black text-white italic">₹999</span>
          <span className="text-neutral-500 font-bold text-sm">/mo</span>
        </div>
        <p className="text-neutral-400 text-xs mt-2 font-medium">Perfect for scaling professional teams.</p>
      </div>

      <ul className="space-y-4 mb-10">
        {["Unlimited Blocks", "24/7 Priority", "Custom Themes", "Private Beta"].map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm font-bold text-neutral-300">
            <FiCheckCircle className="text-blue-500" /> {f}
          </li>
        ))}
      </ul>

      <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/30 transition-all active:scale-95">
        Upgrade Now
      </button>
    </motion.div>
  );
};

export default KodaProCard;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(premiumCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl group">
      
      {/* --- PREVIEW SECTION --- */}
      <div className="p-10 md:p-20 flex justify-center items-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative w-full max-w-[380px] bg-neutral-900/40 backdrop-blur-3xl border border-blue-500/30 rounded-[2.5rem] p-10 overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.1)]"
        >
          {/* Neon Top Beam */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-blue-500 shadow-[0_0_20px_#3b82f6]" />

          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-2">Most Popular</p>
              <h2 className="text-white text-4xl font-black italic tracking-tighter">Pro <span className="text-blue-500">Max</span></h2>
            </div>
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
               <FiZap size={28} className="animate-pulse" />
            </div>
          </div>

          <div className="mb-10">
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-black text-white italic">₹999</span>
              <span className="text-neutral-500 font-bold text-sm tracking-widest uppercase">/Mo</span>
            </div>
            <p className="text-neutral-500 text-sm mt-3 leading-relaxed">Everything you need to ship products at light speed.</p>
          </div>

          <div className="space-y-5 mb-12">
            {["Unlimited Blocks", "Priority Support", "Custom CSS Engines"].map((f, i) => (
              <div key={i} className="flex items-center gap-3 group/item">
                <FiCheckCircle className="text-blue-500 group-hover/item:scale-125 transition-transform" />
                <span className="text-sm font-bold text-neutral-300 tracking-tight">{f}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/40 transition-all hover:-translate-y-1 active:scale-95">
             Get Full Access
          </button>

          {/* Abstract background light */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600/10 blur-[60px] rounded-full pointer-events-none" />
        </motion.div>
      </div>

      {/* --- COPY TOOLBAR --- */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
            <FiZap className="text-blue-500" />
          </div>
          <div>
            <p className="text-white font-black text-sm italic">Cyber_Pricing_v1</p>
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">KodaUI Core Component</p>
          </div>
        </div>

        <button 
          onClick={handleCopy}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-black px-10 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all active:scale-95 shadow-xl"
        >
          {copied ? <><FiCheckCircle /> Code Copied!</> : <><FiCopy /> Copy Premium Code</>}
        </button>
      </div>
    </div>
  );
};

export default CyberPricing;