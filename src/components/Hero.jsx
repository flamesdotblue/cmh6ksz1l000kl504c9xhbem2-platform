import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full" style={{ minHeight: '80vh' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 md:pt-28 lg:pt-36 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/50 px-3 py-1 text-xs text-emerald-300/90">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live data demos enabled
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Turn raw signals into decisions
          <span className="block bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">in milliseconds</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-zinc-300 md:text-lg">
          Neonlytics is a modern analytics platform for teams who need real-time insights, governed data, and stunning visualizations without the heavy lift.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-[0_0_25px_-5px_rgba(16,185,129,0.8)] hover:bg-emerald-400 transition"
          >
            Start free
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md border border-zinc-800 bg-black/60 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:text-white transition"
          >
            Explore features
          </a>
        </div>

        <dl className="mt-10 grid w-full grid-cols-2 gap-6 px-4 sm:grid-cols-4 md:gap-10">
          <div className="rounded-lg border border-emerald-500/20 bg-black/40 p-4">
            <dt className="text-xs text-zinc-400">Avg. Query Latency</dt>
            <dd className="mt-1 text-2xl font-semibold text-emerald-300">120ms</dd>
          </div>
          <div className="rounded-lg border border-emerald-500/20 bg-black/40 p-4">
            <dt className="text-xs text-zinc-400">Pipelines Deployed</dt>
            <dd className="mt-1 text-2xl font-semibold text-emerald-300">3.2k</dd>
          </div>
          <div className="rounded-lg border border-emerald-500/20 bg-black/40 p-4">
            <dt className="text-xs text-zinc-400">Data Processed</dt>
            <dd className="mt-1 text-2xl font-semibold text-emerald-300">1.8PB</dd>
          </div>
          <div className="rounded-lg border border-emerald-500/20 bg-black/40 p-4">
            <dt className="text-xs text-zinc-400">Customer NPS</dt>
            <dd className="mt-1 text-2xl font-semibold text-emerald-300">71</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
