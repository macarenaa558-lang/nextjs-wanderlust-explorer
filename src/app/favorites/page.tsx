"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { useAppState } from "@/components/AppState";

export default function FavoritesPage() {
  const { favorites, toggleFavorite, isFavorite } = useAppState();

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">
          Todavía no marcaste ninguna experiencia como favorita.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((experience) => (
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