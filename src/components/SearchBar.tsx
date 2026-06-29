interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Buscar experiencias
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          🔎
        </span>

        <input
          type="text"
          placeholder="Ej: safari, yoga, sushi..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>
    </div>
  );
}