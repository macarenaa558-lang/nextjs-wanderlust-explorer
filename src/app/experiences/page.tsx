"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { experiences } from "@/data/experiences";
import { useAppState } from "@/components/AppState";
import { useExperiences } from "@/hooks/useExperiences";

export default function ExperiencesPage() {
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
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (category) params.set("category", category);
    if (destination) params.set("destination", destination);

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }, [search, category, destination, pathname, router]);

  const { filteredExperiences } = useExperiences({
    experiences,
    search,
    category,
    destination,
  });

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Explora experiencias</h1>

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