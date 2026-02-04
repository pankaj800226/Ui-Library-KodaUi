import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCode, FiLayers, FiZap } from "react-icons/fi";

const KodaBanner = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#020617] text-white flex items-center">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Technical Grid */}
      <div className="absolute inset-0 z-0 opacity-20 [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* 2. Animated Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full px-6 lg:max-w-7xl mx-auto py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Ultra Modern Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <FiZap className="animate-bounce" /> Version 2.0 is Live
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Ship your SaaS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                without the friction.
              </span>
            </h1>

            <p className="mt-8 text-neutral-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              KodaUI is a library of <span className="text-white">high-conversion</span> React components. 
              Designed for developers who value speed and aesthetic precision.
            </p>

            {/* Premium Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link to="/dashboard">
                <button className="group relative w-full sm:w-auto px-8 py-4 bg-blue-600 rounded-2xl font-black text-white overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative cursor-pointer flex items-center justify-center gap-2">
                    Explore Components <FiArrowRight />
                  </span>
                </button>
              </Link>

              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                <FiCode /> View Documentation
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-10">
              {[
                { label: "Components", val: "600+" },
                { label: "Daily Installs", val: "12k" },
                { label: "Performance", val: "99" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-white">{s.val}</span>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-bold">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT PREVIEW (The "Hero Block") --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Abstract UI Stack Replacement for Image */}
            <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
              {/* Top Layer: Code Editor Look */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-4/5 h-3/5 bg-[#0b1120] border border-white/10 rounded-3xl shadow-2xl p-6 backdrop-blur-2xl"
              >
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-3/4 bg-blue-500/20 rounded" />
                  <div className="h-2 w-1/2 bg-purple-500/20 rounded" />
                  <div className="h-2 w-2/3 bg-blue-500/20 rounded" />
                </div>
              </motion.div>

              {/* Middle Layer: Card Preview */}
              <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-0 w-3/4 h-1/2 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl p-8 flex flex-col justify-end"
              >
                <FiLayers className="text-white/20 absolute top-6 right-6" size={60} />
                <h3 className="text-2xl font-black">Modern UI Kit</h3>
                <p className="text-sm text-blue-100/60">Fully Typed & Responsive</p>
              </motion.div>

              {/* Decorative Floating Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] rotate-12">
                 <span className="text-[#020617] font-black text-3xl">K</span>
              </div>
            </div>

            {/* Background Accent Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KodaBanner;