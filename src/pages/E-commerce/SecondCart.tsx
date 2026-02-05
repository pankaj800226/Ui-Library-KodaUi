import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiPlus, FiMinus, FiCopy, FiCheck, FiShoppingBag } from "react-icons/fi";

const GlassCart = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState(false);

  // User ko copy karne ke liye pure code string
  const fullCode = `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

const ModernCartItem = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl">
      <div className="relative group">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
          className="w-full h-48 object-cover rounded-[2rem] shadow-inner"
          alt="Product"
        />
        <button 
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 p-3 bg-black/20 backdrop-blur-md rounded-2xl text-white hover:scale-110 transition-all"
        >
          {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
        </button>
      </div>

      <div className="mt-6 flex justify-between items-end">
        <div>
          <h3 className="text-white text-xl font-black tracking-tight">Nike Air Max</h3>
          <p className="text-neutral-500 text-sm font-medium">Hyper Crimson / Red</p>
        </div>
        <p className="text-blue-500 font-black text-xl">₹12,499</p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center bg-neutral-900 rounded-2xl p-1 border border-white/5">
          <button onClick={() => setCount(Math.max(1, count - 1))} className="p-3 text-white hover:bg-white/5 rounded-xl"><FiMinus /></button>
          <span className="w-8 text-center font-bold text-white">{count}</span>
          <button onClick={() => setCount(count + 1)} className="p-3 text-white hover:bg-white/5 rounded-xl"><FiPlus /></button>
        </div>
        <button className="flex-1 bg-white text-black h-[52px] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
          Checkout
        </button>
        <button className="p-4 bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all">
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default ModernCartItem;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 group">
      {/* Container Wrapper */}
      <div className="bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">

        {/* Preview Section */}
        <div className="p-10 md:p-20 flex justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent">

          {/* --- THE DESIGN --- */}
          <motion.div
            whileHover={{ y: -10 }}
            className="w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl relative"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="logo.png"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <button
                onClick={() => setLiked(!liked)}
                className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-xl rounded-2xl text-white transition-all active:scale-90"
              >
                {liked ? <AiFillHeart className="text-red-500" size={20} /> : <AiOutlineHeart size={20} />}
              </button>
            </div>

            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-white text-2xl font-black tracking-tighter">Nike Air Max</h3>
                <p className="text-neutral-500 text-sm font-bold uppercase tracking-widest mt-1">Edition 2026</p>
              </div>
              <div className="text-right">
                <p className="text-blue-500 font-black text-xl leading-none">₹12,499</p>
                <p className="text-[10px] text-neutral-600 mt-1 uppercase font-bold tracking-tighter">Incl. Taxes</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex flex-1 items-center bg-neutral-900 border border-white/5 rounded-2xl p-1">
                <button onClick={() => setCount(Math.max(1, count - 1))} className="p-3 text-neutral-400 hover:text-white transition-colors"><FiMinus /></button>
                <span className="flex-1 text-center font-black text-white">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-3 text-neutral-400 hover:text-white transition-colors"><FiPlus /></button>
              </div>
              <button className="p-4 bg-neutral-900 border border-white/5 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-lg">
                <FiTrash2 />
              </button>
            </div>

            <button className="w-full mt-4 h-14 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:bg-blue-600 hover:text-white transition-all active:scale-95">
              Add To Bag
            </button>
          </motion.div>
        </div>

        {/* Action Bar */}
        <div className="bg-white/5 border-t border-white/5 px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg"><FiShoppingBag className="text-blue-500" /></div>
            <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-widest">KodaUI / Glass_Cart_v2</span>
          </div>

          <button
            onClick={handleCopy}
            className="group relative flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl text-xs font-black text-white transition-all active:scale-95 shadow-lg shadow-blue-600/20"
          >
            {copied ? (
              <><FiCheck className="animate-bounce" /> COPIED TO CLIPBOARD</>
            ) : (
              <><FiCopy /> COPY FULL SOURCE</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlassCart;