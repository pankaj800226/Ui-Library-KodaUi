import { useState } from "react";
import { motion } from "framer-motion";
import { FiGlobe, FiCopy, FiCheck, FiArrowUp, FiDatabase } from "react-icons/fi";

const ThreeFooter = () => {
  const [copied, setCopied] = useState(false);

  // SOURCE CODE: Exact same animations and structure
  const sourceCode = `import { motion } from "framer-motion";
import { FiGlobe, FiArrowUp } from "react-icons/fi";

const AmazonStyleFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const columns = [
    { title: "Get to Know Us", links: ["Careers", "Blog", "About Koda", "Sustainability"] },
    { title: "Connect with Us", links: ["Facebook", "Twitter", "Instagram", "GitHub"] },
    { title: "Koda Payment", links: ["Koda Business Card", "Shop with Points", "Reload Balance"] },
    { title: "Let Us Help You", links: ["Your Account", "Shipping Rates", "Returns", "Help"] },
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 flex flex-col items-center">
      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] font-black uppercase tracking-[0.4em] transition-all"
      >
        <FiArrowUp className="inline mr-2" /> Back to Top
      </button>

      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-12 p-16">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-4">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">{col.title}</h4>
            {col.links.map((link) => (
              <a key={link} href="#" className="text-neutral-500 hover:text-blue-500 hover:translate-x-1 transition-all text-[11px] font-bold">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full border-t border-white/5 py-10 flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black text-white italic tracking-tighter uppercase">Koda<span className="text-blue-600">UI</span></span>
          <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-neutral-400 text-[10px] font-black">
            <FiGlobe /> English
          </div>
        </div>
        <p className="text-[9px] text-neutral-700 font-bold uppercase tracking-[0.3em]">© 2026, KodaUI.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const columns = [
    { title: "Get to Know Us", links: ["Careers", "Labs", "Core Architecture", "Sustainability"] },
    { title: "Monetization", links: ["Business Card", "Shop with Nodes", "Currency Reload", "Koda Prime"] },
    { title: "Developer Support", links: ["Your Account", "API Status", "Component Returns", "System Help"] },
    { title: "Integrations", links: ["GitHub", "Framer", "Vercel", "Tailwind"] },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[800px] flex items-center justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-800/10 via-transparent to-transparent">
          
          <div className="w-full">
            {/* Back to Top - Interactive */}
            <motion.button 
              whileHover={{ backgroundColor: "#171717" }}
              className="w-full py-5 bg-neutral-900 text-white text-[10px] font-black uppercase tracking-[0.5em] cursor-pointer"
            >
              <FiArrowUp className="inline-block mr-2 animate-bounce" /> Back to Top
            </motion.button>

            {/* Links Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 py-20 px-10">
              {columns.map((col, i) => (
                <div key={i} className="flex flex-col gap-5">
                  <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-2">{col.title}</h4>
                  {col.links.map((link) => (
                    <motion.a 
                      key={link} 
                      whileHover={{ x: 5, color: "#3b82f6" }}
                      className="text-neutral-500 text-[11px] font-bold cursor-pointer transition-colors"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
              ))}
            </div>

            {/* Language & Region Bar */}
            <div className="w-full border-t border-white/5 py-12 flex flex-col items-center gap-8">
              <div className="flex items-center gap-12">
                <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">Koda<span className="text-blue-500">UI</span></h3>
                
                <div className="flex gap-4">
                  <div className="flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-xl text-neutral-400 text-[10px] font-black hover:border-white transition-colors cursor-pointer">
                    <FiGlobe /> English
                  </div>
                  <div className="flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-xl text-neutral-400 text-[10px] font-black hover:border-white transition-colors cursor-pointer">
                    ₹ INR - Rupee
                  </div>
                </div>
              </div>
              
              <div className="flex gap-8 text-neutral-800 text-[9px] font-black uppercase tracking-[0.3em]">
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Consumer Health</span>
              </div>
              <p className="text-[9px] text-neutral-700 font-bold uppercase tracking-[0.2em]">© 2026, KodaUI_Infrastructure_Global</p>
            </div>
          </div>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-neutral-800 border border-white/10 rounded-2xl">
              <FiDatabase className="text-white" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Module / Amazon_Stack_v3</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">UX: High_Density_Navigation</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-white text-black px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-2xl active:scale-95 cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            {copied ? <><FiCheck /> LOGIC_SYCHRONIZED</> : <><FiCopy /> CLONE_AMAZON_FOOTER</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeFooter;