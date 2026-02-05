import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiCalendar, FiLock, FiPlus, FiMinus, FiArrowRight, FiZap, FiCode } from "react-icons/fi";

/* ================= Types ================= */
type Product = {
  id: number;
  name: string;
  price: string;
};

const ShowOfComponent: React.FC = () => {
  const [qtyMap, setQtyMap] = useState<Record<number, number>>({});
  const [activeDate, setActiveDate] = useState(14);

  const products: Product[] = [
    { id: 1, name: "Neural Kick", price: "₹8,999" },
    { id: 2, name: "Nexus Watch", price: "₹14,499" },
    { id: 3, name: "Cyber Bag", price: "₹5,200", },
  ];

  const getQty = (id: number): number => qtyMap[id] ?? 1;
  const updateQty = (id: number, value: number) => {
    setQtyMap((prev) => ({ ...prev, [id]: Math.max(1, value) }));
  };

  return (
    <section className="w-full py-24 bg-[#020617] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="w-full text-center mb-20 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6"
        >
          <FiZap /> Component Library
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
          Ready-made <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Production</span> Blocks
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Premium React components built with atomic design principles.
          Just copy the logic, paste the style, and ship.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* --- 1. THE MODERN CARD (Span 4) --- */}
        <motion.div
          whileHover={{ y: -5 }}
          className="lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-neutral-900/40 border border-white/5 p-8 backdrop-blur-3xl transition-all hover:border-blue-500/50"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black text-sm uppercase tracking-widest text-neutral-500">Product Card</h3>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div className="bg-neutral-950 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="h-44 w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="card" />
            <div className="p-6">
              <h4 className="font-bold text-lg">Alpine Horizon</h4>
              <p className="text-neutral-500 text-sm mt-1">Adventure Series v.2</p>
              <button className="w-full mt-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm transition-all flex items-center justify-center gap-2">
                Explore <FiArrowRight />
              </button>
            </div>
          </div>
        </motion.div>

        {/* --- 2. AUTH FORM (Span 4) --- */}
        <motion.div
          whileHover={{ y: -5 }}
          className="lg:col-span-4 group rounded-[2.5rem] bg-neutral-900/40 border border-white/5 p-8 backdrop-blur-3xl transition-all hover:border-purple-500/50"
        >
          <h3 className="font-black text-sm uppercase tracking-widest text-neutral-500 mb-8">Secure Auth</h3>
          <div className="bg-neutral-950 rounded-[2rem] p-8 border border-white/5 space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-neutral-500 uppercase ml-1">Account Access</label>
              <div className="relative">
                <input placeholder="Email" className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <input type="password" placeholder="••••••••" className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all" />
                <FiLock className="absolute right-4 top-3.5 text-neutral-600" />
              </div>
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-black text-xs uppercase tracking-widest shadow-lg shadow-purple-600/20">
              Authorize Device
            </button>
          </div>
        </motion.div>

        {/* --- 3. CALENDAR (Span 4) --- */}
        <motion.div
          whileHover={{ y: -5 }}
          className="lg:col-span-4 group rounded-[2.5rem] bg-neutral-900/40 border border-white/5 p-8 backdrop-blur-3xl transition-all hover:border-orange-500/50"
        >
          <h3 className="font-black text-sm uppercase tracking-widest text-neutral-500 mb-8">Schedule</h3>
          <div className="bg-neutral-950 rounded-[2rem] p-6 border border-white/5">
            <div className="flex justify-between items-center mb-4 px-2">
              <span className="text-sm font-bold">February 2026</span>
              <FiCalendar className="text-orange-500" />
            </div>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(21)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDate(i + 1)}
                  className={`h-8 w-8 text-[10px] font-bold rounded-lg transition-all ${activeDate === i + 1 ? 'bg-orange-500 text-white' : 'hover:bg-white/5 text-neutral-500'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- 4. E-COMMERCE GALLERY (Full Span) --- */}
        <div className="lg:col-span-12 mt-6 rounded-[3rem] bg-neutral-900/40 border border-white/5 p-8 md:p-12 backdrop-blur-3xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="font-black text-2xl text-white italic">Koda<span className="text-blue-500">Cart</span> Showcase</h3>
              <p className="text-neutral-500 text-sm mt-1">Interactive inventory and quantity management logic.</p>
            </div>
            <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <FiCode /> View All Gallery Styles
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-950 rounded-[2.5rem] p-6 border border-white/5 hover:border-blue-500/30 transition-all shadow-2xl"
              >
                <div className="relative group overflow-hidden rounded-2xl mb-6">
                  <img src={'logo.png'} alt={product.name} className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 h-8 w-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
                    <FiShoppingCart size={14} />
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-black text-lg tracking-tight">{product.name}</h4>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                    {product.price}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden">
                    <button onClick={() => updateQty(product.id, getQty(product.id) - 1)} className="p-4 hover:bg-white/5 transition-colors"><FiMinus size={14} /></button>
                    <span className="w-8 text-center font-black text-sm">{getQty(product.id)}</span>
                    <button onClick={() => updateQty(product.id, getQty(product.id) + 1)} className="p-4 hover:bg-white/5 transition-colors"><FiPlus size={14} /></button>
                  </div>
                  <button className="flex-1 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-tighter hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95">
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowOfComponent;