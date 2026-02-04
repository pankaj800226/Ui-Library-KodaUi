import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiShoppingCart, FiCopy } from "react-icons/fi";

const SecondCart = () => {
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

  // Full code for copy
  const code = `import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiTrash2, FiShoppingCart, FiCopy } from "react-icons/fi";

const SecondCart = () => {
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

  return (
    <div className=" bg-[#020617] px-4 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl p-5 flex flex-col gap-4"
      >
        <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1616627986361-04535f1eb05f"
            alt="Product"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setLiked(!liked)}
            className={\`absolute top-3 right-3 p-2 rounded-full transition \${liked ? "bg-red-600 text-white" : "bg-neutral-800 text-neutral-400 hover:text-red-500"}\`}
          >
            {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-white">Stylish Headphones</h3>
          <p className="text-sm text-neutral-400">High quality sound • ₹7,499</p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={handleRemove}
            className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
          >
            −
          </button>
          <span className="min-w-[24px] text-center text-white font-semibold">{quantity}</span>
          <button
            onClick={handleAdd}
            className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
          >
            +
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-3">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleAddToCart}
            className={\`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition w-full sm:w-auto \${added ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-500"}\`}
          >
            <FiShoppingCart />
            {added ? "Added" : "Add to Cart"}
          </motion.button>

          <button className="flex items-center gap-1 text-sm text-neutral-400 hover:text-red-500 w-full sm:w-auto justify-center sm:justify-start">
            <FiTrash2 /> Remove
          </button>
        </div>       
      </motion.div>
    </div>
  );
};

export default SecondCart;`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className=" bg-[#020617] px-4 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl p-5 flex flex-col gap-4"
      >
        {/* Product Image */}
        <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1668371679302-a8ec781e876e"
            alt="Product"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setLiked(!liked)}
            className={`absolute top-3 right-3 p-2 rounded-full transition ${liked ? "bg-red-600 text-white" : "bg-neutral-800 text-neutral-400 hover:text-red-500"}`}
          >
            {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
          </button>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-white">Stylish Headphones</h3>
          <p className="text-sm text-neutral-400">High quality sound • ₹7,499</p>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={handleRemove}
            className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
          >
            −
          </button>
          <span className="min-w-[24px] text-center text-white font-semibold">{quantity}</span>
          <button
            onClick={handleAdd}
            className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-bold"
          >
            +
          </button>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-3">
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition w-full sm:w-auto ${added ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-500"}`}
          >
            <FiShoppingCart />
            {added ? "Added" : "Add to Cart"}
          </motion.button>

          <button className="flex items-center gap-1 text-sm text-neutral-400 hover:text-red-500 w-full sm:w-auto justify-center sm:justify-start">
            <FiTrash2 /> Remove
          </button>
        </div>

        {/* Footer Copy */}
        <div className="flex items-center justify-between p-3 border-t border-neutral-700 bg-neutral-950 rounded-b-2xl mt-2">
          <span className="text-sm text-neutral-400">E-commerce Cart</span>
          <button onClick={handleCopy} className="flex items-center gap-1 text-sm text-neutral-400 hover:text-white">
            <FiCopy /> {copied ? "Copied ✓" : "Copy Code"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondCart;
