"use client";

import { createContext, useContext, useState } from "react";
import { Experience } from "@/types/experience";

interface AppStateContextType {
  favorites: Experience[];
  toggleFavorite: (experience: Experience) => void;
  isFavorite: (id: number) => boolean;
}

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined
);

export default function AppState({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Experience[]>([]);

  const toggleFavorite = (experience: Experience) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (item) => item.id === experience.id
      );

      if (alreadyFavorite) {
        return currentFavorites.filter((item) => item.id !== experience.id);
      }

      return [...currentFavorites, experience];
    });
  };

  const isFavorite = (id: number) => {
    return favorites.some((experience) => experience.id === id);
  };

  return (
    <AppStateContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
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