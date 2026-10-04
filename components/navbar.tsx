import { ShieldCheck, Users, AlertTriangle, BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Admin</p>
        <h1 className="mt-2 text-3xl font-black">Dashboard di moderazione</h1>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <Stat icon={<Users className="h-5 w-5" />} label="Utenti" value="12.4k" />
        <Stat icon={<BarChart3 className="h-5 w-5" />} label="Campagne" value="128" />
        <Stat icon={<ShieldCheck className="h-5 w-5" />} label="Richieste" value="24" />
        <Stat icon={<AlertTriangle className="h-5 w-5" />} label="Segnalazioni" value="7" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Richieste in coda" rows={['Prison School — Stagione 2', 'Hoshinokun — film', 'Danganronpa — live action']} />
        <Panel title="Audit log" rows={['Admin @luca: approvata 3 campagne', 'Admin @maria: bloccato utente 4047', 'Admin @carlo: richiesta modificata']} />
      </div>
    </main>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 inline-flex rounded-xl bg-pink-50 p-2 text-brand-600">{icon}</div>
      <div className="text-3xl font-black">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Panel({ title, rows }: { title: string; rows: string[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <ul className="space-y-3 text-sm text-slate-700">
        {rows.map((row) => (
          <li key={row} className="rounded-xl bg-slate-50 px-3 py-2">{row}</li>
        ))}
      </ul>
    </section>
  );
}
