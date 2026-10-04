import Link from 'next/link';

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Profilo</p>
          <h1 className="mt-2 text-3xl font-black">Otaku_Italia</h1>
        </div>
        <Link href="/login" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-brand-200 hover:text-brand-600">
          Disconnetti
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Metric label="Campagne sostenute" value="12" />
        <Metric label="Totale dichiarato" value="€1.240" />
        <Metric label="Anime seguiti" value="18" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Panel title="I miei contributi" cards={['Prison School — €5', 'Love Story Yamada — €3', 'Ao Haru Ride — €2']} />
        <Panel title="Anime seguiti" cards={['Claymore', 'Ouran High School Host Club', 'Prison School']} />
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-3xl font-black">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Panel({ title, cards }: { title: string; cards: string[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <ul className="space-y-3">
        {cards.map((card) => (
          <li key={card} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">{card}</li>
        ))}
      </ul>
    </section>
  );
}
