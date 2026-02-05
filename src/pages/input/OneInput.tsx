import { useState } from "react";
import { motion } from "framer-motion";
import { FiHash, FiCheck, FiCpu } from "react-icons/fi";

const OneInput = () => {
  const [copied, setCopied] = useState(false);

  // SOURCE CODE: Preview aur Code ki animations ekdum identical hain
  const sourceCode = `import { motion } from "framer-motion";
import { FiHash } from "react-icons/fi";

const NeuralInput = () => {
  return (
    <div className="flex items-center justify-center p-20 bg-[#050505]">
      <div className="w-full max-w-sm relative group">
        {/* Label Animation */}
        <label className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.4em] mb-3 block group-focus-within:text-blue-500 transition-colors">
          System_Registry / Entry
        </label>
        
        <div className="relative">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors">
            <FiHash size={16} />
          </div>

          <motion.input 
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="TYPE_DATA_STREAM..."
            className="w-full bg-neutral-900 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-white text-xs font-bold tracking-widest outline-none focus:border-blue-500/50 focus:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all placeholder:text-neutral-800"
          />
          
          {/* Animated Bottom Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-focus-within:w-[80%] transition-all duration-500 blur-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default NeuralInput;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[400px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent p-12">
          
          <div className="w-full max-w-sm relative group">
            {/* Minimal Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.4em] group-focus-within:text-blue-500 transition-colors">
                Input_Field_01
              </span>
              <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
            </div>

            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 group-focus-within:rotate-12 transition-all duration-300">
                <FiHash size={18} />
              </div>

              <motion.input 
                whileFocus={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
                }}
                type="text"
                placeholder="EXECUTE_ENTRY..."
                className="w-full bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl py-7 pl-16 pr-8 text-white text-[11px] font-black tracking-[0.3em] outline-none focus:border-blue-500 transition-all duration-500 placeholder:text-neutral-800"
              />

              {/* Glowing Underline Animation */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-focus-within:opacity-100 transition-all duration-700 blur-[2px]"
              />
            </div>
          </div>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <FiCpu className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Node / Input_Field_v1</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Logic: Focus_Pulse_State</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            {copied ? <><FiCheck className="text-emerald-500" /> SOURCE_ANIM_SYNCED</> : "COPY INPUT SOURCE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneInput;