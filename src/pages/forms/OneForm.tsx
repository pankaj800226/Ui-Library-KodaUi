import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight, FiCheck, FiCopy } from "react-icons/fi";

const OneForm = () => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // FIXED: Source code now includes the centering wrapper
  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUser, FiArrowRight } from "react-icons/fi";

const AuthForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent p-6">
      <div className="w-full max-w-md bg-[#09090b] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
        <h2 className="text-3xl font-black text-white italic tracking-tighter mb-2">Join the Club.</h2>
        <p className="text-neutral-500 text-sm mb-8 font-medium">Enter your details to sync with the node.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em] ml-2">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input type="text" placeholder="John Koda" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-medium" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em] ml-2">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
              <input type="email" placeholder="hello@koda.ui" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-medium" />
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
            {loading ? "Syncing..." : "Initialize Access"}
          </button>
        </form>
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
      
      {/* PREVIEW AREA: Flex Center applied here for the viewer */}
      <div className="min-h-[750px] p-10 md:p-24 flex items-center justify-center bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-md bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-2xl"
        >
          <div className="mb-10 text-center">
             <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
                <FiLock size={28} />
             </div>
             <h2 className="text-3xl font-black text-white italic tracking-tighter">Secure Login</h2>
             <p className="text-neutral-500 text-sm mt-2 font-medium">Build fast, stay secure.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setIsLoading(true); setTimeout(() => setIsLoading(false), 2000); }} className="space-y-6">
            <div className="group space-y-2">
              <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] ml-1 group-focus-within:text-blue-500 transition-colors">Credential ID</label>
              <div className="relative">
                <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-neutral-950/50 border border-white/5 rounded-[1.5rem] py-5 pl-14 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold placeholder:text-neutral-700 shadow-inner"
                />
              </div>
            </div>

            <div className="group space-y-2">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] group-focus-within:text-blue-500 transition-colors">Access Code</label>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest cursor-pointer hover:underline">Reset?</span>
              </div>
              <div className="relative">
                <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-neutral-950/50 border border-white/5 rounded-[1.5rem] py-5 pl-14 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-black tracking-widest placeholder:text-neutral-700 shadow-inner"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="group w-full py-5 bg-white text-black rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              {isLoading ? "Validating..." : <>{ "Authorize Access" } <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></>}
            </button>
          </form>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl">
             <FiCheck className="text-blue-500" />
          </div>
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Form_Module / Auth_v1</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer"
        >
          {copied ? "FIXED SOURCE COPIED" : <><FiCopy /> COPY CENTERED CODE</>}
        </button>
      </div>
    </div>
  );
};

export default OneForm;