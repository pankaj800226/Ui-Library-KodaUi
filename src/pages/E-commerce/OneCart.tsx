import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {FiCopy, FiCheck } from "react-icons/fi";

const OneCart = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  // --- Functions for Preview ---
  const handleAdd = () => setQuantity(q => q + 1);
  const handleRemove = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

const CartItem = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-5 shadow-2xl"
    >
      <div className="flex gap-5">
        <img
          src="https://images.unsplash.com/photo-1668371679302-a8ec781e876e"
          alt="Product"
          className="w-24 h-24 rounded-2xl object-cover border border-white/5 shadow-lg"
        />

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white font-bold tracking-tight">Koda Air Max</h3>
              <p className="text-blue-500 font-black text-sm mt-1">₹4,999</p>
            </div>
            <button onClick={() => setLiked(!liked)} className="text-neutral-500 hover:text-red-500 transition-colors">
              {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
             <div className="flex items-center gap-3 bg-neutral-800/50 rounded-xl px-2 py-1 border border-white/5">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-white hover:text-blue-400 p-1">-</button>
                <span className="text-white text-sm font-mono font-bold w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="text-white hover:text-blue-400 p-1">+</button>
             </div>
             <button className="text-neutral-500 hover:text-red-400 transition-colors">
                <FiTrash2 size={16} />
             </button>
          </div>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1500); }}
        className={\`w-full mt-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all \${
          added ? "bg-green-600 text-white" : "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
        }\`}
      >
        {added ? "Success!" : "Add to Cart"}
      </motion.button>
    </motion.div>
  );
};

export default CartItem;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10 bg-neutral-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
      
      {/* 1. COMPONENT PREVIEW AREA */}
      <div className="p-8 md:p-16 flex items-center justify-center bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
        {/* --- Actual Preview Component --- */}
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-5 shadow-2xl relative">
            <div className="flex gap-5">
              <img
                src="logo.png"
                className="w-24 h-24 rounded-2xl object-cover border border-white/5"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between">
                   <h3 className="text-white font-bold">Koda Air Max</h3>
                   <button onClick={() => setLiked(!liked)} className="text-neutral-500">
                      {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
                   </button>
                </div>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3 bg-neutral-800 p-1 rounded-xl">
                      <button onClick={handleRemove} className="px-2">-</button>
                      <span className="text-sm font-mono">{quantity}</span>
                      <button onClick={handleAdd} className="px-2">+</button>
                   </div>
                   <p className="text-blue-500 font-bold">₹4,999</p>
                </div>
              </div>
            </div>
            <button onClick={handleAddToCart} className={`w-full mt-5 py-3 rounded-xl font-bold transition-all ${added ? "bg-green-600" : "bg-blue-600"}`}>
               {added ? "Added!" : "Add to Cart"}
            </button>
        </div>
      </div>

      {/* 2. LIBRARY TOOLBAR */}
      <div className="px-6 py-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
           <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">Component / Ecommerce_Cart_01</span>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all active:scale-95"
        >
          {copied ? <><FiCheck className="text-green-400" /> COPIED</> : <><FiCopy /> COPY FULL CODE</>}
        </button>
      </div>
    </div>
  );
};

export default OneCart;