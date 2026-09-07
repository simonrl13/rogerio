import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-[#111111] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-300">Rogério Freire</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em]">Arte, memória e identidade visual.</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300">
            Portfólio em fase de apresentação, com peças em destaque e produtos inspirados nas obras do artista.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <a
            href="https://wa.me/5583998235113?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20as%20obras%20e%20produtos%20do%20Rog%C3%A9rio%20Freire."
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Falar no WhatsApp
          </a>
          <Link href="/contato" className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Enviar mensagem
          </Link>
        </div>
      </div>
    </footer>
  );
}
