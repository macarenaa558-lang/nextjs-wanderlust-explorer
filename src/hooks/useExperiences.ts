import { Experience } from "@/types/experience";

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
  const filteredExperiences = experiences.filter((experience) => {
    const matchesSearch = new RegExp(search, "i").test(experience.title);

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