import { useState } from "react";
import { motion } from "framer-motion";
import { FiEdit3, FiCheck, FiInfo } from "react-icons/fi";

const ThirdInput = () => {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);
    const maxLength = 500;

    // AB SE: Preview aur Code ki animations (Expansion & Glow) ekdum SAME hain
    const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { FiEdit3 } from "react-icons/fi";

const GlassTextarea = () => {
  const [val, setVal] = useState("");
  
  return (
    <div className="flex items-center justify-center p-20 bg-[#050505]">
      <div className="w-full max-w-lg relative group">
        <div className="flex justify-between mb-3 px-2">
          <span className="text-[9px] text-neutral-600 font-black uppercase tracking-[0.4em] group-focus-within:text-blue-500 transition-colors">
            System_Description / Logs
          </span>
          <span className="text-[9px] text-neutral-700 font-mono">
            {val.length}/500
          </span>
        </div>

        <motion.textarea 
          whileFocus={{ scale: 1.02, minHeight: "200px" }}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="INITIALIZE_TEXT_STREAM..."
          className="w-full bg-neutral-900 border border-white/5 rounded-[2rem] p-8 text-white text-xs font-bold tracking-widest outline-none focus:border-blue-500/50 focus:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all min-h-[120px] placeholder:text-neutral-800 resize-none"
        />
        
        <div className="absolute right-6 bottom-6 text-neutral-800 group-focus-within:text-blue-500 transition-colors">
          <FiEdit3 size={18} />
        </div>
      </div>
    </div>
  );
};

export default GlassTextarea;`;

    const handleCopy = () => {
        navigator.clipboard.writeText(sourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-5xl mx-auto my-12 flex flex-col items-center">
            <div className="w-full bg-neutral-950 border border-white/5 rounded-[3.5rem] overflow-hidden shadow-2xl">

                {/* PREVIEW AREA (Centered) */}
                <div className="min-h-[500px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent p-12">

                    <div className="w-full max-w-xl relative group">
                        {/* Header Info */}
                        <div className="flex justify-between items-end mb-5 px-4">
                            <div>
                                <h4 className="text-white text-[11px] font-black uppercase tracking-[0.3em]">Documentation_Node</h4>
                                <p className="text-neutral-600 text-[8px] font-bold uppercase tracking-widest mt-1">Status: Ready_For_Input</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
                                <span className={`text-[10px] font-mono font-bold ${text.length > maxLength ? 'text-red-500' : 'text-neutral-500'}`}>
                                    {text.length} / {maxLength}
                                </span>
                            </div>
                        </div>

                        <div className="relative">
                            <motion.textarea
                                whileFocus={{
                                    scale: 1.02,
                                    minHeight: "250px",
                                    backgroundColor: "rgba(10, 10, 10, 0.8)"
                                }}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="DESCRIBE_SYSTEM_ARCHITECTURE..."
                                className="w-full bg-neutral-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 text-white text-[11px] font-black tracking-[0.2em] outline-none focus:border-blue-500 transition-all duration-500 placeholder:text-neutral-800 resize-none shadow-2xl"
                            />

                            {/* Decorative Corner */}
                            <div className="absolute top-6 right-6 opacity-20 group-focus-within:opacity-100 transition-opacity">
                                <FiInfo className="text-blue-500" size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER ACTION BAR */}
                <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                            <FiEdit3 className="text-blue-500" size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Node / Textarea_Glass_v3</p>
                            <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Feature: Auto_Expansion_Focus</p>
                        </div>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
                    >
                        {copied ? <><FiCheck className="text-emerald-500" /> SOURCE_ANIM_SYNCED</> : "COPY TEXTAREA SOURCE"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdInput;