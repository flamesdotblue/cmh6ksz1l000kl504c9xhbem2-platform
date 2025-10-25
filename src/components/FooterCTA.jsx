export default function FooterCTA() {
  return (
    <footer className="relative mt-24 border-t border-zinc-800/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.07),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(20,184,166,0.06),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Bring your data to life</h3>
          <p className="mt-3 text-zinc-300">Deploy a production-ready analytics stack in minutes. Start free, scale elastically, and pay as you grow.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition">Create workspace</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-zinc-800 bg-black/60 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:text-white transition">Talk to sales</a>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-zinc-800/60 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-white">Dashboards</a></li>
              <li><a href="#" className="hover:text-white">Pipelines</a></li>
              <li><a href="#" className="hover:text-white">Connectors</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">DPA</a></li>
              <li><a href="#" className="hover:text-white">Trust</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-6 text-sm text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Neonlytics, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Compliance</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
