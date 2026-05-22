export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Contact
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Een vraag of project? Neem gerust contact op.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Het snelst bereikbaar via telefoon of e-mail. We denken graag mee.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <a
            href="tel:+31653790501"
            className="group p-8 rounded-xl border border-slate-200 hover:border-brand-400 hover:shadow-lg transition-all flex items-start gap-5"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Telefoon
              </p>
              <p className="mt-1 text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                06 - 53 79 05 01
              </p>
              <p className="mt-2 text-sm text-slate-500">Direct contact, ma–vr</p>
            </div>
          </a>

          <a
            href="mailto:sts@bassuurmond.nl"
            className="group p-8 rounded-xl border border-slate-200 hover:border-brand-400 hover:shadow-lg transition-all flex items-start gap-5"
          >
            <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                E-mail
              </p>
              <p className="mt-1 text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors break-all">
                sts@bassuurmond.nl
              </p>
              <p className="mt-2 text-sm text-slate-500">Reactie binnen één werkdag</p>
            </div>
          </a>
        </div>

        <div className="mt-10 p-6 rounded-xl bg-navy-900 text-white">
          <div className="grid gap-6 sm:grid-cols-3 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                Bedrijfsnaam
              </p>
              <p className="mt-2 font-medium">Suurmond Technical Solutions</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                Vestiging
              </p>
              <p className="mt-2 font-medium">Zeeland (NB), Nederland</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                KvK / BTW
              </p>
              <p className="mt-2 font-medium">KvK: 98019791</p>
              <p className="font-medium">BTW: NL005304618B68</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
