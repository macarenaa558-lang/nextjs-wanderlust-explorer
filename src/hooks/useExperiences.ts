import { Experience } from "@/types/experience";

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

interface UseExperiencesProps {
  experiences: Experience[];
  search: string;
  category: string;
  destination: string;
}

export function useExperiences({
  experiences,
  search,
  category,
  destination,
}: UseExperiencesProps) {
  const safeSearchRegex = new RegExp(escapeRegex(search), "i");

  const filteredExperiences = experiences.filter((experience) => {
    const matchesSearch = safeSearchRegex.test(experience.title);

    const matchesCategory =
      category === "" || experience.category === category;

    const matchesDestination =
      destination === "" ||
      experience.destination.toLowerCase().includes(destination.toLowerCase());

    return matchesSearch && matchesCategory && matchesDestination;
  });

  return {
    filteredExperiences,
  };
}