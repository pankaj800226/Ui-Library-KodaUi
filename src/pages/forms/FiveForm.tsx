import { useState } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { FiMail, FiLock, FiZap, FiCopy, FiCheck } from "react-icons/fi";

const FiveForm = () => {
  const [isOn, setIsOn] = useState(false);
  const [copied, setCopied] = useState(false);
  const controls = useAnimation();
  const y = useMotionValue(0);

  // Transform drag value to string stretch
  const stringHeight = useTransform(y, [0, 100], [40, 120]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: any): void => {
    if (info.offset.y > 50) {
      setIsOn((prev) => !prev);
    }
    controls.start({ y: 0 });
  };

  const sourceCode = `import { useState } from "react";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { FiMail, FiLock, FiZap } from "react-icons/fi";

const LampRevealForm = () => {
  const [isOn, setIsOn] = useState(false);
  const controls = useAnimation();
  const y = useMotionValue(0);
  const stringHeight = useTransform(y, [0, 100], [40, 120]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] p-6 overflow-hidden">
      {/* Interactive String Logic */}
      <div className="relative flex flex-col items-center z-50 mb-4">
        <motion.div 
          style={{ height: stringHeight }} 
          className={\`w-[2px] transition-colors duration-500 \${isOn ? "bg-yellow-400" : "bg-neutral-700"}\`} 
        />
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 100 }}
          animate={controls}
          style={{ y }}
          onDragEnd={(_, info) => {
            if (info.offset.y > 40) setIsOn(!isOn);
            controls.start({ y: 0 });
          }}
          className={\`w-10 h-10 rounded-full cursor-grab active:cursor-grabbing border-2 flex items-center justify-center transition-all shadow-2xl \${
            isOn ? "bg-yellow-400 border-yellow-200" : "bg-neutral-800 border-neutral-600"
          }\`}
        >
          <div className={\`w-2 h-2 rounded-full \${isOn ? "bg-yellow-900" : "bg-neutral-500"}\`} />
        </motion.div>
      </div>

      {/* Glow & Form Container */}
      <div className="relative w-full max-w-md">
        <div className={\`absolute inset-0 bg-yellow-400/10 blur-[120px] transition-opacity duration-1000 \${isOn ? "opacity-100" : "opacity-0"}\`} />
        
        <motion.div 
          animate={{ opacity: isOn ? 1 : 0.05, y: isOn ? 0 : 20, scale: isOn ? 1 : 0.95 }}
          className={\`bg-neutral-900/80 backdrop-blur-2xl border p-10 rounded-[3rem] shadow-2xl transition-colors \${isOn ? "border-yellow-400/20" : "border-white/5 pointer-events-none"}\`}
        >
          <h2 className="text-3xl font-black text-white italic tracking-tighter mb-8">Access Node</h2>
          <div className="space-y-4">
             <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-yellow-500/50 transition-all font-bold" />
             <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-yellow-500/50 transition-all font-bold" />
             <button className="w-full py-4 bg-yellow-400 text-yellow-900 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg">Initialize</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};`;

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">

      {/* PREVIEW AREA */}
      <div className="p-10 md:p-32 flex flex-col items-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent min-h-[700px] justify-center">

        {/* Interactive String (Rasi) */}
        <div className="relative flex flex-col items-center z-50 mb-4">
          <motion.div
            style={{ height: stringHeight }}
            className={`w-[3px] transition-colors duration-500 ${isOn ? 'bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)]' : 'bg-neutral-700'}`}
          />
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 100 }}
            animate={controls}
            style={{ y }}
            onDragEnd={handleDragEnd}
            className={`w-10 h-10 rounded-full cursor-grab active:cursor-grabbing border-4 flex items-center justify-center transition-all duration-500 shadow-2xl ${isOn ? "bg-yellow-400 border-yellow-200 shadow-yellow-400/20" : "bg-neutral-800 border-neutral-700"
              }`}
          >
            <div className={`w-3 h-3 rounded-full ${isOn ? "bg-yellow-600" : "bg-neutral-600"}`} />
          </motion.div>
          <p className="absolute -right-28 top-10 text-[10px] font-black text-neutral-600 uppercase tracking-widest animate-pulse whitespace-nowrap">Pull to Light</p>
        </div>

        {/* Lamp and Form Container */}
        <div className="relative w-full max-w-md">
          <div className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] h-[500px] bg-yellow-400/10 blur-[100px] rounded-full transition-opacity duration-1000 ${isOn ? "opacity-100" : "opacity-0"}`} />

          <motion.div
            animate={{
              opacity: isOn ? 1 : 0.05,
              scale: isOn ? 1 : 0.95,
              y: isOn ? 0 : 20
            }}
            transition={{ type: "spring", damping: 15 }}
            className={`bg-neutral-900/40 backdrop-blur-3xl border p-12 rounded-[3.5rem] shadow-2xl transition-colors duration-700 ${isOn ? "border-yellow-400/30" : "border-white/5 pointer-events-none"}`}
          >
            <div className="mb-10 text-center">
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-700 ${isOn ? "bg-yellow-400 text-yellow-900 shadow-2xl shadow-yellow-400/40" : "bg-neutral-800 text-neutral-600"}`}>
                <FiZap size={30} className={isOn ? "animate-bounce" : ""} />
              </div>
              <h2 className="text-4xl font-black text-white italic tracking-tighter">Illuminated Access</h2>
              <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.3em] mt-3">Koda Security Node</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <div className="relative">
                  <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700" />
                  <input type="email" placeholder="Identity Email" className="w-full bg-neutral-950 border border-white/5 rounded-2xl py-5 pl-14 pr-4 text-sm text-white focus:border-yellow-500/50 outline-none transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700" />
                  <input type="password" placeholder="••••••••" className="w-full bg-neutral-950 border border-white/5 rounded-2xl py-5 pl-14 pr-4 text-sm text-white focus:border-yellow-500/50 outline-none transition-all font-black tracking-widest" />
                </div>
              </div>
              <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 ${isOn ? "bg-yellow-400 text-yellow-900 hover:bg-white hover:text-black cursor-pointer" : "bg-neutral-800 text-neutral-600"}`}>
                Initialize Node
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-500/10 rounded-xl"><FiZap className="text-yellow-500" /></div>
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / LampReveal_v5</p>
        </div>

        <button
          onClick={async () => {
            await navigator.clipboard.writeText(sourceCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all cursor-pointer shadow-lg active:scale-95"
        >
          {copied ? <><FiCheck /> PHYSICS LOGIC COPIED</> : <><FiCopy /> COPY LAMP COMPONENT</>}
        </button>
      </div>
    </div>
  );
};

export default FiveForm;