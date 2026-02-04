import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";

const OneCard = () => {
  const [clicked, setClicked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleActionClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  // Full code snippet for copying, including imports
  const code = `import React from "react";
import { motion } from "framer-motion";

export const App = () => {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="text-xl font-semibold text-white">Simple Card</h2>
      <p className="text-neutral-400 text-sm mt-1">
        Tailwind + Motion UI component
      </p>
      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition">
        Click Me
      </button>
    </div>
  );
};`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="bg-[rgb(2,6,23)] px-4 sm:px-6 lg:px-10 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Card Content */}
        <div className="p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Simple Card</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-1">
            Tailwind + Motion UI component
          </p>

          <motion.button
            onClick={handleActionClick}
            whileTap={{ scale: 0.95 }}
            className={`mt-4 w-full rounded-lg py-2 font-semibold transition ${
              clicked
                ? "bg-green-600 text-white"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            {clicked ? "Clicked!" : "Click Me"}
          </motion.button>
        </div>

        {/* Footer with Copy Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-3 border-t border-neutral-800 bg-neutral-950 gap-2 sm:gap-0">
          <span className="text-sm text-neutral-400">Dark UI Card</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-neutral-400 hover:text-white text-sm cursor-pointer"
          >
            <FiCopy /> {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OneCard;
