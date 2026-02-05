import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "@mui/material/Divider";
import { FiLayers } from "react-icons/fi";

/* =================================================
  Types
================================================= */

type LinkItem = {
  name: string;
  path: string;
};

type SidebarDividerProps = {
  label?: string;
};

type SidebarContentProps = {
  links: LinkItem[];
  close?: () => void;
};

/* =================================================
  Reusable Divider (MUI style)
================================================= */

const SidebarDivider = ({ label }: SidebarDividerProps) => {
  return (
    <div className="my-5">
      {label && (
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 px-2">
          {label}
        </p>
      )}
      <Divider sx={{ bgcolor: "rgba(255,255,255,0.1)" }} />
    </div>
  );
};

/* =================================================
  Sidebar
================================================= */

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const links: LinkItem[] = [
    { name: "Card", path: "/card" },
    { name: "Form", path: "/form" },
    { name: "Fotter", path: "/footer" },
    { name: "button", path: "/button" },
    { name: "Input", path: "/input" },
    { name: "Cart", path: "/cart" },
    { name: "Pricing Plane", path: "/price" },

  ];




  return (
    <>
      {/* ===== Mobile Toggle Button ===== */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-600 p-2 rounded-xl text-white shadow-lg"
      >
        <Menu size={25} />
      </button>


      {/* ===== Desktop Sidebar ===== */}
      <aside
        className="
            hidden lg:flex flex-col
            w-72 h-screen fixed left-0 top-0
            bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
            border-r border-white/10
            text-white p-6
            overflow-y-auto
          "
      >
        <SidebarContent links={links} />

      </aside>

      {/* ===== Mobile Sidebar ===== */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* drawer */}
            <motion.aside
              className="
                  lg:hidden fixed left-0 top-0 h-full w-72 z-50
                  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
                  border-r border-white/10 p-6 text-white
                  overflow-y-auto
                "
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <div className="flex justify-end mb-6">
                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              <SidebarContent links={links} close={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

/* =================================================
  Sidebar Content
================================================= */

const SidebarContent = ({ links, close }: SidebarContentProps) => {
  const [search, setSearch] = useState('')

  const linkStyle = `
      flex items-center gap-3
      px-4 py-3 rounded-xl
      text-gray-300
      hover:bg-indigo-600/30
      hover:text-white
      transition
    `;

  const searchFilter = links.filter((s) =>
    s.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <>
      <Link to={'/'}>
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <FiLayers className="text-white" size={20} />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tighter italic">Koda<span className="text-blue-500">UI</span></h1>
        </div>
      </Link>

      {/* searching  */}
      <div className="relative mt-5 group mx-auto w-full max-w-[220px]">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={16} className="text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
        />
      </div>

      <SidebarDivider label="Components" />

      <nav className="flex flex-col gap-2">
        {searchFilter.slice(0, 5).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={close}
            className={linkStyle}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <SidebarDivider label="E-commerce cart" />

      <nav className="flex flex-col gap-2">
        {searchFilter.slice(5, 6).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={close}
            className={linkStyle}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <SidebarDivider label="Pricing" />

      <nav className="flex flex-col gap-2">
        {searchFilter.slice(6, 7).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={close}
            className={linkStyle}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
};
