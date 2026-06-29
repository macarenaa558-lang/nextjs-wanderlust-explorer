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
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-slate-700 mb-3">Filtros</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
            Categoría
          </label>

          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          >
            <option value="">Todas las categorías</option>
            <option value="Adventure">Adventure</option>
            <option value="Culture">Culture</option>
            <option value="Food">Food</option>
            <option value="Wellness">Wellness</option>
            <option value="Nature">Nature</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
            Destino
          </label>

          <input
            type="text"
            placeholder="Ciudad o país"
            value={destination}
            onChange={(e) => onDestinationChange(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
      </div>
    </div>
  );
}