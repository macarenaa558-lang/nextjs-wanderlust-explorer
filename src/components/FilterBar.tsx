interface FilterBarProps {
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export default function FilterBar({
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border rounded-lg px-4 py-3"
      >
        <option value="">Todas las categorías</option>
        <option value="Adventure">Adventure</option>
        <option value="Culture">Culture</option>
        <option value="Food">Food</option>
        <option value="Wellness">Wellness</option>
        <option value="Nature">Nature</option>
      </select>

      <input
        type="text"
        placeholder="Buscar destino..."
        value={destination}
        onChange={(e) => onDestinationChange(e.target.value)}
        className="border rounded-lg px-4 py-3"
      />
    </div>
  );
}