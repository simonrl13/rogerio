export default function ContatoPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">Contato</p>
        <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-900 sm:text-5xl">Fale com o artista</h1>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[30px] border border-black/10 bg-[#111111] p-7 text-white sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-300">Atendimento</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">WhatsApp</h2>
          <p className="mt-4 text-base leading-7 text-zinc-300">
            Para encomendas de obras, peças derivadas ou pedidos personalizados, fale diretamente por mensagem pré-preenchida.
          </p>
          <a
            href="https://wa.me/5583998235113?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20adquirir%20uma%20obra%20ou%20um%20produto%20do%20Rog%C3%A9rio%20Freire."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Iniciar conversa
          </a>
        </aside>

        <section className="rounded-[30px] border border-black/10 bg-white p-7 sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">E-mail</p>
          <form
            action="https://formspree.io/f/xnqewqrg"
            method="POST"
            className="mt-6 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-zinc-700">
                Nome
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
                  placeholder="Seu nome"
                />
              </label>

              <label className="block text-sm font-medium text-zinc-700">
                E-mail
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
                  placeholder="seu@email.com"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-zinc-700">
              Mensagem
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-zinc-900"
                placeholder="Escreva sua mensagem..."
              />
            </label>

            <button
              type="submit"
              className="inline-flex rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2d2d2d]"
            >
              Enviar mensagem
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
