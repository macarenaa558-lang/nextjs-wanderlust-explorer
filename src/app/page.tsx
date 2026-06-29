import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.2),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.18),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-sky-200 backdrop-blur">
            Experiencias reales, momentos inolvidables
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Viaja distinto.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300">
                  Descubre el mundo por experiencias.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-200">
                Explora aventuras, gastronomía, bienestar, cultura y naturaleza
                en un catálogo diseñado para inspirarte y ayudarte a decidir en
                segundos.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/experiences"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-3.5 font-semibold text-white hover:bg-sky-400 transition"
                >
                  Empezar a explorar
                </Link>

                <Link
                  href="/favorites"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver favoritos
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-sky-200">
                  Catálogo
                </p>
                <p className="mt-1 text-2xl font-bold">100</p>
                <p className="text-sm text-slate-300">experiencias únicas</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-emerald-200">
                  Categorías
                </p>
                <p className="mt-1 text-2xl font-bold">5</p>
                <p className="text-sm text-slate-300">formas de viajar</p>
              </div>

              <div className="col-span-2 rounded-2xl border border-white/15 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 p-4 backdrop-blur">
                <p className="text-sm text-slate-100">
                  Filtra por destino, categoría o búsqueda en tiempo real y
                  comparte links con la URL prefiltrada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Adventure",
            "Food",
            "Wellness",
            "Culture",
            "Nature",
          ].map((category) => (
            <Link
              key={category}
              href={`/experiences?category=${category}`}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-center hover:border-sky-400/60 hover:bg-slate-900 transition"
            >
              <p className="text-sm text-slate-300">Explorar</p>
              <p className="mt-1 text-lg font-semibold text-white">{category}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}