import Link from 'next/link';
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
  {
    id: 'claymore',
    title: 'Claymore',
    subtitle: 'Continuazione',
    supporters: 46800,
    goal: 100000,
    current: 46800,
    status: 'fan',
  },
  {
    id: 'ouran',
    title: 'Ouran High School Host Club',
    subtitle: 'Stagione 2',
    supporters: 19300,
    goal: 50000,
    current: 19300,
    status: 'fan',
  },
  {
    id: 'ao-haru-ride',
    title: 'Ao Haru Ride',
    subtitle: 'Stagione 2',
    supporters: 97100,
    goal: 100000,
    current: 97100,
    status: 'fan',
  },
];

export default function CampaignsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">Catalogo</p>
          <h1 className="text-3xl font-black">Campagne e richieste</h1>
        </div>
        <Link href="/propose" className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
          Proponi una richiesta
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>
    </main>
  );
}
