"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Experience } from "@/types/experience";
import { experiences } from "@/data/experiences";

interface AppStateContextType {
  favoriteIds: number[];
  favorites: Experience[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined
);

export default function AppState({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((currentFavoriteIds) => {
      const alreadyFavorite = currentFavoriteIds.includes(id);

      if (alreadyFavorite) {
        return currentFavoriteIds.filter((favoriteId) => favoriteId !== id);
      }

      return [...currentFavoriteIds, id];
    });
  };

  const favorites = useMemo(() => {
    const favoriteIdsSet = new Set(favoriteIds);
    return experiences.filter((experience) => favoriteIdsSet.has(experience.id));
  }, [favoriteIds]);

  const isFavorite = (id: number) => {
    return favoriteIds.includes(id);
  };

  return (
    <AppStateContext.Provider
      value={{ favoriteIds, favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState debe usarse dentro de AppState");
  }

  return context;
}