import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden text-white">

      {/* ================= Background Gradient ================= */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-indigo-950 via-purple-900 to-black" />

      {/* ================= Glow Blobs ================= */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-40 right-[-150px] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-[-150px] left-40 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl -z-10" />

      {/* ================= Content Wrapper ================= */}
      {/* FULL width on mobile → contained only on desktop */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 lg:max-w-7xl lg:mx-auto py-16 sm:py-24 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm bg-white/10 backdrop-blur rounded-full border border-white/20 mb-6 hover:bg-white/20 transition">
              🚀 500+ Professional UI Blocks
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Stunning UIs
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                10x Faster
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Copy-paste ready components, sections and templates.
              No prompts. No design struggle. Just ship products faster.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link to={'/dashboard'}>
                <button
                  className="
                  cursor-pointer
                  w-full sm:w-auto px-7 py-3 rounded-2xl font-semibold
                  bg-gradient-to-r from-pink-500 to-purple-600
                  transition-all duration-300
                  hover:scale-105 hover:-translate-y-1
                  hover:shadow-2xl hover:shadow-pink-500/40
                "
                >
                  Browse Library
                </button>
              </Link>


              <button
                className="
                  cursor-pointer
                  w-full sm:w-auto px-7 py-3 rounded-2xl
                  border border-white/20
                  transition-all duration-300
                  hover:bg-white/10 hover:scale-105 hover:-translate-y-1
                "
              >
                Live Preview
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex justify-center lg:justify-start gap-8 sm:gap-12 text-sm text-gray-300">
              {[
                { num: "500+", label: "Components" },
                { num: "50+", label: "Templates" },
                { num: "1-Click", label: "Copy Code" },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-400 transition">
                    {item.num}
                  </p>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex justify-center">

            <motion.div
              whileHover={{ y: -10, rotate: 1.5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                w-full max-w-none sm:max-w-lg lg:max-w-xl
                rounded-3xl bg-white/5 backdrop-blur-xl
                border border-white/10 p-4 sm:p-6 shadow-2xl
              "
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="preview"
                className="rounded-2xl object-cover w-full h-56 sm:h-72 lg:h-80"
              />
            </motion.div>

            {/* Floating tags */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="hidden sm:block absolute -top-5 -left-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl text-xs shadow-lg"
            >
              ⚡ Copy Code
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="hidden sm:block absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-xs shadow-lg"
            >
              🎨 Live Preview
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
