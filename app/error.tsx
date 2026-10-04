import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">404</p>
      <h1 className="mt-4 text-4xl font-black">Pagina non trovata</h1>
      <p className="mt-4 text-slate-600">La risorsa richiesta non esiste o è stata spostata.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">
        Torna alla home
      </Link>
    </main>
  );
}
