import { useState } from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiYoutube, FiCopy, FiCheck, FiShoppingBag, FiMapPin } from "react-icons/fi";

const FourFooter = () => {
  const [copied, setCopied] = useState(false);

  // SOURCE CODE: Exact same animations and structure
  const sourceCode = `import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiYoutube, FiMapPin } from "react-icons/fi";

const RetailFooter = () => {
  const sections = [
    { title: "ABOUT", links: ["Contact Us", "About Us", "Careers", "Koda Stories", "Wholesale"] },
    { title: "HELP", links: ["Payments", "Shipping", "Cancellation", "FAQ", "Report Infringement"] },
    { title: "POLICY", links: ["Return Policy", "Terms Of Use", "Security", "Privacy", "Sitemap"] },
    { title: "SOCIAL", links: ["Facebook", "Twitter", "YouTube"] },
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/5 flex justify-center py-16 px-6 font-sans">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/5">
          {sections.map((sec, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h4 className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">{sec.title}</h4>
              {sec.links.map((link) => (
                <a key={link} href="#" className="text-white hover:text-blue-500 text-[11px] font-medium transition-colors">{link}</a>
              ))}
            </div>
          ))}
          
          <div className="md:col-span-2 border-l border-white/10 pl-8 flex flex-col gap-4">
            <h4 className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Mail Us:</h4>
            <p className="text-white text-[11px] leading-relaxed opacity-80">
              KodaUI Architecture Private Limited,<br/>
              Buildings Alyssa, Begonia &<br/>
              Clove Embassy Tech Village,<br/>
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-white text-[11px] font-bold">
            <span className="flex items-center gap-2"><FiShoppingBag className="text-blue-500"/> Become a Seller</span>
            <span className="flex items-center gap-2"><FiMapPin className="text-blue-500"/> Advertise</span>
          </div>
          <p className="text-[10px] text-neutral-600 font-bold uppercase">© 2026 KodaUI_Retail_Node. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    { title: "ABOUT", links: ["Contact Us", "About Us", "Koda Stories", "Wholesale"] },
    { title: "HELP", links: ["Payments", "Shipping", "FAQ", "Report Issue"] },
    { title: "POLICY", links: ["Return Policy", "Security", "Privacy", "Sitemap"] },
    { title: "SOCIAL", links: ["Facebook", "Twitter", "YouTube"] },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 flex flex-col items-center">
      <div className="w-full bg-neutral-950 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* PREVIEW AREA (Centered) */}
        <div className="min-h-[700px] flex items-center justify-center bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent">
          
          <div className="w-full px-10 py-16">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 pb-16 border-b border-white/5">
              {sections.map((sec, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <h4 className="text-neutral-600 text-[9px] font-black uppercase tracking-[0.3em]">{sec.title}</h4>
                  {sec.links.map((link) => (
                    <motion.a 
                      key={link} 
                      whileHover={{ color: "#3b82f6" }}
                      className="text-neutral-300 text-[11px] font-bold cursor-pointer transition-colors"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
              ))}
              
              <div className="md:col-span-2 md:border-l border-white/5 md:pl-12 flex flex-col gap-6">
                <div>
                  <h4 className="text-neutral-600 text-[9px] font-black uppercase tracking-[0.3em] mb-4">Mail Us:</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-medium">
                    KodaUI Digital Solutions,<br/>
                    Cyber Hub, Phase-02,<br/>
                    Hitech City, Hyderabad,<br/>
                    500081, Telangana, India
                  </p>
                </div>
                <div className="flex gap-4">
                  {[FiFacebook, FiTwitter, FiYoutube].map((Icon, idx) => (
                    <motion.div whileHover={{ scale: 1.2, color: "#fff" }} key={idx} className="text-neutral-600 cursor-pointer">
                      <Icon size={18} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap justify-center gap-10 text-white text-[10px] font-black uppercase tracking-widest">
                <span className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors">
                  <FiShoppingBag className="text-blue-500" /> Become a Seller
                </span>
                <span className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors">
                  <FiMapPin className="text-blue-500" /> Advertise
                </span>
                <span className="text-neutral-800">|</span>
                <span className="text-neutral-500 italic">v.2.0.26_Stable</span>
              </div>
              <p className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.2em]">© 2026 Koda_Retail_Protocol</p>
            </div>
          </div>
        </div>

        {/* FOOTER ACTION BAR */}
        <div className="bg-white/5 border-t border-white/5 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
              <FiShoppingBag className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neutral-500 font-black uppercase tracking-[0.4em]">Node / Flipkart_Retial_v4</p>
              <p className="text-[8px] text-neutral-700 font-bold uppercase mt-1">UX: Horizontal_Data_Stack</p>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="w-full md:w-auto bg-neutral-900 hover:bg-white hover:text-black border border-white/10 px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            {copied ? <><FiCheck /> CODE_&_ANIM_SYNCED</> : <><FiCopy /> CLONE_FLIPKART_FOOTER</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourFooter;