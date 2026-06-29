import Link from "next/link";
import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Link href={`/experiences/${experience.id}`}>
      <article className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <p className="text-sm text-blue-600 font-semibold">
            {experience.category}
          </p>

          <h2 className="text-xl font-bold mt-1">
            {experience.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {experience.destination}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">
              USD {experience.price}
            </span>

            <span>⭐ {experience.rating}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ExperienceCard;