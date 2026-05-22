import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md text-center">
        <Logo className="h-14 w-auto mx-auto" />
        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand-600">
          404
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-navy-900">
          Pagina niet gevonden
        </h1>
        <p className="mt-4 text-slate-600">
          De pagina die je zoekt bestaat niet (meer).
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center px-6 py-3 rounded-md bg-navy-900 text-white font-semibold hover:bg-brand-600 transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </main>
  );
}
