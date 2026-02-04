import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu as MenuIcon, Close } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const location = useLocation();

    const links = [
        { name: "About", path: "/about" },
        { name: "About", path: "/about" },
        { name: "About", path: "/about" },
        { name: "About", path: "/about" },
        { name: "About", path: "/about" },
        { name: "About", path: "/about" },

    ];

    /* ================= Body Scroll Lock ================= */
    React.useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    }, [sidebarOpen]);

    /* ================= ESC Close ================= */
    React.useEffect(() => {
        const close = (e) => e.key === "Escape" && setSidebarOpen(false);
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    return (
        <>
            {/* ================= HEADER ================= */}
            <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">

                    {/* ===== Logo ===== */}
                    <Link to="/" className="flex items-center gap-2">
                        {/* <img src="logo.png" alt="logo" className="w-9" /> */}
                        <span className="text-white font-semibold text-lg">
                            UIBlocks
                        </span>
                    </Link>

                    {/* ===== Desktop Nav ===== */}
                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        {links.map((item) => {
                            const active = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative group transition ${active
                                            ? "text-white"
                                            : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {item.name}

                                    {/* underline */}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* ===== Desktop CTA ===== */}


                    {/* ===== Mobile Toggle (ICON + TEXT) ===== */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="md:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition"
                    >
                        <MenuIcon fontSize="small" />
                        <span className="text-sm font-medium">Menu</span>
                    </button>
                </div>
            </header>

            {/* ================= MOBILE SIDEBAR ================= */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="fixed top-0 left-0 h-full w-72 z-50
              bg-gradient-to-b from-slate-950 via-gray-900 to-slate-900
              border-r border-white/10 p-6 text-white shadow-2xl"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 280, damping: 28 }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <span className="text-lg font-semibold">Menu</span>

                                <button onClick={() => setSidebarOpen(false)}>
                                    <Close />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex flex-col gap-3">
                                {links.map((item) => {
                                    const active = location.pathname === item.path;

                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setSidebarOpen(false)}
                                            className={`px-4 py-3 rounded-xl text-sm transition ${active
                                                    ? "bg-indigo-600 text-white"
                                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
