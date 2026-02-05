import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiPlus, FiMinus, FiCopy, FiCheck, FiShoppingBag } from "react-icons/fi";

const GlassCart = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState(false);

  const fullCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

const KodaGlassItem = () => {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center justify-center bg-[#050505] p-6">
      <motion.div
        whileHover={{ y: -10 }}
        className="w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl"
      >
        <div className="relative overflow-hidden rounded-[2rem]">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" className="w-full h-56 object-cover" />
          <button onClick={() => setLiked(!liked)} className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-xl rounded-2xl text-white">
            {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
          </button>
        </div>
        <div className="mt-6 flex justify-between items-start">
          <h3 className="text-white text-2xl font-black tracking-tighter uppercase">Air Max Elite</h3>
          <p className="text-blue-500 font-black text-xl leading-none">₹12,499</p>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <div className="flex flex-1 items-center bg-neutral-900 border border-white/5 rounded-2xl p-1">
            <button onClick={() => setCount(Math.max(1, count - 1))} className="p-3 text-neutral-400"><FiMinus /></button>
            <span className="flex-1 text-center font-black text-white">{count}</span>
            <button onClick={() => setCount(count + 1)} className="p-3 text-neutral-400"><FiPlus /></button>
          </div>
          <button className="p-4 bg-neutral-900 border border-white/5 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all"><FiTrash2 /></button>
        </div>
        <button className="w-full mt-4 h-14 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl">
          Add To Bag
        </button>
      </motion.div>
    </div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 flex flex-col items-center">
      {/* Centered Component Title */}
      <div className="mb-8 text-center">
        <h2 className="text-white text-sm font-black uppercase tracking-[0.5em] opacity-40 italic">Module_07 / Glass_Kernel</h2>
      </div>

      <div className="w-full bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        {/* Centered Preview Container */}
        <div className="min-h-[700px] flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
          
          <motion.div
            whileHover={{ y: -10 }}
            className="w-full max-w-sm bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 shadow-2xl relative"
          >
            <div className="relative overflow-hidden rounded-[2.2rem] group">
              <img
                // src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa"
                src="logo.png"
                alt="Product"
                className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <button
                onClick={() => setLiked(!liked)}
                className="absolute top-5 right-5 p-4 bg-black/40 backdrop-blur-xl rounded-2xl text-white transition-all active:scale-90 border border-white/5"
              >
                {liked ? <AiFillHeart className="text-red-500" size={20} /> : <AiOutlineHeart size={20} />}
              </button>
            </div>

            <div className="mt-8 flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">Air Max</h3>
                <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Node_Identity / v2</p>
              </div>
              <div className="text-right">
                <p className="text-blue-500 font-black text-2xl italic tracking-tighter leading-none">₹12,499</p>
                <div className="h-1 w-full bg-blue-600/20 mt-2 rounded-full overflow-hidden">
                  <motion.div animate={{ width: "100%" }} className="h-full bg-blue-500" />
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex flex-1 items-center bg-neutral-900/50 border border-white/5 rounded-2xl p-1.5 backdrop-blur-md">
                <button onClick={() => setCount(Math.max(1, count - 1))} className="p-3 text-neutral-500 hover:text-white transition-colors cursor-pointer"><FiMinus /></button>
                <span className="flex-1 text-center font-black text-white font-mono">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-3 text-neutral-400 hover:text-white transition-colors cursor-pointer"><FiPlus /></button>
              </div>
              <button className="p-5 bg-neutral-900/50 border border-white/5 text-red-500/50 hover:text-red-500 rounded-2xl transition-all hover:bg-red-500/10 active:scale-90">
                <FiTrash2 size={18} />
              </button>
            </div>

            <button className="w-full mt-5 h-16 bg-white text-black rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-95">
              Secure Transaction
            </button>
          </motion.div>
        </div>

        {/* Action Bar */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600/10 border border-blue-600/20 rounded-2xl shadow-inner shadow-blue-500/10">
              <FiShoppingBag className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Cart_Kernel_v.2.0</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">Status: Stable_Release</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-10 py-4 rounded-2xl text-[10px] font-black transition-all active:scale-95 shadow-xl"
          >
            {copied ? <><FiCheck className="text-emerald-500" /> NODE_COPIED</> : <><FiCopy /> CLONE_SOURCE</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassCart;