import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiShoppingCart, FiCopy } from "react-icons/fi";

const OneCart = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleAdd = () => setQuantity(q => q + 1);
  const handleRemove = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const code = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

const OneCart = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => setQuantity(q => q + 1);
  const handleRemove = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] px-4 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-4 p-4">
          <img
            src="https://images.unsplash.com/photo-1668371679302-a8ec781e876e"
            alt="Product"
            className="w-full md:w-32 h-52 md:h-44 rounded-xl object-cover border border-neutral-800"
          />

          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Awesome Product
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  ₹4,999 • In Stock
                </p>
              </div>

              <button
                onClick={() => setLiked(!liked)}
                className={\`transition \${
                  liked
                    ? "text-red-500"
                    : "text-neutral-400 hover:text-red-500"
                }\`}
              >
                {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
              </button>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handleRemove}
                className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
              >
                -
              </button>

              <span className="text-white font-semibold">
                {quantity}
              </span>

              <button
                onClick={handleAdd}
                className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
              >
                +
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-5">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleAddToCart}
                className={\`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition \${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-yellow-500 text-black hover:bg-yellow-400"
                }\`}
              >
                <FiShoppingCart />
                {added ? "Added" : "Add to Cart"}
              </motion.button>

              <button className="flex items-center gap-1 text-sm text-neutral-400 hover:text-red-500">
                <FiTrash2 /> Remove
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OneCart;`;


  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-[#020617] px-4 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg"
      >
        {/* ===== CART ITEM ===== */}
        <div className="flex flex-col md:flex-row gap-4 p-4">
          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1668371679302-a8ec781e876e"
            alt="Product"
            className="w-full md:w-28 h-40 md:h-36 rounded-xl object-cover border border-neutral-800"
          />

          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-between">
            {/* TOP */}
            <div className="flex justify-between items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Awesome Product
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  ₹4,999 • In Stock
                </p>
              </div>

              <button
                onClick={() => setLiked(!liked)}
                className={`transition ${liked
                  ? "text-red-500"
                  : "text-neutral-400 hover:text-red-500"
                  }`}
              >
                {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
              </button>
            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={handleRemove}
                className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
              >
                −
              </button>

              <span className="min-w-[24px] text-center text-white font-semibold">
                {quantity}
              </span>

              <button
                onClick={handleAdd}
                className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
              >
                +
              </button>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleAddToCart}
                className={`
                  flex items-center justify-center gap-2
                  px-4 py-2 rounded-lg font-semibold
                  transition w-full sm:w-auto
                  ${added
                    ? "bg-green-600 text-white"
                    : "bg-yellow-500 text-black hover:bg-yellow-400"}
                `}
              >
                <FiShoppingCart />
                {added ? "Added" : "Add to Cart"}
              </motion.button>

              <button className="flex items-center gap-1 text-sm text-neutral-400 hover:text-red-500">
                <FiTrash2 /> Remove
              </button>
            </div>
          </div>
        </div>

        {/* ===== FOOTER COPY BUTTON ===== */}
        <div className="flex items-center justify-between p-4 border-t border-neutral-800 bg-neutral-950 mt-4">
          <span className="text-sm text-neutral-400">E-commerce Cart</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-neutral-400 hover:text-white text-sm"
          >
            <FiCopy /> {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OneCart;
