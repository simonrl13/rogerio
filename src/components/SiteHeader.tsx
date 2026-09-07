"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/galeria", label: "Galeria" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f1ea]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#111111] text-sm font-semibold text-white">
            RF
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Rogério Freire</p>
            <p className="text-sm font-medium text-zinc-900">Arte e identidade</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/5583998235113?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20as%20obras%20do%20Rog%C3%A9rio%20Freire."
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#111111] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a]"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
