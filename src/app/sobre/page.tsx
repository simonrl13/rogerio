const milestones = [
  "Nascido em Campina Grande, o artista constrói sua obra a partir da memória urbana e da identidade da cidade.",
  "A pandemia foi um ponto de virada: foi nesse período que a arte saiu do subconsciente e virou linguagem profissional.",
  "Sua exposição “O Tempo das Cores – Parte 3 | Experiências” reúne mais de 60 obras no Museu de Arte Popular da Paraíba.",
  "A produção combina geometria, cor vibrante, design, objetos cotidianos e uma forte presença cultural local.",
];

export default function SobrePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10">
      <header className="mb-10 space-y-4">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">Sobre</p>
        <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-900 sm:text-5xl">Uma obra que atravessa lugares e memorias</h1>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[30px] border border-black/10 bg-[#111111] p-7 text-white sm:p-8 lg:p-10">
          <p className="text-base leading-8 text-zinc-200">
            Rogério Freire nasceu em Campina Grande e, ao longo de anos dedicados ao jornalismo social, manteve uma convivência profunda com a cidade e com as pessoas que a habitam. Foi durante o período de isolamento da pandemia que sua veia artística ganhou forma, tornando-se um caminho de expressão, criação e reinvenção pessoal.
          </p>
          <p className="mt-5 text-base leading-8 text-zinc-200">
            A partir dali, o artista passou a desenvolver uma linguagem marcada por formas geométricas, cores intensas, abstracionismo e forte presença visual. Em sua exposição “O Tempo das Cores – Parte 3 | Experiências”, realizada no Museu de Arte Popular da Paraíba (MAPP), ele apresenta mais de 60 peças inspiradas em arquitetura, tradições, artesanato e o colorido do cotidiano campinense.
          </p>
          <p className="mt-5 text-base leading-8 text-zinc-200">
            Sua obra integra pintura, design e experiência sensorial. Partindo do desenho manual, o artista transforma elementos cotidianos em uma linguagem visual contemporânea, vibrante e profundamente conectada à memória e ao imaginário cultural da cidade.
          </p>
        </section>

        <aside className="rounded-[30px] border border-black/10 bg-[#e9d8a6] p-7 sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-700">Em destaque</p>
          <div className="mt-6 space-y-4">
            {milestones.map((item, index) => (
              <div key={index} className="flex gap-3 rounded-[18px] border border-black/10 bg-white/80 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111111] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
