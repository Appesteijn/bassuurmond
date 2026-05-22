import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Logo className="h-14 w-auto" monochrome="light" />
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Technische dienstverlening en advies. Functioneel, betrouwbaar en
              praktisch.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="tel:+31653790501"
                  className="hover:text-brand-400 transition-colors"
                >
                  06 - 53 79 05 01
                </a>
              </li>
              <li>
                <a
                  href="mailto:sts@bassuurmond.nl"
                  className="hover:text-brand-400 transition-colors break-all"
                >
                  sts@bassuurmond.nl
                </a>
              </li>
              <li>Zeeland (NB), Nederland</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Bedrijfsgegevens
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Suurmond Technical Solutions</li>
              <li>KvK: 98019791</li>
              <li>BTW: NL005304618B68</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-700 text-xs text-slate-400 text-center">
          &copy; {new Date().getFullYear()} Suurmond Technical Solutions. Alle
          rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
