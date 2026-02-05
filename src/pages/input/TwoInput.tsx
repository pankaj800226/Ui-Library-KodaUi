import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiZap } from "react-icons/fi";

const TwoInput = () => {
    const [copied, setCopied] = useState(false);

    // SOURCE CODE: Exact same animations as preview (Protocol Sync)
    const sourceCode = `import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

const TerminalInput = () => {
  return (
    <div className="flex items-center justify-center p-20 bg-[#050505]">
      <div className="w-full max-w-sm relative group">
        <div className="flex items-center gap-2 mb-3">
          <FiTerminal className="text-emerald-500 animate-pulse" size={14} />
          <span className="text-[9px] text-emerald-500/50 font-black uppercase tracking-[0.4em]">
            Access_Node / Key_Input
          </span>
        </div>
        
        <div className="relative overflow-hidden rounded-xl">
          <motion.input 
            whileFocus={{ scale: 1.01 }}
            type="password"
            placeholder="****************"
            className="w-full bg-black border border-emerald-500/20 py-5 px-6 text-emerald-500 text-xs font-mono tracking-widest outline-none focus:border-emerald-500 focus:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all placeholder:text-emerald-900"
          />
          
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-emerald-500/10 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalInput;`;

    const handleCopy = () => {
        navigator.clipboard.writeText(sourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 flex flex-col items-center">
            <div className="w-full bg-neutral-950 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">

                {/* PREVIEW AREA (Centered) */}
                <div className="min-h-[400px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent p-12">

                    <div className="w-full max-w-sm relative group">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                            </div>
                            <span className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.5em] group-focus-within:text-emerald-500 transition-colors">
                                Auth_Session_v2
                            </span>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/5 group-focus-within:border-emerald-500/50 transition-colors duration-500">
                            <motion.input
                                whileFocus={{ backgroundColor: "rgba(0,0,0,0.8)" }}
                                type="text"
                                placeholder="ENTRY_ENCRYPTION_KEY..."
                                className="w-full bg-neutral-900/30 py-7 px-8 text-emerald-400 text-[11px] font-mono tracking-[0.4em] outline-none transition-all placeholder:text-emerald-900/50"
                            />

                            {/* Matrix Scanning Line */}
                            <motion.div
                                animate={{ top: ["-100%", "200%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-[50px] bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none"
                            />

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-500 opacity-0 group-focus-within:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-500 opacity-0 group-focus-within:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>

                {/* FOOTER ACTION BAR */}
                <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                            <FiZap className="text-emerald-500" size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Node / Terminal_Input_v2</p>
                            <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Effect: Matrix_Scanner_Active</p>
                        </div>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="w-full md:w-auto bg-neutral-900 hover:bg-emerald-500 hover:text-black border border-white/10 px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
                    >
                        {copied ? <><FiCheck /> SCANNER_SYNCED</> : "CLONE TERMINAL SOURCE"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TwoInput;