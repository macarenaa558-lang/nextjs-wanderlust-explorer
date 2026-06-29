"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/types/experience";

const fallbackImageByCategory = {
  Adventure:
    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  Food:
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  Wellness:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  Culture:
    "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=900&q=80",
  Nature:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
} as const;

interface ExperienceCardProps {
  experience: Experience;
  isFavorite?: boolean;
  onToggleFavorite?: (experience: Experience) => void;
}

const ExperienceCard = ({
  experience,
  isFavorite = false,
  onToggleFavorite,
}: ExperienceCardProps) => {
  const [hasImageError, setHasImageError] = useState(false);
  const fallbackSrc = fallbackImageByCategory[experience.category];
  const imageSrc = hasImageError ? fallbackSrc : experience.imageUrl;

  return (
    <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white relative">
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          onToggleFavorite?.(experience);
        }}
        className="absolute top-3 right-3 bg-white rounded-full w-10 h-10 shadow flex items-center justify-center text-xl"
        aria-label="Agregar a favoritos"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <Link href={`/experiences/${experience.id}`}>
        <Image
          src={imageSrc}
          alt={experience.title}
          width={900}
          height={700}
          unoptimized
          className="h-48 w-full object-cover"
          onError={() => {
            if (!hasImageError) {
              setHasImageError(true);
            }
          }}
        />

        <div className="p-4">
          <p className="text-sm text-blue-600 font-semibold">
            {experience.category}
          </p>

          <h2 className="text-xl font-bold mt-1">{experience.title}</h2>

          <p className="text-gray-600 mt-2">{experience.destination}</p>

          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">USD {experience.price}</span>

            <span>⭐ {experience.rating}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ExperienceCard;