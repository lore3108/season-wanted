'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ username, email, password, confirmPassword, birthDate, accepted });
  };

  return (
    <main className="mx-auto max-w-lg px-4 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Season Wanted</p>
          <h1 className="mt-2 text-3xl font-black">Crea il tuo account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">Nome utente</label>
            <input id="username" value={username} onChange={(event) => setUsername(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="es. otaku_italia" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="tu@email.com" />
          </div>

          <div>
            <label htmlFor="birthDate" className="mb-2 block text-sm font-medium text-slate-700">Data di nascita</label>
            <input id="birthDate" type="date" value={birthDate} onChange={(event) => setBirthDate(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Minimo 8 caratteri" />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">Conferma password</label>
            <input id="confirmPassword" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none transition focus:border-brand-500 focus:bg-white" placeholder="Ripeti la password" />
          </div>

          <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
            <span>Accetto i Termini, la Privacy Policy e le regole della community.</span>
          </label>

          <button type="submit" className="w-full rounded-full bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Crea account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Hai già un account? <Link href="/login" className="font-semibold text-brand-600">Accedi</Link>
        </p>
      </div>
    </main>
  );
}
