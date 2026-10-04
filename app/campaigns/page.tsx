import Link from 'next/link';
import { ArrowRight, BadgeCheck, Heart, Search, ShieldCheck, Sparkles } from 'lucide-react';
import { CampaignCard } from '@/components/campaign-card';

const campaigns = [
  {
    id: 'prison-school',
    title: 'Prison School',
    subtitle: 'Stagione 2',
    supporters: 84200,
    goal: 150000,
    current: 84200,
    status: 'fan',
  },
  {
    id: 'yamada',
    title: 'My Love Story with Yamada-kun at Lv999',
    subtitle: 'Stagione 2',
    supporters: 121500,
    goal: 150000,
    current: 121500,
    status: 'fan',
  },
  {
    id: 'hoshi-no-tabi',
    title: 'Hoshi no Tabi',
    subtitle: 'Film',
    supporters: 182430,
    goal: 200000,
    current: 182430,
    status: 'verified',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
      <section className="rounded-3xl bg-gradient-to-r from-brand-500 via-brand-600 to-indigo-600 p-8 text-white shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Demo di prova
            </div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Quale anime vuoi rivedere?</h1>
            <p className="mt-4 max-w-xl text-base text-pink-50 md:text-lg">
              Misuriamo la domanda dei fan prima di aprire campagne ufficiali, con raccolta dati e moderazione reale.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/campaigns" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-ink transition hover:bg-slate-100">
              Esplora campagne
            </Link>
            <Link href="/propose" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Proponi una richiesta
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <StatCard icon={<Heart className="h-5 w-5" />} label="Fans attivi" value="430k" />
        <StatCard icon={<Search className="h-5 w-5" />} label="Anime monitorati" value="128" />
        <StatCard icon={<BadgeCheck className="h-5 w-5" />} label="Campagne verificate" value="19" />
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">Campagne in evidenza</h2>
          <Link href="/campaigns" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
            Vedi tutte <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        <FeatureCard
          icon={<ShieldCheck className="h-5 w-5 text-brand-600" />}
          title="Moderazione controllata"
          text="Ogni proposta passa da review prima di essere pubblicata. Nessun dato fantasma e nessun contenuto automatico." 
        />
        <FeatureCard
          icon={<Heart className="h-5 w-5 text-brand-600" />}
          title="Misura il vero interesse"
          text="L'utente dichiara il proprio supporto senza pagare: i contatori sono veri, così il mercato ha un senso." 
        />
        <FeatureCard
          icon={<Sparkles className="h-5 w-5 text-brand-600" />}
          title="Pronto per studi e publisher"
          text="In futuro la piattaforma può trasformarsi in un report di fan demand da inviare a chi detiene i diritti." 
        />
      </section>
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 inline-flex rounded-xl bg-pink-50 p-2 text-brand-600">{icon}</div>
      <div className="text-3xl font-black">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex rounded-xl bg-pink-50 p-3">{icon}</div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
