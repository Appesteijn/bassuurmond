import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" aria-label="Suurmond Technical Solutions">
            <Logo className="h-10 sm:h-12 w-auto" />
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-navy-800">
            <a href="#diensten" className="hover:text-brand-600 transition-colors">
              Diensten
            </a>
            <a href="#advies" className="hover:text-brand-600 transition-colors">
              Advies
            </a>
            <a href="#contact" className="hover:text-brand-600 transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-navy-900 text-white text-sm font-semibold hover:bg-brand-600 transition-colors"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </header>
  );
}
