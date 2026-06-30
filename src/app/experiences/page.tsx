"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { experiences } from "@/data/experiences";
import { useAppState } from "@/components/AppState";
import { useExperiences } from "@/hooks/useExperiences";

function ExperiencesContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { toggleFavorite, isFavorite } = useAppState();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams();

      if (search) params.set("search", search);
      if (category) params.set("category", category);
      if (destination) params.set("destination", destination);

      const nextQuery = params.toString();
      const currentQuery = searchParams.toString();

      if (nextQuery !== currentQuery) {
        router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname);
      }
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [search, category, destination, pathname, router, searchParams]);

  const { filteredExperiences } = useExperiences({
    experiences,
    search,
    category,
    destination,
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Explora experiencias</h1>
        <p className="mt-2 text-slate-600">
          Filtra por categoría y destino para encontrar la experiencia ideal.
        </p>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <FilterBar
        category={category}
        destination={destination}
        onCategoryChange={setCategory}
        onDestinationChange={setDestination}
      />

      {filteredExperiences.length === 0 ? (
        <p className="mt-8 text-center text-gray-600">
          No se encontraron resultados
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<main className="max-w-7xl mx-auto px-6 py-10">Cargando experiencias...</main>}>
      <ExperiencesContent />
    </Suspense>
  );
}