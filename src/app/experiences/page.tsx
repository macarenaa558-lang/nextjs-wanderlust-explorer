import ExperienceCard from "@/components/ExperienceCard";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Explora experiencias
      </h1>

      <SearchBar
        value=""
        onChange={() => {}}
      />

      <FilterBar
        category=""
        destination=""
        onCategoryChange={() => {}}
        onDestinationChange={() => {}}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
          />
        ))}
      </div>
    </main>
  );
}