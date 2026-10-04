import Link from 'next/link';
import type { CampaignStatus } from '@/types';

export function CampaignCard({
  id,
  title,
  subtitle,
  supporters,
  goal,
  current,
  status,
}: {
  id: string;
  title: string;
  subtitle: string;
  supporters: number;
  goal: number;
  current: number;
  status: CampaignStatus;
}) {
  const percent = Math.min(100, (current / goal) * 100);

  return (
    <Link href={`/campaigns/${id}`} className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 p-5 text-white">
        <div className="mb-2 inline-flex rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
          {status === 'official' || status === 'funding_active' ? 'Verificata' : 'Richiesta fan'}
        </div>
        <h3 className="text-2xl font-black leading-tight">{title}</h3>
      </div>

      <div className="space-y-4 p-5">
        <div className="text-sm font-medium text-slate-500">{subtitle}</div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-indigo-600" style={{ width: `${percent}%` }} />
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>{supporters.toLocaleString('it-IT')} sostenitori</span>
          <strong className="text-slate-900">{Math.round(percent)}%</strong>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Obiettivo</span>
          <span className="font-bold text-slate-900">€{goal.toLocaleString('it-IT')}</span>
        </div>
      </div>
    </Link>
  );
}
