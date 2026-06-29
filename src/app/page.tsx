import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Descubre experiencias inolvidables
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl mb-10">
        Explora aventuras, gastronomía, bienestar, cultura y naturaleza en
        destinos increíbles alrededor del mundo.
      </p>

      <Link
        href="/experiences"
        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Explorar experiencias
      </Link>
    </main>
  );
}