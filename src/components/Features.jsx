import { BarChart3, Database, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-time Streaming',
    desc: 'Ingest, transform, and visualize event streams as they happen with sub-second freshness.',
    badge: 'Kafka / Webhooks / CDC',
  },
  {
    icon: Database,
    title: 'Unified Warehouse',
    desc: 'Query across lakes and warehouses from a single semantic layer with automatic optimization.',
    badge: 'Snowflake / BigQuery / S3',
  },
  {
    icon: BarChart3,
    title: 'Beautiful Dashboards',
    desc: 'Compose interactive visuals and notebooks with versioning, sharing, and access controls.',
    badge: 'Notebooks + BI',
  },
  {
    icon: ShieldCheck,
    title: 'Governance by Default',
    desc: 'Column-level lineage, PII detection, and policy-based access for regulated teams.',
    badge: 'SOC2 / GDPR',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Analytics without the drag</h2>
        <p className="mt-3 text-zinc-300">
          From ingestion to insights, Neonlytics streamlines every step with a developer-first toolkit and enterprise-grade reliability.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <FeatureCard key={idx} {...f} />
        ))}
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <Stat value="99.99%" label="Uptime SLA" />
        <Stat value="4.6/5" label="G2 Rating" />
        <Stat value="< 1 min" label="Time to First Dashboard" />
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, badge }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black p-5">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />
      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-500/30 bg-black/60 text-emerald-300">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <span className="mt-4 inline-flex w-fit items-center rounded-md border border-emerald-500/30 bg-black/60 px-2 py-1 text-xs text-emerald-300">
        {badge}
      </span>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-black/40 p-6 text-center">
      <div className="text-3xl font-semibold text-emerald-300">{value}</div>
      <div className="mt-1 text-sm text-zinc-400">{label}</div>
    </div>
  );
}
