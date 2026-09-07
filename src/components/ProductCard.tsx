import type { Product } from "@/data/products";

const whatsappBase = "https://wa.me/5583998235113";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const message = `Olá! Tenho interesse no ${product.name}`;
  const whatsappLink = `${whatsappBase}?text=${encodeURIComponent(message)}`;

  return (
    <article className="overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
      <div className="relative h-60 overflow-hidden bg-[#111111]">
        {/* TODO: substituir este placeholder local por imagem real do produto quando disponível. */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,transparent_28%),linear-gradient(135deg,#f5f1ea_0%,#f5f1ea_20%,transparent_20%)]" />
        <div className="absolute left-8 top-8 h-20 w-24 rounded-[20px] border border-white/40" style={{ background: product.palette[0] }} />
        <div className="absolute right-8 top-10 h-16 w-16 rotate-12 rounded-full border border-white/40" style={{ background: product.palette[1] ?? product.palette[0] }} />
        <div className="absolute bottom-8 left-10 h-16 w-16 rounded-[18px] border border-white/40" style={{ background: product.palette[2] ?? product.palette[0] }} />
        <div className="absolute bottom-10 right-8 h-20 w-24 rounded-[20px] border border-white/40" style={{ background: product.palette[3] ?? product.palette[0] }} />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-black/10 bg-zinc-100 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-600">
            {product.category}
          </span>
          <span className="text-sm font-semibold text-zinc-500">{product.priceLabel}</span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-900">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{product.description}</p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2c2c2c]"
        >
          Comprar via WhatsApp
        </a>
      </div>
    </article>
  );
}
