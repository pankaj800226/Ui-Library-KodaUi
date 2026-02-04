import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";

const FiveCard = () => {
  const [following, setFollowing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFollow = () => {
    setFollowing(!following);
  };

  const code = `import React, { useState } from "react";
import { motion } from "framer-motion";

export const App = () => {
  const [following, setFollowing] = useState(false);

  const handleFollow = () => setFollowing(!following);

  return (
    <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden p-6">
      <div className="flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-blue-600"
        />
        <h3 className="text-lg font-semibold text-white mt-4">Jane Doe</h3>
        <p className="text-neutral-400 text-sm">UI/UX Designer</p>
        <div className="flex gap-6 mt-4 text-center">
          <div>
            <p className="text-white font-semibold">1.2K</p>
            <p className="text-neutral-400 text-xs">Followers</p>
          </div>
          <div>
            <p className="text-white font-semibold">240</p>
            <p className="text-neutral-400 text-xs">Posts</p>
          </div>
        </div>
        <motion.button
          onClick={handleFollow}
          whileTap={{ scale: 0.95 }}
          className={\`mt-4 w-full rounded-lg py-2 font-semibold transition \${following ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-500"}\`}
        >
          {following ? "Following" : "Follow"}
        </motion.button>
      </div>
    </div>
  );
};`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-[rgb(2,6,23)] px-6 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm sm:max-w-md lg:max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg overflow-hidden p-6"
      >
        {/* Avatar & Info */}
        <div className="flex flex-col items-center">
          <img
           
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=60"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-2 border-blue-600"
          />
          <h3 className="text-lg font-semibold text-white mt-4">Jane Doe</h3>
          <p className="text-neutral-400 text-sm">UI/UX Designer</p>
          <div className="flex gap-6 mt-4 text-center">
            <div>
              <p className="text-white font-semibold">1.2K</p>
              <p className="text-neutral-400 text-xs">Followers</p>
            </div>
            <div>
              <p className="text-white font-semibold">240</p>
              <p className="text-neutral-400 text-xs">Posts</p>
            </div>
          </div>
          <motion.button
            onClick={handleFollow}
            whileTap={{ scale: 0.95 }}
            className={`mt-4 w-full rounded-lg py-2 font-semibold transition ${
              following ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
          >
            {following ? "Following" : "Follow"}
          </motion.button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-3 border-t border-neutral-800 bg-neutral-950 mt-4">
          <span className="text-sm text-neutral-400">Profile Card</span>
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

export default FiveCard;
