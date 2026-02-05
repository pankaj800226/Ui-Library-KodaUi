import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart, FiCopy, FiCheck, FiTag } from "react-icons/fi";

const ProductCard = () => {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const sourceCode = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart, FiTag } from "react-icons/fi";

const KodaCard = () => {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-6">
      <motion.div 
        whileHover={{ y: -10 }}
        className="w-full max-w-sm bg-neutral-900/50 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-xl"
      >
        <div className="relative h-72 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
          <div className="absolute top-5 left-5 bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-widest shadow-lg shadow-blue-600/20">
            <FiTag /> 20% OFF
          </div>
          <button onClick={() => setLiked(!liked)} className="absolute top-5 right-5 p-3.5 bg-black/40 backdrop-blur-md rounded-2xl text-white cursor-pointer transition-all border border-white/10">
            {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
          </button>
        </div>

        <div className="p-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Nexus Elite</h3>
              <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Series Alpha</p>
            </div>
            <p className="text-white font-black text-2xl italic tracking-tighter">₹8,499</p>
          </div>

          <button 
            onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1500); }}
            className={\`w-full py-5 rounded-[1.5rem] flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all cursor-pointer \${
              added ? "bg-emerald-600 text-white shadow-emerald-500/20" : "bg-white text-black hover:bg-blue-600 hover:text-white"
            }\`}
          >
            <FiShoppingCart size={18} />
            {added ? "Secured" : "Deploy to Cart"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
      
      {/* PREVIEW AREA */}
      <div className="min-h-[750px] p-10 flex items-center justify-center bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          className="w-full max-w-sm bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative"
        >
          {/* Image Section */}
          <div className="relative h-72 overflow-hidden">
            <img
            src="logo.png"
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 shadow-xl shadow-blue-600/30 uppercase tracking-[0.2em]">
              <FiTag /> Limited Drop
            </div>

            <button
              onClick={() => setLiked(!liked)}
              className={`absolute top-6 right-6 p-4 rounded-2xl backdrop-blur-xl border border-white/10 transition-all cursor-pointer active:scale-90 ${
                liked ? "bg-red-500 text-white shadow-lg shadow-red-500/40 border-none" : "bg-black/40 text-white hover:bg-black/60"
              }`}
            >
              {liked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
            </button>
          </div>

          {/* Body Section */}
          <div className="p-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-black text-white italic tracking-tighter leading-none uppercase">Nexus Elite</h2>
                <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Accessory_Node / 01</p>
              </div>
              <div className="text-right">
                <p className="text-white font-black text-2xl italic tracking-tighter leading-none">₹8,499</p>
                <div className="h-1 w-full bg-blue-600/20 mt-2 rounded-full overflow-hidden">
                  <motion.div initial={{ x: '-100%' }} animate={{ x: '0%' }} className="h-full bg-blue-500 w-2/3" />
                </div>
              </div>
            </div>

            <motion.button
              onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1500); }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-[0.3em] transition-all cursor-pointer shadow-2xl ${
                added 
                ? "bg-emerald-500 text-white shadow-emerald-500/30" 
                : "bg-white text-black hover:bg-blue-600 hover:text-white"
              }`}
            >
              <FiShoppingCart size={16} />
              {added ? "Node Secured" : "Deploy to Cart"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-10 py-8 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <FiShoppingCart className="text-blue-500" size={20} />
          </div>
          <p className="text-[10px] font-mono text-neutral-600 font-black uppercase tracking-[0.4em]">Commerce_Cipher / v3</p>
        </div>

        <button
          onClick={handleCopy}
          className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-10 py-4 rounded-2xl text-[10px] font-black transition-all cursor-pointer shadow-lg active:scale-95"
        >
          {copied ? "LOGIC COPIED" : "COPY FULL SOURCE"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;