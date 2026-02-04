import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "@mui/material/Divider";

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
    { name: "Cards", path: "/cards" },
    { name: "Forms", path: "/forms" },
    { name: "E-commerce", path: "/ecommerce" },
    { name: "Orders", path: "/orders" },
    { name: "Products", path: "/products" },
    { name: "Customers", path: "/customers" },
    { name: "Analytics", path: "/analytics" },
    { name: "Reports", path: "/reports" },
    { name: "Invoices", path: "/invoices" },
    { name: "Coupons", path: "/coupons" },
    { name: "Settings", path: "/settings" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      {/* ===== Mobile Toggle Button ===== */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-600 p-2 rounded-xl text-white shadow-lg"
      >
        <Menu size={22} />
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
  const linkStyle = `
    flex items-center gap-3
    px-4 py-3 rounded-xl
    text-gray-300
    hover:bg-indigo-600/30
    hover:text-white
    transition
  `;

  return (
    <>
      <h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
        UI Library
      </h2>

      <SidebarDivider label="Components" />

      <nav className="flex flex-col gap-2">
        {links.slice(0, 2).map((item) => (
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
        {links.slice(2, 6).map((item) => (
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

      <SidebarDivider label="More" />

      <nav className="flex flex-col gap-2">
        {links.slice(6).map((item) => (
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
