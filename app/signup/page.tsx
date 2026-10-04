'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Season Wanted</p>
          <h1 className="mt-2 text-3xl font-black">Accedi</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="tu@email.com" />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full rounded-full bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Accedi
          </button>
        </form>

        <div className="mt-6 space-y-2 text-center text-sm text-slate-600">
          <p>Non hai un account? <Link href="/signup" className="font-semibold text-brand-600">Registrati</Link></p>
          <p>Versione di prova: la piattaforma usa autenticazione reale con Supabase in produzione.</p>
        </div>
      </div>
    </main>
  );
}
