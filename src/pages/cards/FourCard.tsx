import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FourCard = () => {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => setLiked(!liked);

  // Full code snippet for copying, including imports
  const code = `import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";

export const App = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => setLiked(!liked);

  return (
    <div className="max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60"
        alt="Blog"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">Blog Title</h3>
        <p className="text-neutral-400 mt-1 text-sm">
          This is a short excerpt of the blog post that summarizes the content in one or two lines.
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-neutral-400 text-sm">John Doe • Feb 4, 2026</span>
          <button
            onClick={handleLike}
            className={\`transition \${liked ? "text-red-500" : "text-neutral-400 hover:text-red-500"}\`}
          >
            {liked ? <AiFillHeart className="h-5 w-5" /> : <AiOutlineHeart className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 border-t border-neutral-800 bg-neutral-950">
        <span className="text-sm text-neutral-400">Blog Card</span>
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
    <div className="bg-[rgb(2,6,23)] px-6 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60"
          alt="Blog"
          className="w-full h-48 object-cover"
        />

        {/* Blog Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">Blog Title</h3>
          <p className="text-neutral-400 mt-1 text-sm">
            This is a short excerpt of the blog post that summarizes the content in one or two lines.
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-neutral-400 text-sm">John Doe • Feb 4, 2026</span>
            <button
              onClick={handleLike}
              className={`transition ${liked ? "text-red-500" : "text-neutral-400 hover:text-red-500"}`}
            >
              {liked ? <AiFillHeart className="h-5 w-5" /> : <AiOutlineHeart className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-3 border-t border-neutral-800 bg-neutral-950">
          <span className="text-sm text-neutral-400">Blog Card</span>
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

export default FourCard;
