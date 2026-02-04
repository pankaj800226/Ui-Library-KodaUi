import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiCopy, FiZap, FiShield, FiCpu } from "react-icons/fi";

const TriplePriceNeon = () => {
  const [copied, setCopied] = useState(false);

  // Yeh code user ko copy karne par milega (Full 3-Section Logic)
  const fullCode = `import { FiCheck, FiZap, FiShield, FiCpu } from "react-icons/fi";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      desc: "Perfect for hobbyists",
      price: "0",
      icon: <FiZap className="text-blue-400" />,
      features: ["3 Projects", "Basic Support", "Public API"],
      btnBg: "bg-blue-600",
    },
    {
      name: "Standard",
      desc: "For growing teams",
      price: "499",
      icon: <FiShield className="text-purple-400" />,
      features: ["Unlimited Projects", "Team Access", "Priority Support"],
      btnBg: "bg-purple-600",
      popular: true,
    },
    {
      name: "Advanced",
      desc: "Enterprise power",
      price: "999",
      icon: <FiCpu className="text-emerald-400" />,
      features: ["Custom Domain", "Advanced Analytics", "24/7 Dedicated"],
      btnBg: "bg-emerald-600",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#020617]">
      {plans.map((plan, i) => (
        <div key={i} className={\`relative p-8 rounded-[2.5rem] border \${plan.popular ? 'border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.15)]' : 'border-white/5'} bg-neutral-900/50 backdrop-blur-xl\`}>
          <div className="mb-6 text-3xl">{plan.icon}</div>
          <h3 className="text-2xl font-black text-white italic">{plan.name}</h3>
          <p className="text-neutral-500 text-sm mb-6">{plan.desc}</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl font-black text-white italic">₹{plan.price}</span>
            <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">/mo</span>
          </div>
          <ul className="space-y-4 mb-10">
            {plan.features.map(f => (
              <li key={f} className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                <FiCheck className="text-emerald-400" /> {f}
              </li>
            ))}
          </ul>
          <button className={\`w-full py-4 \${plan.btnBg} text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-transform active:scale-95\`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const plans = [
    { name: "Free", price: "0", desc: "For individuals", icon: <FiZap />, color: "blue" },
    { name: "Standard", price: "499", desc: "For small teams", icon: <FiShield />, color: "purple", popular: true },
    { name: "Advanced", price: "999", desc: "For large teams", icon: <FiCpu />, color: "emerald" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* --- PREVIEW AREA --- */}
      <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-[2.5rem] bg-neutral-900/40 border ${plan.popular ? 'border-purple-500/40 shadow-2xl shadow-purple-500/10' : 'border-white/5'} backdrop-blur-3xl flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-[10px] font-black cursor-pointer px-4 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                Most Popular
              </div>
            )}

            <div className={`text-2xl mb-6 text-${plan.color}-400 bg-${plan.color}-400/10 w-fit p-3 rounded-2xl border border-${plan.color}-400/20`}>
              {plan.icon}
            </div>

            <h3 className="text-2xl font-black text-white italic tracking-tighter">{plan.name}</h3>
            <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mt-1 mb-8">{plan.desc}</p>

            <div className="flex items-baseline gap-1 mb-10">
              <span className="text-5xl font-black text-white italic">₹{plan.price}</span>
              <span className="text-neutral-600 font-bold text-xs uppercase tracking-tighter">/mo</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {["Feature One", "Feature Two", "Feature Three"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-300 font-medium">
                  <FiCheck className={`text-${plan.color}-400`} /> {f}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg
              ${plan.color === 'blue' ? 'bg-blue-600 shadow-blue-600/20' : 
                plan.color === 'purple' ? 'bg-purple-600 shadow-purple-600/20' : 
                'bg-emerald-600 shadow-emerald-600/20'} text-white`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      {/* --- ACTION BAR (COPY) --- */}
      <div className="bg-white/5 px-10 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
          <p className="text-xs font-mono text-neutral-500 font-bold uppercase tracking-[0.3em]">Module / Triple_Price_Grid_v2</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all active:scale-95 shadow-xl"
        >
          {copied ? <><FiCheck size={18} /> Full Code Copied!</> : <><FiCopy size={18} /> Copy All Sections</>}
        </button>
      </div>
    </div>
  );
};

export default TriplePriceNeon;