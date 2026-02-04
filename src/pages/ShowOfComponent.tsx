import { useState } from "react";

const ShowOfComponent = () => {
    const [qty, setQty] = useState(1);
    const [selectedDate, setSelectedDate] = useState(null);

    // Example cart products for gallery
    const products = [
        {
            id: 1,
            name: "Cool Sneakers",
            price: "$99.00",
            image: "https://images.unsplash.com/photo-1606813909352-2f7e3b47e4f0",
        },
        {
            id: 2,
            name: "Stylish Watch",
            price: "$199.00",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        },
        {
            id: 3,
            name: "Leather Bag",
            price: "$149.00",
            image: "https://images.unsplash.com/photo-1616627981974-1a1c1f17c8d4",
        },
    ];

    // Example days of month
    const days = Array.from({ length: 28 }, (_, i) => i + 1);

    return (
        <section className="w-full py-24 bg-slate-950 text-white">
            {/* ================= Header ================= */}
            <div className="w-full text-center mb-16 px-6 lg:px-12">
                <h2 className="text-4xl font-bold mb-4">
                    Ready-made Components for Every Need
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto">
                    Copy, preview and use beautiful UI blocks instantly.
                    Built with React + Tailwind for modern apps.
                </p>
            </div>

            <div className="w-full px-6 lg:px-12">
                {/* ================= Top Row (3 Components) ================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

                    {/* Card Component */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 hover:-translate-y-3 transition-all">
                        <h3 className="font-semibold mb-6 text-lg">Card Component</h3>
                        <div className="bg-slate-900 rounded-2xl p-4 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                alt=""
                                className="rounded-xl h-32 w-full object-cover mb-3"
                            />
                            <h4 className="font-semibold">Product Card</h4>
                            <p className="text-gray-400 text-sm mb-3">
                                Modern UI preview card design
                            </p>
                            <button className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-sm">
                                View Code
                            </button>
                        </div>
                    </div>

                    {/* date Component */}

                    <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 hover:-translate-y-3 transition-all">

                        <h3 className="font-semibold mb-6 text-lg">Date Picker</h3>

                        <div className="bg-slate-900 rounded-2xl p-4 space-y-3">

                            <input
                                type="date"
                                className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500"
                            />

                            {/* fake calendar preview */}
                            <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 mt-2">
                                {[...Array(28)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="p-2 text-center rounded-md hover:bg-indigo-600 hover:text-white transition cursor-pointer"
                                    >
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Component */}
                    <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 hover:-translate-y-3 transition-all">
                        <h3 className="font-semibold mb-6 text-lg">Form Component</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Form Submitted!");
                            }}
                            className="bg-slate-900 rounded-2xl p-4 space-y-3"
                        >
                            <input
                                placeholder="Email"
                                className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-indigo-500"
                            />
                            <button
                                type="submit"
                                className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-sm hover:scale-105 transition"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>

                {/* ================= Bottom Row (E-commerce Gallery) ================= */}
                <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition-all">
                    <h3 className="font-semibold mb-6 text-lg text-center">E-commerce Cart Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-slate-900 rounded-2xl p-4 shadow-lg flex flex-col gap-3"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-xl h-36 w-full object-cover"
                                />
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold">{product.name}</h4>
                                    <span className="text-gray-400 text-sm">{product.price}</span>
                                </div>

                                {/* Quantity control */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 bg-slate-800 rounded-xl">
                                        <button
                                            onClick={() => setQty(Math.max(1, qty - 1))}
                                            className="px-3 py-1 rounded-l-xl hover:bg-indigo-600 transition"
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{qty}</span>
                                        <button
                                            onClick={() => setQty(qty + 1)}
                                            className="px-3 py-1 rounded-r-xl hover:bg-indigo-600 transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className="text-red-500 text-sm hover:underline">
                                        Remove
                                    </button>
                                </div>

                                <button className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-sm">
                                    Checkout
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ShowOfComponent;
