import { useState } from "react";

/* ================= Types ================= */

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

/* ================= Component ================= */

const ShowOfComponent: React.FC = () => {
  // qty per product (better than single qty)
  const [qtyMap, setQtyMap] = useState<Record<number, number>>({});

  const products: Product[] = [
    {
      id: 1,
      name: "Cool Sneakers",
      price: "$99.00",
      image:
        "https://images.unsplash.com/photo-1606813909352-2f7e3b47e4f0",
    },
    {
      id: 2,
      name: "Stylish Watch",
      price: "$199.00",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      id: 3,
      name: "Leather Bag",
      price: "$149.00",
      image:
        "https://images.unsplash.com/photo-1616627981974-1a1c1f17c8d4",
    },
  ];

  /* ================= Helpers ================= */

  const getQty = (id: number): number => qtyMap[id] ?? 1;

  const updateQty = (id: number, value: number) => {
    setQtyMap((prev) => ({
      ...prev,
      [id]: Math.max(1, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  /* ================= UI ================= */

  return (
    <section className="w-full py-24 bg-slate-950 text-white">
      {/* Header */}
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
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card */}
          <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 hover:-translate-y-3 transition-all">
            <h3 className="font-semibold mb-6 text-lg">Card Component</h3>
            <div className="bg-slate-900 rounded-2xl p-4 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                className="rounded-xl h-32 w-full object-cover mb-3"
              />
              <h4 className="font-semibold">Product Card</h4>
              <p className="text-gray-400 text-sm mb-3">
                Modern UI preview card design
              </p>
              <button className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm">
                View Code
              </button>
            </div>
          </div>

          {/* Date Picker */}
          <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition-all">
            <h3 className="font-semibold mb-6 text-lg">Date Picker</h3>

            <div className="bg-slate-900 rounded-2xl p-4 space-y-3">
              <input
                type="date"
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm"
              />

              <div className="grid grid-cols-7 gap-1 text-xs text-gray-400">
                {[...Array(28)].map((_, i: number) => (
                  <div
                    key={i}
                    className="p-2 text-center rounded-md hover:bg-indigo-600 hover:text-white cursor-pointer"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition-all">
            <h3 className="font-semibold mb-6 text-lg">Form Component</h3>

            <form
              onSubmit={handleSubmit}
              className="bg-slate-900 rounded-2xl p-4 space-y-3"
            >
              <input
                placeholder="Email"
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-sm"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* E-commerce Gallery */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="font-semibold mb-6 text-lg text-center">
            E-commerce Cart Gallery
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product: Product) => (
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
                  <span className="text-gray-400 text-sm">
                    {product.price}
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-slate-800 rounded-xl">
                    <button
                      onClick={() =>
                        updateQty(product.id, getQty(product.id) - 1)
                      }
                      className="px-3 py-1 hover:bg-indigo-600"
                    >
                      -
                    </button>

                    <span className="px-4">{getQty(product.id)}</span>

                    <button
                      onClick={() =>
                        updateQty(product.id, getQty(product.id) + 1)
                      }
                      className="px-3 py-1 hover:bg-indigo-600"
                    >
                      +
                    </button>
                  </div>

                  <button className="text-red-500 text-sm hover:underline">
                    Remove
                  </button>
                </div>

                <button className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm">
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
