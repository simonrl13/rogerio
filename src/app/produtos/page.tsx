"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { productCategories, products } from "@/data/products";

export default function ProdutosPage() {
  const [selected, setSelected] = useState<(typeof productCategories)[number]>("Todas");

  const filteredProducts = useMemo(() => {
    if (selected === "Todas") return products;
    return products.filter((product) => product.category === selected);
  }, [selected]);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10">
      <header className="mb-9 space-y-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">Produtos</p>
        <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-900 sm:text-5xl">Peças inspiradas na arte</h1>
      </header>

      <div className="mb-8 flex flex-wrap gap-3">
        {productCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelected(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              selected === category
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-black/10 bg-white text-zinc-700 hover:border-zinc-900 hover:text-zinc-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
