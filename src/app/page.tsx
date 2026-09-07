import Link from "next/link";
import { artworks } from "@/data/artworks";
import { products } from "@/data/products";

const featuredArtwork = artworks.find((artwork) => artwork.featured) ?? artworks[0];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-8 lg:px-10">
      <section className="grid items-center gap-10 overflow-hidden rounded-[32px] border border-black/10 bg-[#111111] px-6 py-10 text-white shadow-[0_30px_60px_rgba(17,17,17,0.18)] lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14">
        <div className="space-y-7">
          <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-200">
            Arte pop geométrica
          </span>

          <div className="space-y-4">
            <h1 className="max-w-lg text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Rogério Freire
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-300">
              Artista plástico de Campina Grande, cuja obra reúne geometria, memória urbana e cor vibrante em uma linguagem visual profundamente ligada à identidade da cidade.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/galeria" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200">
              Ver galeria
            </Link>
            <Link href="/produtos" className="rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Explorar produtos
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center">
          <div className="absolute inset-8 rounded-[32px] border border-white/10 bg-white/5" />
          <div className="relative h-[340px] w-full max-w-[420px] overflow-hidden rounded-[30px] bg-[#f7f1ea] shadow-[0_25px_55px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#f5f1ea_0%,#f5f1ea_25%,transparent_25%,transparent_100%)]" />
            <div className="absolute left-6 top-6 h-28 w-28 rounded-[26px]" style={{ background: featuredArtwork.palette[0] }} />
            <div className="absolute right-8 top-8 h-32 w-32 rotate-12 rounded-[24px]" style={{ background: featuredArtwork.palette[1] ?? featuredArtwork.palette[0] }} />
            <div className="absolute bottom-7 left-10 h-28 w-28 rounded-full" style={{ background: featuredArtwork.palette[2] ?? featuredArtwork.palette[0] }} />
            <div className="absolute bottom-8 right-12 h-16 w-16 rounded-[20px] rotate-45" style={{ background: featuredArtwork.palette[3] ?? featuredArtwork.palette[0] }} />
            <div className="absolute inset-x-10 bottom-10 h-14 rounded-[18px] border border-black/10" style={{ background: featuredArtwork.palette[4] ?? featuredArtwork.palette[0] }} />
          </div>
        </div>
      </section>

      <section className="geometric-divider mt-20 pb-14 pt-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">Obra principal</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-900">{featuredArtwork.title}</h2>
          </div>
          <Link href="/galeria" className="text-sm font-semibold text-zinc-700 underline-offset-4 hover:underline">
            Ver todas as obras
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {artworks.slice(0, 3).map((artwork) => (
            <article key={artwork.id} className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.04)]">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7f1ea_28%,transparent_28%,transparent_100%)]" />
                <div className="absolute left-6 top-6 h-20 w-20 rounded-[18px]" style={{ background: artwork.palette[0] }} />
                <div className="absolute right-7 top-8 h-24 w-24 rotate-12 rounded-[20px]" style={{ background: artwork.palette[1] ?? artwork.palette[0] }} />
                <div className="absolute bottom-7 left-8 h-20 w-20 rounded-full" style={{ background: artwork.palette[2] ?? artwork.palette[0] }} />
                <div className="absolute inset-x-8 bottom-8 h-12 rounded-[16px]" style={{ background: artwork.palette[3] ?? artwork.palette[0] }} />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">{artwork.category}</p>
                <h3 className="text-xl font-semibold text-zinc-900">{artwork.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{artwork.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[30px] border border-black/10 bg-[#e9d8a6] p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-700">Produtos inspirados na arte</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-900">Canecas, almofadas, cadernos e camisetas</h2>
          </div>
          <Link href="/produtos" className="inline-flex rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2d2d2d]">
            Ver produtos
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="rounded-[24px] border border-black/10 bg-white/75 p-4 shadow-[0_12px_25px_rgba(15,23,42,0.05)]">
              <div className="relative h-52 overflow-hidden rounded-[20px] bg-[#111111]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,transparent_25%,transparent_100%)]" />
                <div className="absolute left-5 top-5 h-16 w-20 rounded-[18px]" style={{ background: product.palette[0] }} />
                <div className="absolute right-6 top-6 h-18 w-18 rounded-full" style={{ background: product.palette[1] ?? product.palette[0] }} />
                <div className="absolute bottom-6 left-6 h-16 w-16 rounded-[16px]" style={{ background: product.palette[2] ?? product.palette[0] }} />
                <div className="absolute bottom-5 right-6 h-16 w-20 rounded-[18px]" style={{ background: product.palette[3] ?? product.palette[0] }} />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">{product.category}</span>
                <span className="text-sm font-semibold text-zinc-600">{product.priceLabel}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900">{product.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[30px] border border-black/10 bg-[#111111] p-7 text-white sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-300">História</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Uma presença cultural de referência</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300">
            Rogério Freire encontrou na arte uma nova forma de expressão após um período de transformação pessoal e social. Sua linguagem reúne cultura local, arquitetura, tradições e memória visual de Campina Grande em peças geométricas e extremamente coloridas.
          </p>
          <Link href="/sobre" className="mt-6 inline-flex rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Conhecer a história
          </Link>
        </div>

        <div className="rounded-[30px] border border-black/10 bg-white p-7 sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">Contato</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-900">Peça uma obra ou um produto</h2>
          <p className="mt-5 text-base leading-7 text-zinc-600">
            Converse diretamente com o artista e personalize sua peça ou presente com a identidade visual da sua coleção.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://wa.me/5583998235113?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20um%20produto%20ou%20uma%20obra%20do%20Rog%C3%A9rio%20Freire." target="_blank" rel="noreferrer" className="rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2d2d2d]">
              WhatsApp
            </a>
            <Link href="/contato" className="rounded-full border border-black/10 bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200">
              Enviar mensagem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
