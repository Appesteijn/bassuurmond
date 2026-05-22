export default function Advies() {
  return (
    <section id="advies" className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Technisch advies
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Meedenken in oplossingen
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Naast uitvoerend werk bieden wij technisch advies en ondersteuning
              bij vraagstukken, systeemkeuzes en praktische oplossingen.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Dit richt zich op het beoordelen van mogelijkheden, het meedenken
              in oplossingen en het vertalen van wensen naar haalbare en
              werkbare technische toepassingen.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center px-6 py-3 rounded-md bg-navy-900 text-white font-semibold hover:bg-brand-600 transition-colors"
            >
              Plan een gesprek
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <ul className="grid gap-4">
            {[
              "Beoordelen van technische mogelijkheden",
              "Systeemkeuzes en componentenselectie",
              "Vertalen van wensen naar werkbare oplossingen",
              "Tweede mening bij complexe vraagstukken",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 p-5 bg-white rounded-lg border border-slate-200"
              >
                <span className="shrink-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-navy-900 font-medium pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
