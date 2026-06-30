import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4fbff_0%,#e8f6ff_35%,#f9fdff_100%)] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute top-8 right-[-4rem] h-80 w-80 rounded-full bg-emerald-200/45 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/45 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-700 shadow-sm sm:text-sm">
            Curado para viajeros que buscan experiencias memorables
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.6rem]">
                Explora el mundo
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  a traves de experiencias
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Descubre aventuras, cultura y gastronomia en una plataforma
                pensada para decidir rapido, filtrar por destino y compartir tus
                hallazgos con un link.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/experiences"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-7 py-3.5 font-semibold text-white shadow-[0_12px_30px_-14px_rgba(2,132,199,0.8)] transition hover:bg-sky-500"
                >
                  Empezar a explorar
                </Link>

                <Link
                  href="/favorites"
                  className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white/90 px-7 py-3.5 font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  Ver favoritos
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_70px_-35px_rgba(2,132,199,0.45)] backdrop-blur sm:p-6">
              <div className="grid grid-cols-2 gap-3">
                <article className="rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    Catalogo
                  </p>
                  <p className="mt-1 text-3xl font-bold text-slate-900">100</p>
                  <p className="text-sm text-slate-600">experiencias</p>
                </article>

                <article className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Categorias
                  </p>
                  <p className="mt-1 text-3xl font-bold text-slate-900">5</p>
                  <p className="text-sm text-slate-600">formas de viajar</p>
                </article>
              </div>

              <article className="mt-3 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-emerald-50 p-4">
                <p className="text-sm leading-relaxed text-slate-700">
                  Busca por titulo, filtra por categoria o destino y comparte
                  vistas personalizadas desde la URL.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-3xl border border-sky-100 bg-white/80 p-4 shadow-[0_16px_45px_-32px_rgba(14,116,144,0.55)] sm:p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-sky-700">
            Explora por categoria
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
                className="rounded-xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-4 text-center transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Explorar
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}