import React, { useState, useRef, type ChangeEvent, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiZap, FiShield, FiRefreshCw } from "react-icons/fi";

interface OTPFormProps {
  length?: number;
  onComplete?: (otp: string) => void;
}

const SevenForm: React.FC<OTPFormProps> = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [copied, setCopied] = useState<boolean>(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }

    const finalOtp = newOtp.join("");
    if (finalOtp.length === length && onComplete) onComplete(finalOtp);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  // FIXED: Added Submit Button and centering in sourceCode
  const sourceCode = `import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { FiShield, FiZap } from "react-icons/fi";

const OTPForm: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleVerify = () => {
    console.log("Verifying OTP:", otp.join(""));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-4">
      <div className="bg-[#09090b] border border-white/10 rounded-[2.5rem] p-8 md:p-12 max-w-md w-full shadow-2xl text-center">
        <div className="mb-8">
           <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-500">
              <FiShield size={28} />
           </div>
           <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Verify Node</h2>
        </div>

        <div className="flex justify-between gap-2 mb-8">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => (inputs.current[index] = el)}
              value={data}
              onChange={(e) => {
                const val = e.target.value;
                if (isNaN(Number(val))) return;
                const newOtp = [...otp];
                newOtp[index] = val.substring(val.length - 1);
                setOtp(newOtp);
                if (val && index < 5) inputs.current[index + 1]?.focus();
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !otp[index] && index > 0) inputs.current[index - 1]?.focus();
              }}
              className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl text-center text-xl font-black text-blue-500 outline-none focus:border-blue-500 transition-all"
            />
          ))}
        </div>

        <button 
          onClick={handleVerify}
          className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
        >
          Authorize Protocol <FiZap size={14} />
        </button>
      </div>
    </div>
  );
};`;

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* PREVIEW AREA */}
      <div className="relative min-h-[650px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950 p-6">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 md:p-14 shadow-2xl text-center z-10"
        >
          <div className="mb-10">
            <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500">
                <FiShield size={28} />
            </div>
            <h2 className="text-3xl font-black text-white italic tracking-tighter">Identity Pulse</h2>
            <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3 italic">Security Node V.07</p>
          </div>

          <div className="flex justify-center gap-3 md:gap-4 mb-12">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                value={data}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onChange={(e) => handleChange(e, index)}
                onFocus={(e) => (e.target as HTMLInputElement).select()}
                className="w-12 h-16 md:w-16 md:h-20 bg-neutral-950 border border-white/5 rounded-2xl text-center text-3xl font-black text-blue-400 focus:border-blue-500 outline-none transition-all shadow-inner"
              />
            ))}
          </div>

          <button className="w-full py-5 bg-white text-black rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 cursor-pointer">
            Authorize Protocol
          </button>

          <button className="mt-8 text-[10px] font-black text-neutral-600 hover:text-blue-500 uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer">
             <FiRefreshCw size={12} /> Resend Payload
          </button>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl"><FiZap className="text-blue-500" /></div>
          <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / OTP_Complete_v7</p>
        </div>

        <button
          onClick={async () => {
            await navigator.clipboard.writeText(sourceCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-900 border border-white/10 px-10 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg active:scale-95"
        >
          {copied ? "COMPLETE CODE COPIED!" : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default SevenForm;