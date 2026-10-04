import Link from 'next/link';
import { ArrowLeft, Heart, MessageSquare, Star } from 'lucide-react';

const campaignMap: Record<string, any> = {
  'prison-school': {
    id: 'prison-school',
    title: 'Prison School',
    subtitle: 'Stagione 2',
    supporters: 84200,
    goal: 150000,
    description:
      'Anime del 2015 tratto dal manga di Akira Hiramoto, ormai concluso. I fan chiedono una seconda stagione che adatti il resto della storia.',
    status: 'fan',
  },
  yamada: {
    id: 'yamada',
    title: 'My Love Story with Yamada-kun at Lv999',
    subtitle: 'Stagione 2',
    supporters: 121500,
    goal: 150000,
    description:
      'Anime del 2023 che racconta la storia d’amore tra Akane e Yamada nel mondo dei giochi online. I fan chiedono una seconda stagione.',
    status: 'fan',
  },
  'hoshi-no-tabi': {
    id: 'hoshi-no-tabi',
    title: 'Hoshi no Tabi',
    subtitle: 'Film',
    supporters: 182430,
    goal: 200000,
    description:
      'Esempio di campagna ufficiale con titolo di fantasia: il titolare dei diritti ha accettato di avviare la raccolta.',
    status: 'verified',
  },
};

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const campaign = campaignMap[params.id] ?? campaignMap['prison-school'];
  const progress = Math.min(100, (campaign.supporters / campaign.goal) * 100);

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <Link href="/campaigns" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600">
        <ArrowLeft className="h-4 w-4" />
        Torna alle campagne
      </Link>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 p-8 text-white">
          <div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {campaign.status === 'verified' ? 'Campagna verificata' : 'Richiesta dei fan'}
          </div>
          <h1 className="text-3xl font-black md:text-5xl">{campaign.title}</h1>
          <p className="mt-2 text-lg text-pink-50">{campaign.subtitle}</p>
        </div>

        <div className="space-y-8 p-6 md:p-8">
          <div>
            <p className="text-base leading-7 text-slate-700">{campaign.description}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Metric label="Sostenitori" value={campaign.supporters.toLocaleString('it-IT')} />
            <Metric label="Obiettivo" value={`€${campaign.goal.toLocaleString('it-IT')}`} />
            <Metric label="Avanzamento" value={`${Math.round(progress)}%`} />
          </div>

          <div>
            <div className="mb-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-indigo-600" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>{campaign.supporters.toLocaleString('it-IT')} / {campaign.goal.toLocaleString('it-IT')}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <ActionButton label="Sono interessato" icon={<Heart className="h-4 w-4" />} />
            <ActionButton label="Mi piace" icon={<Star className="h-4 w-4" />} />
            <ActionButton label="Commenta" icon={<MessageSquare className="h-4 w-4" />} />
          </div>
        </div>
      </article>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-black">{value}</div>
    </div>
  );
}

function ActionButton({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-600">
      {icon}
      {label}
    </button>
  );
}
