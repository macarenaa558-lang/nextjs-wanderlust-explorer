import Link from "next/link";
import Image from "next/image";
import { experiences } from "@/data/experiences";

interface ExperienceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { id } = await params;
  const experienceId = Number(id);

  const experience = experiences.find((item) => item.id === experienceId);

  if (!experience) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">
          Experiencia no encontrada
        </h1>

        <Link href="/experiences" className="text-blue-600">
          Volver a experiencias
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <Link href="/experiences" className="text-blue-600">
        ← Volver a experiencias
      </Link>

      <Image
        src={experience.imageUrl}
        alt={experience.title}
        width={1200}
        height={700}
        unoptimized
        className="w-full h-80 object-cover rounded-xl mt-6 mb-8"
      />

      <p className="text-blue-600 font-semibold">
        {experience.category}
      </p>

      <h1 className="text-4xl font-bold mt-2 mb-4">
        {experience.title}
      </h1>

      <p className="text-gray-600 mb-4">{experience.destination}</p>

      <p className="text-lg mb-6">{experience.description}</p>

      <div className="flex gap-6 text-lg">
        <span className="font-semibold">USD {experience.price}</span>
        <span>⭐ {experience.rating}</span>
      </div>
    </main>
  );
}