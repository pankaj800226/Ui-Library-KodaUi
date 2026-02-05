import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiLock, FiArrowLeft, FiRefreshCw, FiCheck, FiCopy, FiZap } from "react-icons/fi";

const FourForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  // FIXED: Added full centering wrapper and robust logic for user copy-paste
  const sourceCode = `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiArrowLeft, FiRefreshCw, FiCheck } from "react-icons/fi";

const PasswordReset = () => {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if(!email) return;
    setIsSent(true);
  };

  return (
    // CENTERED WRAPPER
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent p-6">
      <div className="w-full max-w-md bg-[#09090b] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSent ? (
            <motion.div
              key="request"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Recover</h2>
                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mt-2">Access Restoration v.04</p>
              </div>
              
              <form onSubmit={handleReset} className="space-y-6">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-1 group-focus-within:text-blue-500">Node Email</label>
                  <div className="relative">
                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dev@koda.ui" 
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold" 
                    />
                  </div>
                </div>
                <button type="submit" className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3">
                  Send Recovery Link <FiRefreshCw />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-blue-500">
                <FiCheck size={40} />
              </div>
              <h3 className="text-2xl font-black text-white italic tracking-tighter">Check Your Inbox</h3>
              <p className="text-neutral-500 text-sm mt-4 font-medium px-4 italic leading-relaxed">Authentication link sent to your node.</p>
              <button onClick={() => setIsSent(false)} className="mt-8 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto">
                <FiArrowLeft /> Back to Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* PREVIEW AREA: Flex Centering Applied */}
      <div className="min-h-[700px] p-10 md:p-24 flex items-center justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <div className="w-full max-w-md bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div
                key="req"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="mb-10 text-center">
                  <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
                    <FiLock size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-white italic tracking-tighter">Forgot Password?</h2>
                  <p className="text-neutral-500 text-sm mt-2 font-medium tracking-tight">Reset your secure access node.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setIsSent(true); }} className="space-y-6">
                  <div className="group space-y-2 text-left">
                    <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-1 group-focus-within:text-blue-500 transition-colors">Credential Email</label>
                    <div className="relative">
                      <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        required
                        type="email" 
                        placeholder="admin@koda.ui" 
                        className="w-full bg-neutral-950/50 border border-white/5 rounded-[1.5rem] py-5 pl-14 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold shadow-inner"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-white text-black rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    Authorize Recovery <FiRefreshCw size={14} className="animate-spin-slow" />
                  </button>

                  <button type="button" className="w-full text-[10px] font-black text-neutral-600 hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    <FiArrowLeft /> Back to Login
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-emerald-500 shadow-2xl shadow-emerald-500/10">
                  <FiCheck size={40} />
                </div>
                <h3 className="text-3xl font-black text-white italic tracking-tighter">Link Dispatched</h3>
                <p className="text-neutral-500 text-sm mt-4 font-medium leading-relaxed italic">
                  Authentication payload has been sent to your primary node.
                </p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-12 w-full py-4 bg-white/5 border border-white/5 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer"
                >
                  Resend Link
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl"><FiZap className="text-blue-500" /></div>
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Recovery_Module / Reset_v4</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg active:scale-95"
        >
          {copied ? "RECOVERY CODE COPIED!" : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default FourForm;