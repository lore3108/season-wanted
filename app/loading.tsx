'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Errore</p>
      <h1 className="mt-4 text-4xl font-black">Qualcosa è andato storto</h1>
      <button onClick={() => reset()} className="mt-6 rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">
        Riprova
      </button>
    </main>
  );
}
