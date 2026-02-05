import { motion } from "framer-motion";
import { FiZap, FiMove, FiCheck } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-12 bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">

      {/* --- PREMIUM ABOUT SECTION --- */}
      <div className="p-10 md:p-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Column: Heading & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] block mb-6">
              Who we are
            </span>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.8] text-white mb-10">
              Build <br /> the <span className="text-neutral-800">Best</span> Fast.
            </h2>
            <p className="text-neutral-500 text-xl font-medium leading-relaxed max-w-lg mb-8 italic">
              "We built KodaUI because we were tired of slow tools and messy designs."
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
              We made this library for developers who love clean design. Our goal is 
              to make React coding fast and beautiful. You focus on how your app works, 
              and we make sure it looks amazing.
            </p>
          </motion.div>

          {/* Right Column: Simple Values Grid */}
          <div className="space-y-16">
            {[
              { 
                title: "Top Speed", 
                desc: "No extra junk code. Everything is fast and smooth.", 
                icon: <FiZap /> 
              },
              { 
                title: "Full Control", 
                desc: "Change anything easily. It won't break your site.", 
                icon: <FiMove /> 
              },
              { 
                title: "Easy To Use", 
                desc: "Simple code for real developers. Just copy, paste, and grow.", 
                icon: <FiCheck /> 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="mt-1 w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 cursor-pointer">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white italic tracking-tight mb-2 uppercase group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h4>
                  <p className="text-neutral-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;