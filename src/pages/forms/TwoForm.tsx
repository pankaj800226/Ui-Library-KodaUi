import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe, FiCheck, FiArrowRight, FiArrowLeft, FiCopy, FiZap } from "react-icons/fi";

const TwoForm = () => {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);

  const nextStep = () => setStep((p) => Math.min(p + 1, 3));
  const prevStep = () => setStep((p) => Math.max(p - 1, 1));

  const sourceCode = `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiGlobe, FiCheck, FiArrowRight, FiArrowLeft } from "react-icons/fi";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  
  return (
    // CENTERED WRAPPER FOR USER
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent p-6">
      <div className="w-full max-w-md bg-[#09090b] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl">
        {/* Progress Tracker */}
        <div className="flex gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className={\`h-1.5 flex-1 rounded-full transition-all duration-500 \${step >= s ? "bg-blue-500" : "bg-white/10"}\`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-black italic text-white tracking-tighter">Identity.</h3>
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 text-white text-sm font-bold" />
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-black italic text-white tracking-tighter">Origin.</h3>
                <input type="text" placeholder="Location" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 text-white text-sm font-bold" />
              </div>
            )}
            {step === 3 && (
              <div className="text-center py-6 space-y-4">
                 <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-500 shadow-xl shadow-blue-500/10"><FiCheck size={30} /></div>
                 <h3 className="text-2xl font-black italic text-white tracking-tighter">Access Ready</h3>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4 mt-10">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="p-4 bg-white/5 text-white border border-white/5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"><FiArrowLeft /></button>
          )}
          <button 
            onClick={() => step < 3 ? setStep(step + 1) : alert('Finalizing...')}
            className="flex-1 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {step === 3 ? "Complete" : "Next Step"} <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};`;

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* PREVIEW AREA: Centered via Flexbox */}
      <div className="min-h-[750px] p-10 md:p-24 flex items-center justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <div className="w-full max-w-md bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Progress Tracker */}
          <div className="flex items-center justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-1 items-center last:flex-none">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-[10px] transition-all duration-500 ${step >= s ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-neutral-800 text-neutral-500"}`}>
                  {step > s ? <FiCheck /> : s}
                </div>
                {s < 3 && <div className={`h-[2px] flex-1 mx-2 rounded-full transition-all duration-700 ${step > s ? "bg-blue-600" : "bg-neutral-800"}`} />}
              </div>
            ))}
          </div>

          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black italic text-white tracking-tighter">Identity.</h3>
                      <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mt-1">Step 01: Profile Node</p>
                    </div>
                    <div className="space-y-4">
                       <input type="text" placeholder="Legal Name" className="w-full bg-neutral-950 border border-white/5 rounded-2xl py-5 px-6 text-sm text-white focus:border-blue-500 outline-none transition-all placeholder:text-neutral-700 font-bold" />
                       <input type="email" placeholder="Email Address" className="w-full bg-neutral-950 border border-white/5 rounded-2xl py-5 px-6 text-sm text-white focus:border-blue-500 outline-none transition-all placeholder:text-neutral-700 font-bold" />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black italic text-white tracking-tighter">Origin.</h3>
                      <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mt-1">Step 02: Geolocation</p>
                    </div>
                    <div className="space-y-4">
                       <div className="relative">
                          <FiGlobe className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-600" />
                          <input type="text" placeholder="City Node" className="w-full bg-neutral-950 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-sm text-white focus:border-blue-500 outline-none transition-all placeholder:text-neutral-700 font-bold" />
                       </div>
                       <select className="w-full bg-neutral-950 border border-white/5 rounded-2xl py-5 px-6 text-sm text-neutral-400 focus:border-blue-500 outline-none transition-all font-bold appearance-none">
                          <option>Select Tier</option>
                          <option>Free Developer</option>
                          <option>Enterprise Hub</option>
                       </select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-4">
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }}
                      className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-2xl shadow-emerald-500/10"
                    >
                      <FiCheck size={40} />
                    </motion.div>
                    <h3 className="text-3xl font-black italic text-white tracking-tighter">Verified.</h3>
                    <p className="text-neutral-500 text-sm mt-2 font-medium">Node sync complete.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 mt-12">
            {step > 1 && (
              <button 
                onClick={prevStep}
                className="p-5 bg-white/5 text-white border border-white/5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer active:scale-90"
              >
                <FiArrowLeft size={20} />
              </button>
            )}
            <button 
              onClick={nextStep}
              className="flex-1 py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              {step === 3 ? "Complete Sync" : <>Next Step <FiArrowRight /></>}
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl"><FiZap className="text-blue-500" /></div>
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / MultiStep_Flow_v2</p>
        </div>

        <button
          onClick={async () => {
            await navigator.clipboard.writeText(sourceCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer active:scale-95 shadow-lg"
        >
          {copied ? "NODE CODE COPIED!" : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default TwoForm;