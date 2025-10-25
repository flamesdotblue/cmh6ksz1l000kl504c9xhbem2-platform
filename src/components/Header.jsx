import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
      <li><a href="#features" className="text-sm text-zinc-300 hover:text-white transition">Solutions</a></li>
      <li><a href="#features" className="text-sm text-zinc-300 hover:text-white transition">Platform</a></li>
      <li><a href="#pricing" className="text-sm text-zinc-300 hover:text-white transition">Pricing</a></li>
      <li><a href="#docs" className="text-sm text-zinc-300 hover:text-white transition">Docs</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/60 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-emerald-500/20 ring-1 ring-emerald-500/40 grid place-items-center">
            <div className="h-3 w-3 rounded-sm bg-emerald-400 shadow-[0_0_20px_4px] shadow-emerald-500/40" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Neonlytics</span>
        </a>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-zinc-300 hover:text-white">Sign in</a>
          <a
            href="#get-started"
            className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition"
          >
            Get Started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-800/60 bg-black/90">
          <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
            <NavLinks />
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="text-sm text-zinc-300 hover:text-white">Sign in</a>
              <a
                href="#get-started"
                className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
