export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      {/* Subtle technical grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Technische dienstverlening
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Doordachte techniek,
            <br />
            <span className="text-brand-400">netjes uitgevoerd.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Van kleine aanpassingen tot complete projecten — ontwerpen,
            installeren, aanpassen en onderhouden van technische systemen en
            maatwerkoplossingen. Functioneel, betrouwbaar en praktisch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20"
            >
              Direct contact
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Wat doen wij?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
