import { useState } from "react";
import { motion } from "framer-motion";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiCopy, FiCheck, FiCpu } from "react-icons/fi";

const OneFooter = () => {
    const [copied, setCopied] = useState(false);

    const sourceCode = `import { motion } from "framer-motion";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-16 px-10 flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Koda<span className="text-blue-600">UI</span></h2>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.2em] mt-4 max-w-xs leading-relaxed">
            The next generation component library for high-end digital experiences. Built for speed and precision.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Navigation</h4>
          {["Components", "Templates", "Pricing", "Documentation"].map((item) => (
            <a key={item} href="#" className="text-neutral-500 hover:text-white text-xs font-bold transition-colors uppercase tracking-widest">{item}</a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Social</h4>
          <div className="flex gap-4">
            {[FiTwitter, FiGithub, FiLinkedin, FiInstagram].map((Icon, i) => (
              <a key={i} href="#" className="p-3 bg-white/5 hover:bg-blue-600 rounded-xl text-neutral-400 hover:text-white transition-all border border-white/5">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-neutral-700 font-black uppercase tracking-[0.5em]">© 2026 KodaUI_Kernel. All Rights Reserved.</p>
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
          <span className="text-[10px] text-neutral-500 font-black uppercase tracking-widest">System_Online</span>
        </div>
      </div>
    </footer>
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
                <div className="min-h-[600px] flex items-center justify-center bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent p-10">

                    <div className="w-full max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                            {/* Brand Section */}
                            <div className="md:col-span-2">
                                <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">
                                    Koda<span className="text-blue-500">UI</span>
                                </h2>
                                <p className="text-neutral-600 text-[10px] font-black uppercase tracking-[0.3em] mt-6 max-w-sm leading-loose">
                                    Architecting the future of web interfaces with precision-engineered React components. Fully modular, high-performance.
                                </p>
                            </div>

                            {/* Links Sections */}
                            <div className="flex flex-col gap-6">
                                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-2 text-blue-500">Resources</h4>
                                {["Library", "Pro_Modules", "Changelog", "Support"].map((link) => (
                                    <a key={link} href="#" className="text-neutral-500 hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:translate-x-1">
                                        {link}
                                    </a>
                                ))}
                            </div>

                            {/* Socials Section */}
                            <div className="flex flex-col gap-6">
                                <h4 className="text-white text-[10px] font-black uppercase tracking-[0.5em] mb-2 text-blue-500">Connect</h4>
                                <div className="flex flex-wrap gap-3">
                                    {[FiTwitter, FiGithub, FiLinkedin, FiInstagram].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            whileHover={{ y: -4, backgroundColor: "rgba(59, 130, 246, 1)", color: "white" }}
                                            className="p-4 bg-white/5 border border-white/5 rounded-2xl text-neutral-500 transition-all cursor-pointer"
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex items-center gap-4">
                                <p className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.6em]">
                                    © 2026 KodaUI_Architecture
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                                    <span className="text-[9px] text-neutral-600 font-black uppercase tracking-widest">Protocol_Active</span>
                                </div>
                                <span className="text-[9px] text-neutral-800 font-black uppercase tracking-widest">v.7.0.4_Stable</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER ACTION BAR */}
                <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <FiCpu className="text-blue-500" size={20} />
                        </div>
                        <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.5em]">Module / Base_Footer_v1</p>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
                    >
                        {copied ? <><FiCheck /> SOURCE_SYNCED</> : <><FiCopy /> CLONE_FOOTER</>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OneFooter;