import Link from 'next/link';

const menu = [
  { href: '/', label: 'Home' },
  { href: '/campaigns', label: 'Campagne' },
  { href: '/propose', label: 'Proponi' },
  { href: '/dashboard', label: 'Admin' },
  { href: '/profile', label: 'Profilo' },
  { href: '/login', label: 'Accedi' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-xl font-black tracking-tight text-ink">
          Season <span className="text-brand-600">Wanted</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/signup" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
          Crea account
        </Link>
      </nav>
    </header>
  );
}
