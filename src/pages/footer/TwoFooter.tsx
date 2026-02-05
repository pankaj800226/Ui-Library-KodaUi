import { useState } from "react";
import { motion } from "framer-motion";
import {FiGithub, FiCopy, FiCheck, FiLayout } from "react-icons/fi";

const TwoFooter = () => {
  const [copied, setCopied] = useState(false);

  const sourceCode = `import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const FloatingFooter = () => {
  return (
    <div className="w-full flex justify-center p-10 bg-[#050505]">
      <footer className="w-full max-w-4xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 p-12 rounded-[3.5rem] flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black font-black text-xl mb-6">K</div>
          <h2 className="text-white text-3xl font-black italic tracking-tighter uppercase">Koda UI Architecture</h2>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.4em] mt-4">Next Gen Component Protocol</p>
        </div>

        <div className="flex gap-12 my-12">
          {["Work", "Labs", "Store", "Contact"].map((item) => (
            <a key={item} href="#" className="group flex items-center gap-1 text-white/40 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest">
              {item} <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="w-full pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.3em]">Built by Developers for Creators</span>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-xs"><FiGithub /></a>
          </div>
          <span className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.3em]">© 2026 NODE_02</span>
        </div>
      </footer>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[700px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent p-6 md:p-12">
          
          <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl bg-neutral-900/30 backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-[4rem] flex flex-col items-center shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          >
            {/* Brand Identity */}
            <div className="flex flex-col items-center text-center">
              <motion.div 
                whileHover={{ rotate: 90 }}
                className="w-16 h-16 bg-gradient-to-br from-white to-neutral-400 rounded-[1.5rem] flex items-center justify-center text-black font-black text-2xl shadow-2xl mb-8 cursor-pointer"
              >
                K
              </motion.div>
              <h2 className="text-white text-4xl font-black italic tracking-tighter uppercase leading-none">
                Engineering<br/>The Future
              </h2>
              <div className="h-1 w-12 bg-white/10 rounded-full mt-8" />
            </div>

            {/* Floating Navigation */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 my-16">
              {["Showcase", "Modules", "License", "Security"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="group relative text-neutral-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.4em]"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Bottom Stack */}
            <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <p className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.5em]">
                System_Status: Optimal
              </p>
              
              <div className="flex items-center gap-8">
                <a href="#" className="text-neutral-500 hover:text-white transition-all transform hover:scale-125"><FiGithub size={18}/></a>
                <div className="h-4 w-[1px] bg-white/5" />
                <button className="text-[9px] text-white font-black uppercase tracking-[0.4em] hover:text-neutral-400 transition-colors cursor-pointer">
                  Back_To_Top ↑
                </button>
              </div>

              <p className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.5em]">
                Koda_Release_2.0
              </p>
            </div>
          </motion.footer>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white">
              <FiLayout size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Node / Floating_Footer_v2</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Design: Island_Layout</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-2xl active:scale-95 cursor-pointer hover:bg-neutral-200"
          >
            {copied ? <><FiCheck /> CLONED TO NODE</> : <><FiCopy /> COPY SOURCE</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFooter;