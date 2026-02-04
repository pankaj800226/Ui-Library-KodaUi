import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart, FiCopy } from "react-icons/fi";

const ThirdCard = () => {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => setLiked(!liked);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // Full code snippet including imports for copying
  const code = `import React from "react";
import { FiShoppingCart, FiCopy } from "react-icons/fi";
import { motion } from "framer-motion";

export const App = () => {
  return (
    <div className="max-w-xs bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/400x250"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">Awesome Product</h3>
        <p className="text-neutral-400 mt-1">$49.99</p>
        <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg py-2 font-semibold bg-blue-600 text-white hover:bg-blue-500">
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
      <div className="flex items-center justify-between p-3 border-t border-neutral-800 bg-neutral-950">
        <span className="text-sm text-neutral-400">Dark UI Card</span>
        <button className="flex items-center gap-1 text-neutral-400 hover:text-white text-sm">
          <FiCopy /> Copy
        </button>
      </div>
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
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=900&auto=format&fit=crop&q=60"
            alt="Product"
            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
          />
          {/* Wishlist */}
          <button
            onClick={handleLike}
            className={`absolute top-3 right-3 rounded-full p-2 transition ${
              liked ? "bg-red-600 text-white" : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            {liked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white">Awesome Product</h3>
          <p className="text-neutral-400 mt-1 text-sm sm:text-base">$49.99</p>

          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.95 }}
            className={`mt-4 w-full flex items-center justify-center gap-2 rounded-lg py-2 font-semibold transition ${
              added ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            <FiShoppingCart size={20} />
            {added ? "Added!" : "Add to Cart"}
          </motion.button>
        </div>

        {/* Footer with Copy */}
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

export default ThirdCard;
