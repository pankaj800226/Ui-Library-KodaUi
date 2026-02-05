import { useState } from "react";
import { motion } from "framer-motion";
import { FiLock, FiEye, FiEyeOff, FiCheck, FiShield, FiCopy, FiZap } from "react-icons/fi";

const SixForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const checks = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Contains a number", valid: /\d/.test(password) },
    { label: "Special character", valid: /[!@#$%^&*]/.test(password) },
  ];

  const strength = checks.filter(c => c.valid).length;

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { FiLock, FiEye, FiEyeOff, FiCheck, FiShield } from "react-icons/fi";

const UpdateCipher = () => {
  const [showPass, setShowPass] = useState(false);
  const [pass, setPass] = useState("");

  const checks = [
    { label: "8+ Characters", valid: pass.length >= 8 },
    { label: "Includes Number", valid: /\\d/.test(pass) },
    { label: "Special Char", valid: /[!@#$%^&*]/.test(pass) },
  ];

  const strength = checks.filter(c => c.valid).length;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent p-6">
      <div className="w-full max-w-md bg-[#09090b] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 border border-blue-500/20">
            <FiShield size={24} />
          </div>
          <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Update Cipher</h2>
        </div>
        
        <div className="space-y-6">
          <div className="relative group">
            <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type={showPass ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="New Password"
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 pl-14 pr-12 text-sm text-white focus:border-blue-500 outline-none transition-all font-black tracking-widest"
            />
            <button onClick={() => setShowPass(!showPass)} className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white cursor-pointer">
              {showPass ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className={\`h-1.5 flex-1 rounded-full transition-all duration-500 \${strength >= s ? "bg-blue-500" : "bg-white/10"}\`} />
            ))}
          </div>

          <div className="space-y-3">
            {checks.map((check, i) => (
              <div key={i} className={\`flex items-center gap-3 text-[10px] font-black uppercase tracking-widest \${check.valid ? "text-blue-400" : "text-neutral-700"}\`}>
                <div className={\`w-4 h-4 rounded-full border flex items-center justify-center transition-all \${check.valid ? "bg-blue-500/10 border-blue-500" : "border-neutral-800"}\`}>
                  {check.valid && <FiCheck size={10} />}
                </div>
                {check.label}
              </div>
            ))}
          </div>

          <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 cursor-pointer">
            Sync Password
          </button>
        </div>
      </div>
    </div>
  );
};`;

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* PREVIEW AREA */}
      <div className="min-h-[700px] p-10 md:p-24 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 shadow-2xl"
        >
          <div className="mb-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner">
                <FiShield size={24} />
             </div>
             <div>
                <h2 className="text-2xl font-black text-white italic tracking-tighter">Security Node</h2>
                <p className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Update Cipher v.06</p>
             </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 group">
              <label className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] ml-1 group-focus-within:text-blue-500 transition-colors">Assign New Password</label>
              <div className="relative">
                <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-700 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••" 
                  className="w-full bg-neutral-950 border border-white/5 rounded-2xl py-5 pl-14 pr-14 text-sm text-white focus:border-blue-500 outline-none transition-all font-black tracking-widest placeholder:text-neutral-800 shadow-inner"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white transition-colors cursor-pointer"
                >
                  {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Visual Strength Meter */}
            <div className="space-y-4 px-1">
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <motion.div 
                    key={s} 
                    animate={{ backgroundColor: strength >= s ? "#3b82f6" : "#262626" }}
                    className="h-1.5 flex-1 rounded-full shadow-inner" 
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {checks.map((check, idx) => (
                  <div key={idx} className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-colors ${check.valid ? "text-blue-400" : "text-neutral-700"}`}>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${check.valid ? "bg-blue-500/10 border-blue-500" : "border-neutral-800"}`}>
                      {check.valid && <FiCheck size={10} />}
                    </div>
                    {check.label}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 cursor-pointer">
              Secure Identity
            </button>
          </form>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl"><FiZap className="text-blue-500" /></div>
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / Security_Cipher_v6</p>
        </div>

        <button
          onClick={async () => {
            await navigator.clipboard.writeText(sourceCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg active:scale-95"
        >
          {copied ? "SECURITY LOGIC COPIED!" : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default SixForm;