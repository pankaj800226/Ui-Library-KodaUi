import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart, FiCopy, FiCheck, FiTag } from "react-icons/fi";

const KodaProductCard = () => {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // User-ready code for a single high-end product card
  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = () => {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="w-full max-w-sm bg-[#0b0f1a] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button 
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 p-3 bg-black/40 backdrop-blur-md rounded-2xl text-white cursor-pointer active:scale-90 transition-all"
        >
          {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
        </button>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-white text-xl font-black italic tracking-tighter">Cyber Sneakers v2</h3>
            <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mt-1">Limited Edition</p>
          </div>
          <p className="text-white font-black text-xl italic">₹8,499</p>
        </div>

        <button 
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1500); }}
          className={\`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest transition-all cursor-pointer \${
            added ? "bg-emerald-600 text-white" : "bg-white text-black hover:bg-blue-600 hover:text-white"
          }\`}
        >
          <FiShoppingCart size={18} />
          {added ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl group/main">
      
      {/* PREVIEW AREA */}
      <div className="p-10 md:p-20 flex justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          className="w-full max-w-sm bg-neutral-900/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
        >
          {/* Image Section */}
          <div className="relative h-64 sm:h-72 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=900&auto=format&fit=crop&q=60"
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Discount Badge */}
            <div className="absolute top-5 left-5 bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-blue-600/20 uppercase tracking-widest">
              <FiTag /> 20% OFF
            </div>

            {/* Wishlist Button */}
            <button
              onClick={() => setLiked(!liked)}
              className={`absolute top-5 right-5 p-3.5 rounded-2xl backdrop-blur-xl border border-white/10 transition-all cursor-pointer active:scale-90 ${
                liked ? "bg-red-500 text-white shadow-lg shadow-red-500/30" : "bg-black/40 text-white hover:bg-black/60"
              }`}
            >
              {liked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
            </button>
          </div>

          {/* Body Section */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-black text-white italic tracking-tighter leading-none">Nexus Elite</h3>
                <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Series Alpha / 2026</p>
              </div>
              <div className="text-right">
                <p className="text-white font-black text-2xl italic tracking-tighter leading-none">₹8,499</p>
                <p className="text-blue-500 font-bold text-[10px] uppercase mt-1">M.R.P</p>
              </div>
            </div>

            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-5 rounded-[1.5rem] flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer shadow-2xl ${
                added 
                ? "bg-emerald-600 text-white shadow-emerald-500/20" 
                : "bg-white text-black hover:bg-blue-600 hover:text-white shadow-white/5"
              }`}
            >
              <FiShoppingCart size={18} />
              {added ? "Secured in Cart" : "Deploy to Cart"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-6 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
          <p className="text-xs font-mono text-neutral-500 font-black uppercase tracking-[0.3em]">Module / Commerce_Card_v3</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full md:w-auto flex items-center justify-center gap-3 bg-neutral-900 border border-white/10 px-8 py-3.5 rounded-2xl text-[10px] font-black text-white transition-all active:scale-95 cursor-pointer hover:bg-neutral-800"
        >
          {copied ? <><FiCheck className="text-emerald-500" /> COPIED TO CLIPBOARD</> : <><FiCopy /> COPY FULL SOURCE</>}
        </button>
      </div>
    </div>
  );
};

export default KodaProductCard;