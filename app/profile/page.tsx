'use client';

import { useState } from 'react';

export default function ProposePage() {
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState('Nuova stagione');
  const [details, setDetails] = useState('');
  const [officialLink, setOfficialLink] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ title, kind, details, officialLink });
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Moderazione</p>
        <h1 className="mt-2 text-3xl font-black">Proponi una nuova richiesta</h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Titolo anime</label>
            <input value={title} onChange={(event) => setTitle(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="e.g. KonoSuba: Stagione 4" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Tipo di progetto</label>
            <select value={kind} onChange={(event) => setKind(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white">
              <option>Nuova stagione</option>
              <option>Sequel</option>
              <option>Remake</option>
              <option>Film</option>
              <option>Spin-off</option>
              <option>Continuazione di un'opera interrotta</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Perché è speciale per te</label>
            <textarea value={details} onChange={(event) => setDetails(event.target.value)} rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Scrivi un motivo personale, un pezzo di storia, un'esperienza o una motivazione chiara." />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Link ufficiale o trailer (opzionale)</label>
            <input value={officialLink} onChange={(event) => setOfficialLink(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="https://" />
          </div>

          <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
            Una richiesta di fan non è una campagna ufficiale. Nessuno può promettere produzione o vendita del prodotto senza diritti chiari. La proposta verrà revisita da un admin.
          </div>

          <button type="submit" className="w-full rounded-full bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Invia alla moderazione
          </button>
        </form>
      </div>
    </main>
  );
}
