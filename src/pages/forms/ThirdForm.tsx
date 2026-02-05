import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiUploadCloud, FiCheck, FiCopy, FiEye, FiEyeOff } from "react-icons/fi";

const ThirdForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState("");

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiUploadCloud, FiEye, FiEyeOff } from "react-icons/fi";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [fileName, setFileName] = useState("");

  return (
    // CENTERED WRAPPER
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent p-6">
      <div className="w-full max-w-lg bg-[#09090b] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
        <h2 className="text-3xl font-black text-white italic tracking-tighter mb-8 text-center uppercase">Create Identity</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                  <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-2">Username</label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
                    <input type="text" placeholder="koda_01" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold" />
                  </div>
              </div>
              <div className="space-y-2">
                  <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-2">Email</label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
                    <input type="email" placeholder="dev@koda.ui" className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold" />
                  </div>
              </div>
          </div>

          <div className="space-y-2 relative">
              <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-2">Password</label>
              <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
                  <input 
                    type={showPass ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-sm text-white focus:border-blue-500 outline-none transition-all font-black tracking-widest" 
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors cursor-pointer">
                      {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
              </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-2">Profile Avatar</label>
            <label className="flex flex-col items-center justify-center w-full h-32 bg-white/5 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 transition-all group">
                <FiUploadCloud className="text-neutral-600 group-hover:text-blue-500 mb-2" size={24} />
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">
                  {fileName ? fileName : "Click to upload avatar"}
                </span>
                <input type="file" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} />
            </label>
          </div>

          <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
            Initialize Account
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
      
      {/* PREVIEW AREA: Centered Layout */}
      <div className="min-h-[850px] p-10 md:p-24 flex items-center justify-center bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-lg bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 shadow-2xl relative"
        >
          <div className="mb-10 text-center md:text-left">
             <h2 className="text-4xl font-black text-white italic tracking-tighter leading-none uppercase">Register</h2>
             <p className="text-neutral-500 text-xs font-bold uppercase tracking-[0.3em] mt-3 underline decoration-blue-500 underline-offset-4 decoration-2">Security Module v.03</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-1 group-focus-within:text-blue-500 transition-colors">Username</label>
                    <div className="relative">
                        <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" />
                        <input type="text" placeholder="alex_koda" className="w-full bg-neutral-950/50 border border-white/5 rounded-2xl py-5 pl-12 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold placeholder:text-neutral-800" />
                    </div>
                </div>
                <div className="space-y-2 group">
                    <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-1 group-focus-within:text-blue-500 transition-colors">Email</label>
                    <div className="relative">
                        <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" />
                        <input type="email" placeholder="alex@koda.ui" className="w-full bg-neutral-950/50 border border-white/5 rounded-2xl py-5 pl-12 pr-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold placeholder:text-neutral-800" />
                    </div>
                </div>
            </div>

            <div className="space-y-2 group">
                <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-1 group-focus-within:text-blue-500 transition-colors">Security Key</label>
                <div className="relative">
                    <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                        type={showPass ? "text" : "password"} 
                        placeholder="••••••••" 
                        className="w-full bg-neutral-950/50 border border-white/5 rounded-2xl py-5 pl-12 pr-12 text-sm text-white focus:border-blue-500 outline-none transition-all font-black tracking-widest" 
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white transition-colors cursor-pointer">
                        {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                </div>
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-black text-neutral-600 uppercase tracking-widest ml-1">Profile Module</label>
               <label className="flex flex-col items-center justify-center w-full h-36 bg-neutral-950/50 border-2 border-dashed border-white/5 rounded-3xl cursor-pointer hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
                   <FiUploadCloud size={24} className="text-neutral-500 group-hover:text-blue-500 transition-colors mb-2" />
                   <p className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">
                       {fileName ? fileName : "Upload Avatar"}
                   </p>
                   <input type="file" className="hidden" onChange={(e)=>setFileName(e.target.files?.[0]?.name || "")} />
               </label>
            </div>

            <button className="w-full py-5 bg-white text-black rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 cursor-pointer">
              Complete Registration
            </button>
          </form>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl"><FiCheck className="text-blue-500" /></div>
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Identity_Module / Auth_v3</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg active:scale-95"
        >
          {copied ? "FIXED CENTER CODE COPIED!" : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default ThirdForm;