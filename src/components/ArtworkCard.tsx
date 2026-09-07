import type { Artwork } from "@/data/artworks";

type ArtworkCardProps = {
  artwork: Artwork;
};

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const first = artwork.palette[0];
  const second = artwork.palette[1] ?? artwork.palette[0];
  const third = artwork.palette[2] ?? artwork.palette[0];

  return (
    <article className="group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1">
      <div className="relative h-80 overflow-hidden bg-[#111111]">
        {/* TODO: substituir este placeholder local por imagem real da obra do artista quando disponível. */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f5f1ea_0%,#f5f1ea_18%,transparent_18%,transparent_100%)]" />
        <div className="absolute left-6 top-6 h-24 w-24 rounded-[20px] border border-white/40" style={{ background: first }} />
        <div className="absolute right-8 top-10 h-32 w-32 rotate-12 rounded-[26px] border border-white/40" style={{ background: second }} />
        <div className="absolute bottom-8 left-12 h-28 w-28 rounded-full border border-white/40" style={{ background: third }} />
        <div className="absolute inset-x-10 bottom-10 h-14 rounded-[18px] border border-white/30" style={{ background: first }} />
        <div className="absolute inset-x-0 bottom-0 h-20 opacity-60" style={{ background: second }} />
        <div className="absolute right-12 top-20 h-12 w-12 rounded-full border border-black/20" style={{ background: artwork.palette[3] ?? "#ffffff" }} />
        <div className="absolute left-16 bottom-16 h-14 w-14 rotate-45 border border-white/40" style={{ background: artwork.palette[4] ?? first }} />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">{artwork.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">{artwork.title}</h3>
          </div>
          <span className="rounded-full border border-black/10 bg-zinc-100 px-2.5 py-1 text-[0.65rem] font-medium text-zinc-700">
            {artwork.year}
          </span>
        </div>

        <p className="text-sm leading-6 text-zinc-600">{artwork.description}</p>

        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">{artwork.format}</span>
          <a href="/galeria" className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline">
            Ver peça
          </a>
        </div>
      </div>
    </article>
  );
}
